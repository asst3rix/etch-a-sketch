const grid = document.querySelector("#grid");
const gridSizeButton = document.querySelector("#gridSizeButton");
const gridSize = document.querySelector("#gridSize");

// Creation of the 16x16 grid
createGrid(gridSize.value);

gridSizeButton.addEventListener("click", () => { changeGridSize(gridSize.value); });

function createGrid(size) {
    if (size < 1 || size > 100) {
        size = 16;
    }
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.style.flex = "1 0 " + 100 / size + "%"; // adjust the size of the squares
        grid.appendChild(div);
    }

    // We select all the squares
    const squares = document.querySelectorAll("#grid div");
    // We affect to all the squares, a mouseover EventListener that add a CSS class
    squares.forEach((div) => {
        div.addEventListener("mouseover", () => {
            //div.classList.add("mouseover");
            div.style.backgroundColor = "rgb(" + getRandomInt(256) + "," + getRandomInt(256) + "," + getRandomInt(256) + ")";
        });
    });
}

function changeGridSize(size) {
    // We delete the actual grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    // To create it again
    createGrid(size);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
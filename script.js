const grid = document.querySelector("#grid");
const gridSizeButton = document.querySelector("#gridSizeButton");
const gridSize = document.querySelector("#gridSize");

// Creation of the 16x16 grid
createGrid(gridSize.value);

gridSizeButton.addEventListener("click", () => { changeGridSize(gridSize.value); });

// We select all the squares
const squares = document.querySelectorAll("#grid div");
// We affect to all the squares, a mouseover EventListener that add a CSS class
squares.forEach((div) => {
    div.addEventListener("click", () => {
        div.classList.add("mouseover");
    });
});

function createGrid(size) {
    for (let i = 0; i < size*size; i++) {
        const div = document.createElement("div");
        div.style.flex = "1 0 " + 100/size + "%";
        grid.appendChild(div);
    }
}

function changeGridSize(size) {
    // We delete the actual grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    // To create it again
    createGrid(size);
}
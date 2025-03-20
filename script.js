const grid = document.querySelector("#grid");

// Creation of the 16x16 grid
for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    grid.appendChild(div);
}

// We select all the squares
const squares = document.querySelectorAll("#grid div");
// We affect to all the squares, a mouseover EventListener that add a CSS class
squares.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.classList.add("mouseover");
    });
});
const grid = document.querySelector(".grid-container")
for (i = 0; i < 32; i++) {
    const square = document.createElement("div")
    square.className = 'grid-item';
    grid.appendChild(square)
}
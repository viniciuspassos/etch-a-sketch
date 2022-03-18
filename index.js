const grid = document.querySelector(".grid-container");
createGrid();

const clearButton = document.querySelector("button");
clearButton.addEventListener("click", function (event) {
  const squares = document.querySelectorAll(".grid-item");
  squares.forEach((item) => item.remove());
  const newSize = window.prompt("Grid size. Max 100");
  const isValid = validateSize(newSize);
  if (!isValid) {
    alert("Size to big");
    return;
  }
  createGrid(newSize * 2);
});

const validateSize = (userSize) => {
  if (userSize > 100) {
    return false;
  }
  return true;
};

function createGrid(size = 32) {
  for (i = 0; i < size; i++) {
    const square = document.createElement("div");
    square.className = "grid-item";
    grid.appendChild(square);

    square.addEventListener("mouseover", function (event) {
      square.style.backgroundColor = "green";
    });
  }
}

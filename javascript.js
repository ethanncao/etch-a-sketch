
//create a function that creates a grid of div squares
function createGrid(rows, columns) {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  const squareWidth = 800 / columns;
  const squareHeight = 800 / rows;

  const totalSquares = rows * columns;
  for (let i = 0; i < totalSquares; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-divs');
    div.style.flex = `${squareWidth}px`;
    div.style.height = `${squareHeight}px`;
    div.addEventListener('mouseover', () => {
      div.classList.add('hovered');
    })
    container.appendChild(div);
  }
}

const button = document.querySelector('.reset');

button.addEventListener('click', () => {
  const container = document.querySelector('.container');
  createGrid(16, 16);
})

createGrid(16, 16);
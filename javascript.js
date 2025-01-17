//creating a value of the dimension that will be preset at 16
let dimensionVal = 16;

//create a function that creates a grid of div squares
function createGrid(dimension) {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  const squareDimension = 800 / dimension;

  const totalSquares = dimension * dimension;
  for (let i = 0; i < totalSquares; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-divs');
    div.style.flex = `${squareDimension}px`;
    div.style.height = `${squareDimension}px`;
    div.addEventListener('mouseover', () => {
      div.classList.add('hovered');
    })
    container.appendChild(div);
  }
}

// creating the reset button
const button = document.querySelector('.reset');

button.addEventListener('click', () => {
  const container = document.querySelector('.container');
  createGrid(dimensionVal);
})

//creating the change dimension button
const newGrid = document.querySelector('.prompt');

newGrid.addEventListener('click', () => {
  let newVal = prompt("Please enter a new grid area");
  dimensionVal = parseInt(newVal, 10);
  createGrid(dimensionVal);
})


//the grid will be created at default of 16x16
createGrid(dimensionVal);
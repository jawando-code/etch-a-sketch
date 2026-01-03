let container = document.getElementById('container')
let numberSquares = 256;


for(let i = 0; i < numberSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.id = "square-" + i;
    square.className = 'square';
    container.appendChild(square);
    
}

function defaultGridClear() {
    const defaultSquares = document.querySelectorAll('.square')
    defaultSquares.forEach((squares) => {
        squares.remove();
    })
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function gridDraw(num) {
    console.log(gridGenerate);
 num = (gridGenerate * gridGenerate);
let width = 800/gridGenerate;
let height = width;
let flexBase = 100/gridGenerate;
    for(let i = 0; i < num; i++) {
        
        const squareUser = document.createElement('div');
        
        squareUser.className = 'square-user';
        squareUser.id = "square-" + i;
        squareUser.style.backgroundColor = 'dodgerblue';
        squareUser.style.width = width + "px";
        squareUser.style.height = height + "px";      
        squareUser.style.flexBasis =  flexBase + "%";
        squareUser.style.border = "1px solid black";
        squareUser.style.boxSizing = "border-box";
        squareUser.classList.add = ('square-user');
        
    
        container.appendChild(squareUser);
    }

    const squareUserEl = document.querySelectorAll('.square-user');
    const clearGrid = document.getElementById('cleargrid');
    squareUserEl.forEach((squares) => {
    squares.addEventListener('mouseover', () => {
        squares.style.backgroundColor = getRandomColor();
    })
    clearGrid.addEventListener('click', () => {
    squares.style.backgroundColor = 'dodgerblue'
})

})
}

function gridClear() {
    let squareUserEl = document.querySelectorAll('.square-user')
    squareUserEl.forEach((square) => {
        square.remove();
    })
}


const squares = document.querySelectorAll('.square')
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'red';
    });
   
    


})
let gridGenerate = '';
function gridPrompt() {
    const min = 10;
    const max = 100;
   while(true) {
    const getNumber = prompt(`Please enter a number between ${min} and ${max} (inclusive):`)
    if (getNumber === null) {
        alert("Input cancelled. Please try again.");
        continue;
    }
 gridGenerate = parseInt(getNumber, 10);

    if(!isNaN(gridGenerate) && gridGenerate >= min && gridGenerate <= max) {
        alert(`Grid selected: ${gridGenerate} x ${gridGenerate}`);
        return gridGenerate;
    } else {
        alert("Invalid Input. Please enter a number within the specific range.")
    }

}

};





let newGrid = document.getElementById('newgrid');
let createGrid = document.createElement('button');

newGrid.addEventListener('click', defaultGridClear)
newGrid.addEventListener('click', gridPrompt)
newGrid.addEventListener('click', gridClear );
newGrid.addEventListener('click', gridDraw)



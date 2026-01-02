let container = document.getElementById('container')
let numberSquares = 256;


for(let i = 0; i < numberSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.id = "square-" + i;
    square.tagName = 'square'
    

    container.appendChild(square);
}

const squares = document.querySelectorAll('.square')
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'red';
    });
})
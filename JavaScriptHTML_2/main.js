/**
 * Построить флаг РФ из символа “О” размером 60х80 символов
 */
const figure = document.getElementById('figure');
const btn = document.getElementById('btn');

let color=['white', 'blue', 'red'];
let width = 80;
let height = 60;
let ch = 'O';

const string = (length) => {
  let str='';
  for (let i = 0; i < length; i++) {
    str = str + ch;
  }
  return str;
}

const templateSpan =(className, str) => `<span class=${className}>${str}</span>`;

const createFigure = (height, templateSpan, color) => {
  const arrCh = string(width);
  for (let x = 0; x < 3; x++) {
    for (let i = 1; i < height/3; i++) {
      let rowEl = templateSpan(color[x], arrCh);
      figure.insertAdjacentHTML('beforeend', rowEl);
    }
  }
}

// event listener
btn.addEventListener('click', function(e) {
  e.preventDefault();
  createFigure(height, templateSpan, color);
});



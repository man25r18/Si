const display = document.getElementById('display');
const fixedResult = '3.772.623.428';

let input = '';
let justCalculated = false;

const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.textContent;

    if (val === 'AC') {
      input = '';
      display.textContent = '0';
      justCalculated = false;
      return;
    }

    if (val === '=') {
      display.textContent = fixedResult;
      input = '';
      justCalculated = true;
      return;
    }

    if (justCalculated) {
      input = '';
      justCalculated = false;
    }

    input += val;
    display.textContent = input;
  });
});

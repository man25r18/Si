const display = document.getElementById('display');
const fixedResult = '3.772.623.428';

let input = '';
let justCalculated = false;

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.textContent;

    if (val === '=') {
      display.textContent = fixedResult;
      input = '';
      justCalculated = true;
    } else {
      if (justCalculated) {
        // Se appena fatto il risultato e premi un tasto diverso da "=" resetta l'input
        input = '';
        justCalculated = false;
      }
      input += val;
      display.textContent = input;
    }
  });
});

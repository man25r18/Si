const display = document.getElementById('display');
const fixedResult = '3.772.623.428';

let input = '';

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.textContent;

    if(val === '=') {
      // Quando premi "=" mostra sempre il risultato fisso
      display.textContent = fixedResult;
      input = ''; // reset input dopo risultato
    } else {
      // Aggiungi il valore premuto all'input e aggiornare display
      input += val;
      display.textContent = input;
    }
  });
});

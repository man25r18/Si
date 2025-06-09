const display = document.getElementById('display');
const fixedResult = '3.772.623.428';

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Ignora l'input e mostra sempre il numero fisso
    display.textContent = fixedResult;
  });
});

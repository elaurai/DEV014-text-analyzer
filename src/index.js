import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const input = document.querySelector("textarea[name='user-input']");
const item1 = document.querySelector("[data-testid='word-count']");
const item2 = document.querySelector("[data-testid='character-count']");
const item3 = document.querySelector("[data-testid='character-no-spaces-count']");
const item4 = document.querySelector("[data-testid='number-count']");
const item5 = document.querySelector("[data-testid='number-sum']");
const item6 = document.querySelector("[data-testid='word-length-average']");

input.addEventListener("input", function(event) {
  const input1 = event.target.value;

  const palabras = analyzer.getWordCount(input1);
  item1.textContent = "Palabras: " + palabras;
  const caracteres = analyzer.getCharacterCount(input1);
  item2.textContent = "Caracteres: " + caracteres;
  const caractsinespacio = analyzer.getCharacterCountExcludingSpaces(input1);
  item3.textContent = "Caracteres Sin Espacios: " + caractsinespacio;
  const numeros = analyzer.getNumberCount(input1);
  item4.textContent = "Números: " + numeros;
  const sumnumeros = analyzer.getNumberSum(input1);
  item5.textContent = "Suma de Números: " + sumnumeros;
  const promlongitud = analyzer.getAverageWordLength(input1);
  item6.textContent = "Promedio longitud: " + promlongitud;

});

const resetbutton = document.getElementById('reset-button');
resetbutton.addEventListener('click', () => {
  input.value = '';
  item1.textContent = "Palabras: 0";
  item2.textContent = "Caracteres: 0";
  item3.textContent = "Caracteres Sin Espacios: 0";
  item4.textContent = "Números: 0";
  item5.textContent = "Suma de Números: 0";
  item6.textContent = "Promedio longitud: 0";

});
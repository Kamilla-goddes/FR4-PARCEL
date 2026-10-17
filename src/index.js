import { getResult } from './guess-number.js';

const input = document.querySelector('.input-btn');
const btn = document.querySelector('.button-btn');
const result = document.querySelector('.result');

let random = Math.floor(Math.random() * 10) + 1;

btn.addEventListener('click', () => {
  const value = Number(input.value);

  if (value > 10 || value < 1) {
    alert('Введіть число від 1 до 10!');
    return;
  }

  result.textContent = getResult(value, random);

  if (value === random) {
    result.className = 'result win';
  } else {
    result.className = 'result lose';
  }

  random = Math.floor(Math.random() * 10) + 1;
});z
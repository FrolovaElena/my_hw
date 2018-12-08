'use strict';

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt('Введите произвольное число');
  if (Number.isNaN(Number(userInput))) {
    alert('Вы ввели не число!');
  }
  numbers.push(Number(userInput));
} while (userInput !== null);

for (const number of numbers) {
  total += number;
}
console.log('Общая сумма чисел равна: ', total);
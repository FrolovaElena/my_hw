/*

let input;

input = prompt('enter numder more than 100');
if(!input) {
    alert('error!');
} else if (Number.isNaN(Number(input))) {
    alert('not a number!');
} else {
    while (Number(input) < 100) {
      input = prompt('enter another number');
    } 
 console.log('enter : ' + input);
}

  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for

const min = 1;
const max = 100;

let number;

for (number = min; number >= min && number <= max; number += 1) {
    if (number % 3 === 0) {
        console.log('fizz');
    } else if (number % 5 === 0 && number % 3 !== 0) {
        console.log('buzz');
    } else {
        console.log(number);
    }
}*/

/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/
/*
const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const newArray = [];
let max = numbers.length;

for (let i=0; i < max; i += 1) {
    if (numbers[i] > num) {
        newArray.push(numbers[i]);
    }
}
  console.log(newArray);


let number;

for (number of numbers) {
    if (number > num) {
        newArray.push(number);
    }
}
  console.log(newArray);  
*/

/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.


const string = "May the force be with you";
let arr = string.split(' ');
let longestWord = arr[0];
let max = arr.length; 
for (let i = 1; i < max; i += 1) {
  if (arr[i].length > longestWord.length) { (сравниваем текущее число с самым большим)
    longestWord = arr[i];
  }
} console.log(longestWord); // 'force
*/


/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of

*/
let userChoise;
let arrNumbers = [];
let number;
let result = 0;
do {
    userChoise = prompt('Введите произвольное число');
    if(Number.isNaN(Number(userChoise))) {
      alert('not a number'); 
      break;
    }
    arrNumbers.push(Number(userChoise));
} while (userChoise !== null);
console.log(arrNumbers);

for(let i = 0; i < arrNumbers.length; i += 1) {
    result += arrNumbers[i];
}
console.log(result);

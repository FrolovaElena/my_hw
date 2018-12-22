'use strict';

/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки
/*
function  checkNumberType(a) {
    if (Number(a) % 2 === 0) {
      return 'Even';
    } else if (Number(a) % 1 === 0) {
      return 'Odd';
    }
 }

console.log( checkNumberType(2) ); // 'Even'

console.log( checkNumberType(46) ); // 'Even'

console.log( checkNumberType(3) ); // 'Odd'

console.log( checkNumberType(17) ); // 'Odd'
 */


 /*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/
/*
 Вызовы функции для проверки

 function formatString(str) {
    if (str.length <= 40) {
        return str;
    } else {
        return (str.slice(0, 41) + '...');
    }
  }
console.log(
    formatString("Curabitur ligula sapien, tincidunt non.")
  ); // вернется оригинальная строка
  
  console.log(
    formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
  ); // вернется форматированная строка
  
  console.log(
    formatString("Curabitur ligula sapien.")
  ); // вернется оригинальная строка
  
  console.log(
    formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
  ); // вернется форматированная строка
  */

  
 /*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// Вызовы функции для проверки
/*
function checkForSpam(str) {
   if (str.toLowerCase().includes('sale') || str.toLowerCase().includes('spam')) {
       return true;
   } else {
       return false;
   }
}

console.log( checkForSpam('Latest technology news') ); // false

console.log( checkForSpam('JavaScript weekly newsletter') ); // false

console.log( checkForSpam('Get best sale offers now!') ); // true

console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true
*/


/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

// Вызовы функции для проверки
/*
function getPx (str) {
    if (typeof str === 'string') {
       return Number.parseFloat(str);
    } else {
       return null;
    }
}
console.log( getPx("10px") === 10 ); // должно быть:  true
console.log( getPx("10.5") === 10.5 ); // должно быть:  true
console.log( getPx("0") === 0 ); // должно быть:  true
console.log( getPx(-1) ); // должно быть:  null
console.log( getPx(10) ); // должно быть:  null
*/


/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/


// Вызовы функции для проверки
/*
function findLongestWord (str) {
    let arr = str.split(' ');
    let max = arr.length;
    let longestWord = arr[0];
    for(let i = 1; i < max; i += 1) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    } return longestWord;
}
console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
  ); // вернет 'jumped'
  
  console.log(
    findLongestWord("Google do a roll")
  ); // вернет 'Google'
  
  console.log(
    findLongestWord("May the force be with you")
  ); // вернет 'force'
  */


  /*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// Вызовы функции для проверки
/*
function findLargestNumber(numbers) {
    let max = numbers.length;
    let largestNumber = numbers[0];
    for (let i = 1; i < max; i += 1) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    } return largestNumber;
}

console.log(
    findLargestNumber([1, 2, 3])
  ); // вернет 3
  
  console.log(
    findLargestNumber([27, 12, 18, 5])
  ); // вернет 27
  
  console.log(
    findLargestNumber([31, 128, 14, 74])
  ); // вернет 128
*/


/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/
/*
const uniqueNumbers  = [2, 1, 4, 9];
function addUniqueNumbers(...args) {
  for(let i = 0; i < args.length; i += 1) {
    if (!uniqueNumbers.includes(args[i])) {
     uniqueNumbers.push(args[i]);
    } 
  }
  return uniqueNumbers;
}
// Вызовы функции для проверки

addUniqueNumbers(1, 2, 3);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
*/


/*
  Создайте функцию removeFromArray(arr), 
  которая объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Удалите все элементы из исходного массива, 
  которые имеют такое же значение, что и аргументы.
*/
/*
const removeFromArray = function(arr,...args) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr.includes(args[i])) {
    arr.splice(arr.indexOf(args[i]), 1);//найти индексы нужных чисел в исходном
                                        //массиве и удалить, начиная с...1 элемент
    }
  } return arr;
};
*/


const removeFromArray = function(arr) {
  const newArray = arguments[0];
  console.log(arguments[0]);
  for (let i = 1; i < arguments.length; i += 1) {
    if (newArray.includes(arguments[i])) {
    newArray.splice(newArray.indexOf(arguments[i]), 1);
    }
  } return newArray;
};

// Вызовы функции для проверки
console.log(
  removeFromArray([1, 2, 3, 4, 5], 2, 4)
); // [1, 3, 5]

console.log(
  removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
); // [12, 8, 17]

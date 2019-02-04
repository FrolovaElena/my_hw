'use strict';
/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/
/*
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = 'happy';
user.hobby = 'javascript';
delete user.premium;
console.log(user);

for (const key in user) {
  console.log('Key value :', key, user[key]);
}

const keys = Object.keys(user);
console.log(keys);

for (const key of keys) {
  console.log(key);
}

const entries = Object.entries(user);
console.log(entries);

for (const entrie of entries) {
  console.log(entrie);
}
*/

/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/
/*
const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 11,
  lorence: 99
};

const entries = Object.entries(tasksCompleted);
let bestWorker = entries[0];

for (let i = 1; i < entries.length; i += 1) {
     if (entries[i][1] > bestWorker[1]) {
     bestWorker = entries[i];
    }
  }
 
console.log(bestWorker[0]);
*/

/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/
/*
const countProps = (obj) => {
  const objectProps = Object.entries(obj);
  return objectProps.length;
};

// Вызовы функции для проверки
console.log(
  countProps({})
); // 0

console.log(
  countProps({a: 1, b: 3, c: 'hello'})
); // 3

*/

/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

const isObjectEmpty = obj => {
  const objectContent = Object.keys(obj);
  return objectContent.length === 0;
};

// Вызовы функции для проверки
console.log(isObjectEmpty({})); // true

console.log(isObjectEmpty({ a: 1 })); // false

console.log(isObjectEmpty({ a: 1, b: 2 })); // false

/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/
/*
const countTotalSalary = (obj) => {
  let salaries = Object.values(obj);
  let countTotalSalary = 0;
  for (let value of salaries) {
    countTotalSalary += value;
  } return countTotalSalary;
};

// Вызовы функции для проверки
console.log(
  countTotalSalary({})
); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330
*/

/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/
/*
const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful' },
  { name: 'Ajax', age: 3, mood: 'tired' },
];

const getAllPropValues = (arr, prop) => {
  let allPropValues = [];
  for (let i = 0; i < users.length; i += 1) {
    if (users[i].hasOwnProperty(prop)) {
      allPropValues.push(users[i][prop]);
    }
  }
  return allPropValues;
};

// Вызовы функции для проверки
console.log(getAllPropValues(users, 'name')); // ['Poly', 'Mango', 'Ajax']

console.log(getAllPropValues(users, 'mood')); // ['happy', 'blissful', 'tired']

console.log(getAllPropValues(users, 'active')); // []
*/

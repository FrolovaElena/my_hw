'use strict';
/*
//Заменить классические циклы for используя методы map, filter, find и т.д.

Функция принимает число и массив и выводит новый массив чисел которые больше данного числа.
const findGreaterThan = (num, arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > num) {
      result.push(arr[i]);
    }
  }
  return result;
};

const findGreaterThan = (num, arr) => arr.filter(number => number > num);

console.log(findGreaterThan(2, [1, 2, 3, 4, 5]));
console.log(findGreaterThan(3, [1, 2, 3, 4, 5]));
console.log(findGreaterThan(1, [1, 2, 3, 4, 5]));


Функция принимает число и массив и выводит новый массив чисел умноженных на это число.
const multiplyBy = (num, arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > num) {
      result.push(arr[i] * num);
    }
  }
  return result;
};

const multiplyBy = (num, arr) => arr.map(number => number * num);

console.log(multiplyBy(2, [1, 2, 3, 4, 5]));
console.log(multiplyBy(3, [1, 2, 3, 4, 5]));
console.log(multiplyBy(4, [1, 2, 3, 4, 5]));


Функция принимает произвольное число и массив и выводит true если все числа массива больше или равны числу.
const findEvery = (num, arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < num) {
        return false;
    }
  }
  return true;
};


const findEvery = (num, arr) => arr.every(number => number >= num);

console.log(findEvery(5, [5, 6, 7, 8, 9]));
console.log(findEvery(6, [5, 6, 7, 8, 9]));
console.log(findEvery(4, [5, 6, 7, 8, 9]));


Функция принимает любое количество аргументов и считает их сумму.
const sumAllNumbers(...args) {
    let accumulator = 0;

     for (let i = 0; i < arr.length; i += 1) {
         accumulator += args[i];
     }
     return accumulator;   
}
*/
/*
const sumAllNumbers = (...args) => args.reduce((acc, arg) => (acc += arg), 0);

console.log(sumAllNumbers(1, 2, 3));
console.log(sumAllNumbers(1, 2, 3, 4));
console.log(sumAllNumbers(1, 2, 3, 4, 5));
console.log(sumAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
*/

/*Функция принимает массив объектов и свойство, возвращает массив всех значений этого ключа. 

const guests = [
  { name: 'Mango', age: 20, isActive: true },
  { name: 'Poly', age: 18, isActive: false },
  { name: 'Ajax', age: 30, isActive: true },
  { name: 'Chelsey', age: 45, isActive: false },
];

const getPropValue = (guests, key) => guests.map(guest => guest[key]);

console.log(getPropValue(guests, 'name'));
console.log(getPropValue(guests, 'age'));
console.log(getPropValue(guests, 'isActive'));
*/

/*
Фунцкия принимает массив гостей и period - количество дней, после чего гость становится неактивным.
Если период больше графы inactiveDays - записать в свойство isActive false, в противном случае - true.
const guests = [
  { name: 'Mango', inactiveDays: 15, isActive: true },
  { name: 'Poly', inactiveDays: 8, isActive: false },
  { name: 'Ajax', inactiveDays: 32, isActive: false },
  { name: 'Chelsey', inactiveDays: 85, isActive: true },
];

const setGuestState = (guests, period) =>
  guests.map(guest => {
    if (period > guest.inactiveDays) {
      return (guest.isActive = true);
    } else {
      return (guest.isActive = false);
    }
  });

console.log(setGuestState(guests, 10));
console.log(setGuestState(guests, 20));
console.log(setGuestState(guests, 50));
*/

/*
Функция принимает массив гостей и позвращает новый массив тех гостей которые активные.
const guests = [
  { name: 'Mango', age: 20, isActive: true },
  { name: 'Poly', age: 18, isActive: false },
  { name: 'Ajax', age: 30, isActive: true },
  { name: 'Chelsey', age: 45, isActive: false },
];

const getActiveGuests = guests =>
  guests.filter(guest => guest.isActive === true);

console.log(getActiveGuests(guests));
*/

/*
Фунуция проинимае массив гостей т возраст. Возвращает массив гостей, возраст которых больще указанного.

const guests = [
  { name: 'Mango', age: 20, isActive: true },
  { name: 'Poly', age: 18, isActive: false },
  { name: 'Ajax', age: 30, isActive: true },
  { name: 'Chelsey', age: 45, isActive: false },
];

const getGuestsOlderThan = (guests, age) =>
  guests.filter(guest => guest.age > age);

console.log(getGuestsOlderThan(guests, 25));
*/

/*
Функция принимает массив гостей и id и возвращает нужного гостя по id.

const guests = [
  { id: 1, name: 'Mango', age: 20 },
  { id: 2, name: 'Poly', age: 18 },
  { id: 3, name: 'Ajax', age: 30 },
  { id: 4, name: 'Chelsey', age: 45 },
];

const getGuestById = (guests, id) => guests.find(guest => guest.id === id);

console.log(getGuestById(guests, 3));
console.log(getGuestById(guests, 1));
console.log(getGuestById(guests, 5));
*/

/*
Функция принимает массив гостей, возвращает true если вме гости активные и false если хотя бы один неактивный.

const allGuestsActive = guests =>
  guests.every(guest => guest.isActive === true);

const guestsA = [
  { name: 'Mango', age: 20, isActive: true },
  { name: 'Poly', age: 18, isActive: false },
  { name: 'Ajax', age: 30, isActive: true },
  { name: 'Chelsey', age: 45, isActive: false },
];

const guestsB = [
  { name: 'Mango', age: 20, isActive: true },
  { name: 'Poly', age: 18, isActive: true },
  { name: 'Ajax', age: 30, isActive: true },
  { name: 'Chelsey', age: 45, isActive: true },
];

console.log(allGuestsActive(guestsA));
console.log(allGuestsActive(guestsB));
*/

/*
Функция считает общее количетво продуктов объекта.
const sumAllProducts = arr => arr.reduce((acc, value) => (acc += value), 0);

const order = {
  bread: 10,
  apples: 25,
  chicken: 60,
  milk: 15,
  cheese: 40,
};

const allProducts = Object.values(order);
console.log(sumAllProducts(allProducts));
/


/*
Функция считает общую стоимость заказа. Принимает объекты заказа и базы данных (products, order).
*/
const products = {
  bread: 10,
  apples: 20,
  chicken: 40,
  milk: 15,
  cheese: 30,
};

const allProducts = Object.keys(products);
const orderA = {
  bread: 2,
  apples: 4,
  chicken: 1,
};
const
const orderB = {
  bread: 1,
  milk: 2,
  cheese: 3,
};

const getTotalPrice = (order, products) =>
  order.reduce((acc, products, order) => acc + order[key] * products[key], 0);

console.log(getTotalPrice(products, orderA));
console.log(getTotalPrice(products, orderB));

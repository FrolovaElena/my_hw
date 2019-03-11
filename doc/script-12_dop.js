/*
 * Ознакомься с содержанием панелей HTML и CSS.
 *
 * Напиши скрипт который сохраняет выбранную пользователем
 * тему в localStorage и, при следующих посещениях страницы,
 * устанавливает ее автоматически. По умолчанию пусть будет светлая тема.
 *
 * При выборе темы, добавляй на элемент body соответствующий класс.
 */

const body = document.body;
const section = document.querySelector('.theme-manager');
const storageKey = localStorage.getItem('theme');
if (storageKey) {
  const classBody = `theme-${storageKey}`;
  body.classList.add(classBody);
}

const handleSectionClick = event => {
  const button = event.target;
  if (button.nodeName !== 'BUTTON') return;

  const [theme] = body.classList;
  body.classList.replace(theme, `theme-${button.dataset.theme}`);

  localStorage.setItem('theme', button.dataset.theme);
};

section.addEventListener('click', handleSectionClick);

/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop.
 *
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 *
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');

const getColor = arr => {
  const max = arr.length;
  const index = Math.floor(Math.random() * max);
  return arr[index];
};

const timer = {
  id: null,
  active: false,
  start() {
    if (this.active) return;

    this.id = setInterval(() => {
      body.style.backgroundColor = getColor(colors);
    }, 1000);
    this.active = true;
  },
  stop() {
    this.active = false;
    clearInterval(this.id);
  },
};

buttonStart.addEventListener('click', timer.start.bind(timer));
buttonStop.addEventListener('click', timer.stop.bind(timer));

/*
 * Напиши функцию delay(ms), которая возвращает промис,
 * переходящий в состояние "resolved" через ms миллисекунд.
 *
 * Значением исполнившегося промиса должно быть то кол-во
 * миллисекунд которое передали во время вызова функции delay.
 */
const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
      reject('error');
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

/*
 * Перепиши функцию updateActiveState так, чтобы она
 * не использовала callback-функцию, а возвращала промис.
 */

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

//const updateActiveState = (users, callback) => {
//const updatedUsers = users.map(user => ({ ...user, active: !user.active }));
//callback(updatedUsers);
//};
//updateActiveState(users, console.table);

const updateActiveState = users => {
  return new Promise((resolve, reject) => {
    const updatedUsers = users.map(user => ({ ...user, active: !user.active }));
    resolve(updatedUsers);
    reject('error');
  });
};

updateActiveState(users).then(console.table);

/*
 * Есть переменная quantity хранящиая в себе
 * текущее количество единиц какого-то товара на складе.
 *
 * Напиши функцию processOrder(value), получающую
 * кол-во товаров заказанных покупателем, и возвращающую промис.
 *
 * Для имитации проверки достаточного количества товаров
 * на складе используй setTimeout с задержкой 500мс.
 *
 * Если на складе товаров больше либо равно заказанному
 * количеству, функция возвращает промис который исполняется
 * успешно со строкой "Ваш заказ готов!".
 *
 * В противном случае, со строкой "К сожалению на складе не достаточно товаров!".
 *
 * Если же пользователь ввел не число, то промис выполняется с ошибкой
 * и значением "Некорректный ввод!".
 */

const DELAY = 1000;
const quantity = 100;

const processOrder = value => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value <= quantity) {
        resolve('Ваш заказ готов!');
      } else if (value > quantity) {
        resolve('К сожалению на складе не достаточно товаров!');
      }
      reject('Некорректный ввод!');
    }, 500);
  });
};
// Вызовы функции для проверки
processOrder(50)
  .then(console.log) // Ваш заказ готов!
  .catch(console.log);

processOrder(50)
  .then(console.log) // Ваш заказ готов!
  .catch(console.log);

processOrder(500)
  .then(console.log) // К сожалению на складе недостаточно товаров!
  .catch(console.log);

processOrder('lorem')
  .then(console.log)
  .catch(console.log); // Некорректный ввод!

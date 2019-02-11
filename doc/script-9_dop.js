'use strict';

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.


const button = document.querySelector('.button');

const handlerCounter = event =>
  (event.target.textContent = Number(button.textContent) + 1);

button.addEventListener('click', handlerCounter);
*/

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.


const button = document.querySelector('[data-action]');
const [input_1, input_2] = document.querySelectorAll('[placeholder]');
const result = document.querySelector('.result');

const addSum = () => {
  result.textContent = Number(input_1.value) + Number(input_2.value);
  return result;
};

button.addEventListener('click', addSum);
*/

/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке


const value = document.querySelector('.value');
const [buttonDec, buttonInc] = document.querySelectorAll('.btn');

class Counter {
  constructor(value) {
    this.value = value;
  }
  increment() {
    this.value += 1;
    return this.value;
  }
  decrement() {
    return (this.value -= 1);
  }
}

const counter = new Counter(0);

const onCountInc = () => (value.textContent = counter.increment(counter));

const onCountDec = () => (value.textContent = counter.decrement(counter));

buttonInc.addEventListener('click', onCountInc);
buttonDec.addEventListener('click', onCountDec);
*/

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result


const form = document.querySelector('.question-form');
const result = document.querySelector('.result-form');
const formInputs = Array.from(form.elements);
const button = document.querySelector('.btn-submit');

const handlerInput = event => {
  event.preventDefault();
  result.textContent = `Result: ${
    formInputs.find(input => input.checked).value
  }`;
  event.target.reset(); // очистка полей
};

form.addEventListener('submit', handlerInput);
*/

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 

const message = document.querySelector('.message');
const input = document.querySelector('.input');
const inputValue = document.querySelector('.input-value');
const onInput = () => (inputValue.textContent = input.value);
const onFocus = () => (message.textContent = 'Input is in focus!');
input.addEventListener('focus', onFocus);
input.addEventListener('input', onInput);
*/

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid


const list = document.querySelector('.input-list');
const inputs = Array.from(list.children);

console.log(typeof Number(inputs[0].dataset.length));
const onInput = event => {
  if (event.target.value.length === Number(event.target.dataset.length)) {
    return event.target.classList.add('valid');
  }
  return event.target.classList.add('invalid');
};
list.addEventListener('change', onInput);
//inputs[0].addEventListener('blur', onInput);
//inputs[1].addEventListener('blur', onInput);
//inputs[2].addEventListener('blur', onInput);
//inputs[3].addEventListener('blur', onInput);
*/

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.


const list = document.querySelector('.images');

const getImageSrc = event => alert(event.target.src);

list.addEventListener('click', getImageSrc);
*/

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.


const list = document.querySelector('.button-list');
let items = Array.from(list.children);

const deleteItem = () => {
  const item = items.find(item => item.contains(event.target));
  item.remove();
  return items;
};

list.addEventListener('click', deleteItem);
*/

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

const backdrop = document.querySelector('.js-modal-backdrop');
const buttonOpenModal = document.querySelector('[data-action="open-modal"]');
const buttonCloseModal = document.querySelector('[data-action="close-modal"]');

const openModal = () => {
  backdrop.classList.remove('modal-hidden');
  window.addEventListener('keydown', closeModalByEsc);
};

const closeModal = () => {
  backdrop.classList.add('modal-hidden');
  window.removeEventListener('keydown', closeModalByEsc);
};

const closeModalByEsc = event => {
  console.log(event.target);
  console.log(event.code);
  if (event.code !== 'Escape') {
    return;
  }
  closeModal();
};

const removeWindowEvent = () => {
  if (backdrop.classList.contains('modal-hidden')) {
  }
};

buttonOpenModal.addEventListener('click', openModal);
buttonCloseModal.addEventListener('click', closeModal);
backdrop.addEventListener('click', onBackdropClick); //закрытие модального окна при клике на серый фон, но не на само окно
window.addEventListener('keydown', closeModalByEsc);

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!


const list = document.querySelector('.js-menu');
const items = Array.from(list.children);

const onRefsClick = event => {
  event.preventDefault();

  if (event.target.nodeName !== 'A') {
    return;
  }
  const prevActiveLink = document.querySelector('.active');
  const activeLink = event.target;

  activeLink.classList.add('active');
  prevActiveLink.classList.remove('active');
};

list.addEventListener('click', onRefsClick);
*/

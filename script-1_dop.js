"use strict";

/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.


let userInput = prompt('Введите произвольное целое число');
if (!userInput) {
  alert('Приходите еще!');
} else if (Number(userInput) % 1 === 0) {
  alert('Спасибо!');
} else {
  alert('Необходимо было ввести целое число!');
}
*/

/* 
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор


const num = Number.parseInt(Math.random() * 100);

let type;

num % 2 === 0? type = 'even' : type = 'odd';
console.log(`${num} is ${type}`);
*/

/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds 
  и добавлят впереди 0 если необходимо.


let hours = 7;
let minutes = 3;
let seconds = 42;

if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (seconds < 10) {
  seconds = `0${seconds}`;
}

const time = `${hours}:${minutes}:${seconds}`;

console.log('Time is: ', time);
*/


/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"

let userInput = prompt('Введите число от 1 до 5');
if (!userInput) {
  alert('очень жаль, приходите еще!');
} else if (Number(userInput) < 1 || Number(userInput) > 5) {
  alert('Неверный ввод, возможные варианты 1-5!');
} else {
  switch (Number(userInput)) {
    case 1: alert("Каталог хостелов");
    break;
    case 2: alert("Каталог бюджетных отелей");
    break;
    case 3: alert("Каталог отелей ***");
    break;
    case 4: alert("Каталог отелей ****");
    break;
    case 5: alert("Каталог лучших отелей");
    break;
  }
}
*/


/*Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.

Кол-во мест в группах ограничено: sharm - 15, hurgada - 25, taba - 6

🔔 Создайте переменные для хранения мест в группах.

Когда пользователь посещает страницу, предложить ему ввести число необходимых мест, результат сохранить в переменную.

Проверить являются ли введенные данные целым положительным числом.

В случае неверного ввода от пользователя, скрипт показывает alert с текстом Ошибка ввода! и больше ничего не делает.
Если пользователь нажал Cancel, скрипт показывает alert с текстом Нам очень жаль, приходите еще!.
В случае верного ввода, последовательно проверить кол-во мест в группах, и кол-во необходимых мест введенных пользователем.
Если была найдена группа, в которой количество мест больше либо равно необходимому, вывести сообщение через confirm, что есть место в группе такой-то, согласен ли пользоваетель быть в этой группе?

Если ответ да, показать alert с текстом 'Приятного путешествия в' группе <имя группы>
Если ответ нет, показать alert с текстом Нам очень жаль, приходите еще!
Если мест нигде нет, показать alert с сообщением Извините, столько мест нет ни в одной группе!

const sharmTour = 15;
const hurgadaTour = 25;
const tabaTour = 6;

let userAnswer = prompt("Введите необходимое к-во мест");

if (!userAnswer) {
  alert("Нам очень жаль, приходите еще!");
} else if (Number(userAnswer) % 1 === 0 && Number(userAnswer) > 0) {
  if (
    Number(userAnswer) <= Number(sharmTour) &&
    Number(userAnswer) <= Number(hurgadaTour) &&
    Number(userAnswer) <= Number(tabaTour)
  ) {
    let isAgree = confirm("Вы можете выбрать любое напрвление!");
    if (isAgree === true) {
      let userChange = prompt("Выберите напрвление");
      alert("Приятного путешествия в " + userChange);
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else if (
    Number(userAnswer) > Number(sharmTour) &&
    Number(userAnswer) > Number(hurgadaTour) &&
    Number(userAnswer) > Number(tabaTour)
  ) {
    alert("Извиниье, количество мест ограничено. Попробуйте позже!");
  } else if (
    Number(userAnswer) <= Number(sharmTour) &&
    Number(userAnswer) <= Number(hurgadaTour) &&
    Number(userAnswer) > Number(tabaTour)
  ) {
    let isAgree = confirm(
      "Есть место в гуппе Шарм и Хургада, согласны вы отправится в путешествие?"
    );
    if (isAgree === true) {
      let userChange = prompt("Выберите напрвление");
      alert("Приятного путешествия в " + userChange);
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else if (
    Number(userAnswer) <= Number(sharmTour) &&
    Number(userAnswer) <= Number(tabaTour) &&
    Number(userAnswer) > Number(hurgadaTour)
  ) {
    let isAgree = confirm(
      "Есть место в гуппе Шарм и Таба, согласны вы отправится в путешествие?"
    );
    if (isAgree === true) {
      let userChange = prompt("Выберите напрвление");
      alert("Приятного путешествия в " + userChange);
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else if (
    Number(userAnswer) > Number(sharmTour) &&
    Number(userAnswer) <= Number(tabaTour) &&
    Number(userAnswer) <= Number(hurgadaTour)
  ) {
    let isAgree = confirm(
      "Есть место в гуппе Хургада и Таба, согласны вы отправится в путешествие?"
    );
    if (isAgree === true) {
      let userChange = prompt("Выберите напрвление");
      alert("Приятного путешествия в " + userChange);
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else if (
    Number(userAnswer) <= Number(hurgadaTour) &&
    Number(hurgadaTour) >= Number(sharmTour) &&
    Number(hurgadaTour) >= Number(tabaTour)
  ) {
    let isAgree = confirm(
      "Есть место в гуппе Хургада, согласны вы отправится в путешествие?"
    );
    if (isAgree === true) {
      alert("Приятного путешествия в Хургада!");
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else if (
    Number(userAnswer) <= Number(sharmTour) &&
    Number(sharmTour) >= Number(hurgadaTour) &&
    Number(sharmTour) >= Number(tabaTour)
  ) {
    let isAgree = confirm(
      "Есть место в гуппе Шарм, согласны вы отправится в путешествие?"
    );
    if (isAgree === true) {
      alert("Приятного путешествия в Шарм!");
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else if (
    Number(userAnswer) <= Number(tabaTour) &&
    Number(tabaTour) >= Number(sharmTour) &&
    Number(tabaTour) >= Number(hurgadaTour)
  ) {
    let isAgree = confirm(
      "Есть место в гуппе Таба, согласны вы отправится в путешествие?"
    );
    if (isAgree === true) {
      alert("Приятного путешествия в Табу!");
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
}

} else {
   alert("Ошибка ввода!");
}
*/
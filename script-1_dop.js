"use strict";

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
*/
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

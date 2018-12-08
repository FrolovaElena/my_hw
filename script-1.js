'use strict';
const adminLogin = 'admin';
const adminPassword = 'm4ng0h4ckz';
const messageCansel = 'Отменено пользователем!';
const messageError = 'Неверный ввод!';
const messageSuccess = 'Добро пожаловать!';
let message;

let userLogin = prompt('Введите логин');
let userPassword;

if (userLogin === null) {
    message = messageCansel;
} else if (userLogin === adminLogin) {
    userPassword = prompt('Введите пароль');

    if (userPassword === null) {
        message = messageCansel;
    } else if (userPassword === adminPassword) {
        message = messageSuccess;
    } else {
        message = messageError;
    }
} else {
    message = messageError;
}
alert(message);

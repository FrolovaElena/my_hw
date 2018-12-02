
'use strict';

const adminLogin = 'admin';
const adminPassword = 'm4ng0h4ckz';
const massageCansel = 'Отменено пользователем!';
const massageError = 'Неверный ввод!';
const massageSuccess = 'Добро пожаловать!';

let userLogin = prompt('Введите логин');
let userPassword;

if (userLogin === null) {
    alert(massageCansel);
} else if (userLogin === adminLogin) {
    userPassword = prompt('Введите пароль');

    if (userPassword === null) {
        alert(massageCansel);
    } else if (userPassword === adminPassword) {
        alert(massageSuccess);
    } else {
        alert(massageError);
    }
} else {
    alert(massageError);
}
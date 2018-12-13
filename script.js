'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const max = logins.length;

const isLoginValid = function(login) {
    if (login.length >= 4 && login.length <= 16) {
        return true;  
    } else {
        return false;
    }

};

const isLoginUnique = function(logins, login) {
    for (let i = 0; i < max; i += 1) {
        if (logins.includes(login)) {
            return false;
        } else {
            return true;
        }
    }  
};

const addLogin = function(logins, login) {
    if (isLoginValid(login) === false) {
        return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    } else {
        if (isLoginUnique(logins, login) === false) {
            return console.log('Такой логин уже используется!');
        } else {
            logins.push(login);
            return console.log('Логин успешно добавлен!');
        }
    }
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
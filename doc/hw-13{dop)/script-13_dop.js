/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.


const input = document.querySelector('input');
const form = document.querySelector('.search-form');
const result = document.querySelector('.result');
const API_URL = 'https://restcountries.eu/rest/v2/name/';

form.addEventListener('submit', fetchCountryData);
*/
/*
  @param {FormEvent} evt

function fetchCountryData(evt) {
  evt.preventDefault();
  const [search] = evt.currentTarget.elements;
  return fetch(`${API_URL}${search.value}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      const [country] = data;
      console.log(country.flag);
      const markup = `
      <p>Country: ${country.name}</p> 
      <p>Capital: ${country.capital}</p>
      <p>Currentcy: ${country.currencies[0].name}</p>
      <span>Flag: </span>
      <img src="${country.flag}" wigth="100" height="100">`;
      result.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log(error));
}
*/

/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.


const input = document.querySelector('input');
const form = document.querySelector('.search-form');
const result = document.querySelector('.result');
const API_URL = 'https://api.github.com/users/';

form.addEventListener('submit', fetchUserData);
*/
/*
  @param {FormEvent} evt

function fetchUserData(evt) {
  evt.preventDefault();
  const [search] = evt.currentTarget.elements;
  return fetch(`${API_URL}${search.value}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(user => {
      console.log(user);
      const markup = `
      <span>Avatar:</span>
      <img src="${user.avatar_url}" width="20" height="20"/>
      <p>User name: ${user.login}</p>
      <p>Bio: ${user.bio}</p>
      <p>Pablic repos: ${user.public_repos}</p>`;
      result.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log(error));
}
*/
/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...


const form = document.querySelector('.search-form');
const userTable = document.querySelector('.users-table');

form.addEventListener('submit', fetchUsers);

/*
  @param {FormEvent} evt

function fetchUsers(evt) {
  // ...
}
*/
/*
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая посылает запрос 
  на получение информации о пользоватеьте с id (число) введенным в input. 
  Не забывайте что значение input это строка.
 
  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result
  
  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

const URL = 'https://jsonplaceholder.typicode.com/users/';
const input = document.querySelector('input');
const form = document.querySelector('.search-form');
const result = document.querySelector('.result');

form.addEventListener('submit', getUserById);

function getUserById(evt) {
  evt.preventDefault();
  const [search] = evt.currentTarget.elements;
  const id = Number(search.value);
  console.log(URL);
  return fetch(`${URL}${id}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(item => {
      console.log(item);
      if (!item)
        return (result.textContent =
          'Ошибка! Пользователя с таким id не существует');
      result.textContent = JSON.stringify(item);
    });
}

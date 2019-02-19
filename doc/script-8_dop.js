'use strict';
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4

const list = document.body.firstElementChild;
console.log(list);
const enimals = list.firstElementChild;
console.log(enimals.textContent);
console.log(enimals.firstElementChild.children.length);
*/

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета

const teck = document.querySelector('.list');
console.log(teck.firstElementChild);
console.log(teck.lastElementChild);
teck.firstElementChild.style.color = 'red';
teck.lastElementChild.style.color = 'blue';
*/

const mapper = questions =>
  questions.map(({ _id: id, ...props }) => ({ id, ...props }));

const a = [
  { _id: 1, title: 'lorem', text: 'lorem ipsum dolot.' },
  { _id: 2, title: 'tigger', text: 'big tigger fedyh.' },
  { _id: 3, title: 'lion', text: 'oehshgshdj jdjdjk' },
];
console.log(mapper(a));

/*
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const ul = document.querySelector('.list');

const createListElement = elements =>
  elements.map(element => {
    const li = document.createElement('li');
    li.textContent = element;

    return li;
  });

const items = createListElement(elements);

const createList = (list, arr) => {
  list.append(...arr);
  return list;
};
console.log(createList(ul, items));
*/

/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery

const galleryItems = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Two Brown Hen and One Red Rooster',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Macaw Birds',
  },
  {
    url:
      'https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: '2 Lion on Grass Field during Daytime',
  },
];

const gallery = document.querySelector('.gallery');
const size = '300';

const createGalleryElement = galleryItems =>
  galleryItems.map(({ url, alt }) => {
    const image = document.createElement('img');
    image.src = url;
    image.alt = alt;
    image.width = size;
    return image;
  });

const images = createGalleryElement(galleryItems);
 
const createGallery = (list, arr) => {
  list.append(...arr);
  return list;
};

console.log(createGallery(gallery, images));
*/

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.


//const sizeFilter = document.querySelector('.size-filter');
//const inputs = Array.from(sizeFilter.children);
///const checkedInputs = inputs
//.filter(input => input.firstElementChild.firstElementChild.checked)
//.map(input => input.firstElementChild.firstElementChild);

//лучший вариант
const checkedInputs = Array.from(
  document.querySelectorAll('.size-filter [checked]'),
);
console.log(checkedInputs);

const collectInputData = inputs => inputs.map(input => input.value);
console.log(collectInputData(checkedInputs));
*/

/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.

const createMovieCard = () => {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie');

  const image = document.createElement('img');
  image.classList.add('movie_image');
  image.src = 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg';
  image.alt = 'movie image';

  const movieBody = document.createElement('div');
  movieBody.classList.add('movie_body');

  const movieTitle = document.createElement('h2');
  movieTitle.classList.add('movie_title');
  movieTitle.textContent = 'The Godfather';

  const movieDescription = document.createElement('p');
  movieDescription.classList.add('movie_description');
  movieDescription.textContent =
    'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care.';

  const movieDate = document.createElement('p');
  movieDate.classList.add('movie_date');
  movieDate.textContent = 'Released: 1972-03-14';

  const movieRating = document.createElement('p');
  movieRating.classList.add('movie_rating');
  movieRating.textContent = 'Rating: 8.6';

  movieBody.append(movieTitle, movieDescription, movieDate, movieRating);
  movieCard.append(image, movieBody);

  return movieCard;
};
console.log(createMovieCard());

const conteiner = document.querySelector('.conteiner');
conteiner.appendChild(createMovieCard());
console.log(conteiner);
*/

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px


const getRandColor = () => {
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = '0' + color;
  }
  return '#' + color;
};

const createBox = (width, heigth, num, edit) => {
  const boxes = [];

  for (let i = 0; i < num; i += 1) {
    boxes[i] = document.createElement('div');
    boxes[i].style.width = width + edit * i + 'px';
    boxes[i].style.height = heigth + edit * i + 'px';
    boxes[i].style.backgroundColor = getRandColor();
    boxes.push(boxes[i]);
  }
  return boxes;
};

const conteiner = document.querySelector('.conteiner');
const boxes = createBox(30, 30, 5, 10);
conteiner.append(...boxes);
console.log(conteiner);
*/

/*Создай шаблон элемента списка.
 Отрендери список в DOM по данным из массива products.
*/

const list = document.querySelector('.products');

const products = [
  { name: 'Apples', count: 50 },
  { name: 'Grapes', count: 44 },
  { name: 'Cheese', count: 128 },
  { name: 'Milk', count: 293 },
];

const createItem = data => {
  const template = document.querySelector('#product-template').innerHTML.trim();
  const templateItem = Handlebars.compile(template);
  return templateItem(data);
};

const renderListItem = data => {
  const markup = data.map(item => createItem(item)).join('');
  list.insertAdjacentHTML('beforeend', markup);
};

renderListItem(products);
console.log(list);

/*
  Создай шаблон поста указаного на вкладке HTML.
  Отрендери список постов в DOM по данным из массива posts.
   Если в объекте поле favourite=true, в посте должна быть 
  разметка иконки избранного поста, в противном случае,
  разметки иконки быть не должно.
*/

const posts = [
  {
    title: 'Phasellus volutpat metus',
    text:
      'Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Ut leo.',
    favourite: true,
  },
  {
    title: 'Nulla consequat massa',
    text:
      'Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
    favourite: false,
  },
  {
    title: 'In enim justo',
    text:
      'Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Suspendisse eu ligula. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.',
    favourite: true,
  },
  {
    title: 'Vestibulum ante ipsum',
    text:
      'Vestibulum suscipit nulla quis orci. Praesent venenatis metus at tortor pulvinar varius. Nulla sit amet est. Suspendisse eu ligula sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien.',
    favourite: false,
  },
];

const section = document.querySelector('.posts');

const createPost = data => {
  const template = document.querySelector('#post-template').innerHTML.trim();
  const markup = Handlebars.compile(template);
  return markup(data);
};

renderPostList = data => {
  const markup = data.map(item => createPost(item)).join('');
  section.insertAdjacentHTML('beforeend', markup);
};

renderPostList(posts);
console.log(section);

'use strict';

const list = document.querySelector('.list');

const createItem = (list, str) => {
  //console.log(list.insertAdjacentHTML('beforeend', str));
  return list.insertAdjacentHTML('beforeend', str);
};

createItem(list, '<li>cat</li>');
createItem(list, '<li>dog</li>');
createItem(list, '<li>mouse</li>');
createItem(list, '<li>bear</li>');
createItem(list, '<li>fox</li>');
createItem(list, '<li>woulf</li>');
createItem(list, '<li>cow</li><li>cheep</li><li>pig</li>');
console.log(list);

const removeItem = item => {
  return item.remove();
};

const items = list.children;
console.log(items);
removeItem(items[6]);
removeItem(items[6]);
removeItem(items[6]);

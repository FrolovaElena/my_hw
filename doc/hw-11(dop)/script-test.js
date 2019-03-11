'use strict';

class Model {
  static generateUniqueId() {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    );
  }

  constructor(notes) {
    this.notes = notes;
  }

  saveNotes(title, body) {
    const note = {
      id: Model.generateUniqueId(),
      title,
      body,
      priority: 0,
    };
    this.notes.push(note);
    localStorage.setItem('notes', JSON.stringify(this.notes));
    console.log(JSON.parse(localStorage.getItem('notes')));
    return note;
  }

  deleteNotes(id) {
    this.notes = this.notes.filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(this.notes));
    console.log(JSON.parse(localStorage.getItem('notes')));
    return this.notes;
  }

  filterNotesByStr(str) {
    return this.notes.filter(note =>
      (note.title + note.body).toLowerCase().includes(str.toLowerCase()),
    );
  }
}

const initialNotes = [
  {
    id: 'y58ir1q5dee0mkh1lncdi',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: 1,
  },
  {
    id: 'qzz9dtzlebcxfw94eadpj',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: 2,
  },
  {
    id: 'arjbu5mzeiivh9kpgir5d',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: 1,
  },
  {
    id: 'kxckym5tlknp2esenezhkc',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: 0,
  },
];

const model = new Model(initialNotes);

const list = document.querySelector('.list');
const button = document.querySelector('.submit');
const input = document.querySelector('.search');
const form = document.querySelector('.form');

const createListItem = note => {
  const { id, title, body, priority } = note;
  const marckup = `<li class="list-item" data-id="${id}"><h2 class="item-title">${title}</h2><p class="item-text">${body}</p><p class="priority">${priority}</p><button class="btn" data-action="delete">delete</button></li>`;

  return marckup;
};

const renderListItem = data => {
  const marckup = data.map(note => createListItem(note)).join('');

  return list.insertAdjacentHTML('beforeend', marckup);
};

renderListItem(model.notes);

const findNote = child => {
  const parent = child.closest('.list-item');
  return parent;
};

const removeNote = item => item.remove();

const addListItem = (list, item) => {
  const newNote = createListItem(item);
  return list.insertAdjacentHTML('beforeend', newNote);
};

const handleFormSubmit = event => {
  event.preventDefault();
  const [title, body] = event.target.children;

  if ((title.value.trim() && body.value.trim()).length === 0) {
    alert('enter text!');
    return;
  }

  const newNote = model.saveNotes(title.value, body.value);
  addListItem(list, newNote);
  event.currentTarget.reset();
};

const handleListClick = event => {
  const button = event.target;

  if (button.nodeName !== 'BUTTON') return;

  const deletedItem = findNote(button);
  removeNote(deletedItem);
  const id = deletedItem.dataset.id;
  model.deleteNotes(id);
};

const handleFilterInput = event => {
  const value = event.target.value;
  const filteredNotes = model.filterNotesByStr(value);
  list.innerHTML = '';
  renderListItem(filteredNotes);
};

const handleFormInput = event => {
  const [title, body] = event.currentTarget.elements;

  localStorage.setItem('title', title.value);
  localStorage.setItem('body', body.value);
};
const [title, body] = form.elements;

if (title || body) {
  title.value = localStorage.getItem('title');
  body.value = localStorage.getItem('body');
}

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', handleFormInput);
list.addEventListener('click', handleListClick);
input.addEventListener('input', handleFilterInput);

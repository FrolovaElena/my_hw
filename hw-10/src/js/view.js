import notepad from './app.js';
import { ICON_TYPES, NOTE_ACTIONS } from './utils/constants';

export const createNoteContent = ({ title, body }) => {
  const noteContent = document.createElement('div');
  noteContent.classList.add('note__content');

  const noteTitle = document.createElement('h2');
  noteTitle.classList.add('note__title');
  noteTitle.textContent = title;

  const noteBody = document.createElement('p');
  noteBody.classList.add('note__body');
  noteBody.textContent = body;

  noteContent.append(noteTitle, noteBody);

  return noteContent;
};

export const createActionButton = (button, icon) => {
  const buttonPriority = document.createElement('button');
  buttonPriority.classList.add('action');
  buttonPriority.dataset.action = button;

  const iconPriority = document.createElement('i');
  iconPriority.classList.add('material-icons');
  iconPriority.classList.add('action__icon');
  iconPriority.textContent = icon;
  buttonPriority.appendChild(iconPriority);

  return buttonPriority;
};

export const createFooter = ({ priority }) => {
  const footer = document.createElement('footer');
  footer.classList.add('note__footer');

  const section_1 = document.createElement('section');
  section_1.classList.add('note__section');
  const buttonPriorityDec = createActionButton(
    NOTE_ACTIONS.DECREASE_PRIORITY,
    ICON_TYPES.ARROW_DOWN
  );
  const buttonPriorityInc = createActionButton(
    NOTE_ACTIONS.INCREASE_PRIORITY,
    ICON_TYPES.ARROW_UP
  );
  const notePriority = document.createElement('span');
  notePriority.classList.add('note__priority');
  notePriority.textContent = priority;

  const section_2 = document.createElement('section');
  section_2.classList.add('note__section');
  const buttonPriorityEdit = createActionButton(
    NOTE_ACTIONS.EDIT,
    ICON_TYPES.EDIT
  );
  const buttonPriorityDel = createActionButton(
    NOTE_ACTIONS.DELETE,
    ICON_TYPES.DELETE
  );
  section_1.append(buttonPriorityDec, buttonPriorityInc, notePriority);
  section_2.append(buttonPriorityEdit, buttonPriorityDel);
  footer.append(section_1, section_2);

  return footer;
};

export const createListItem = data => {
  const item = document.createElement('li');
  item.classList.add('note-list__item');
  item.dataset.id = data.id;
  const note = document.createElement('div');
  note.classList.add('note');
  const noteContent = createNoteContent(data);
  const footer = createFooter(data);
  note.append(noteContent, footer);

  item.appendChild(note);

  return item;
};

export const renderNoteList = (list, data) => {
  const items = data.map(note => createListItem(note));

  list.innerHTML = '';
  list.append(...items);

  return list;
};

export const getRefs = () => ({
  list: document.querySelector('.note-list'),
  editor: document.querySelector('.note-editor'),
  searchForm: document.querySelector('.search-form'),
});

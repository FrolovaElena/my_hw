import Notepad from './model.js';
import initialNotes from '../assets/notes.json';
import { NOTE_ACTIONS } from './utils/constants';
import { createListItem, renderNoteList, getRefs } from './view.js';

export const notepad = new Notepad(initialNotes);

const refs = getRefs();
const notyf = new Notyf();

export const addListItem = (list, note) => {
  const listItem = createListItem(note);
  list.appendChild(listItem);
};

export const removeListItem = button => {
  const deletedItem = button.closest('.note-list__item');
  const id = deletedItem.dataset.id;
  notepad.deleteNote(id);
  deletedItem.remove();
};

const handleFormSubmit = event => {
  event.preventDefault();

  const [title, body] = event.target.elements;
  const titleValue = title.value;
  const bodyValue = body.value;

  if ((titleValue.trim() && bodyValue.trim()) === '') {
    alert('Необходимо заполнить все поля!');
    return;
  }
  const newNote = notepad.saveNote(titleValue, bodyValue);
  addListItem(refs.list, newNote);

  event.currentTarget.reset();
};

const handleListClick = event => {
  const target = event.target;
  if (target.nodeName !== 'I') {
    return;
  }
  const button = target.closest('.action');
  const action = button.dataset.action;

  switch (action) {
    case NOTE_ACTIONS.DELETE:
      removeListItem(event.target);
      break;

    case NOTE_ACTIONS.EDIT:
      break;
    case NOTE_ACTIONS.DECREASE_PRIORITY:
      break;
    case NOTE_ACTIONS.INCREASE_PRIORITY:
      break;
    default:
      console.log('ошибка!');
      break;
  }
};

const handleFilterInput = event => {
  const value = event.target.value;
  const filteredNotes = notepad.filterNotesByQuery(value);

  renderNoteList(refs.list, filteredNotes);
};

renderNoteList(refs.list, notepad.notes);

refs.editor.addEventListener('submit', handleFormSubmit);
refs.searchForm.addEventListener('input', handleFilterInput);
refs.list.addEventListener('click', handleListClick);

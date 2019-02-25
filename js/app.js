import Notyf from "notyf";
import MicroModal from "micromodal";
import Notepad from "./model.js";
import initialNotes from "../assets/notes.json";
import { NOTE_ACTIONS } from "./utils/constants";
import {
  addListItem,
  renderNoteList,
  getRefs,
  findListItem,
  removeListItem
} from "./view.js";
import "notyf/dist/notyf.min.css";

export const notepad = new Notepad(initialNotes);

const refs = getRefs();
const notyf = new Notyf();

const handleFormSubmit = event => {
  event.preventDefault();

  const [title, body] = event.target.elements;
  const titleValue = title.value;
  const bodyValue = body.value;

  if ((titleValue.trim() && bodyValue.trim()) === "") {
    notyf.alert("Необходимо заполнить все поля!");
    return;
  }
  const newNote = notepad.saveNote(titleValue, bodyValue);
  addListItem(refs.list, newNote);
  notyf.confirm("Заметка успешно добавлена!");
  event.currentTarget.reset();
  MicroModal.close("note-editor-modal");
};

const handleListClick = event => {
  const target = event.target;
  if (target.nodeName !== "I") {
    return;
  }
  const button = target.closest(".action");
  const action = button.dataset.action;

  switch (action) {
    case NOTE_ACTIONS.DELETE:
      const listItem = findListItem(event.target);
      const listItemId = listItem.dataset.id;

      notepad.deleteNote(listItemId);
      removeListItem(listItem);
      notyf.confirm("Заметка успешно удалена!");
      break;

    case NOTE_ACTIONS.EDIT:
      break;
    case NOTE_ACTIONS.DECREASE_PRIORITY:
      break;
    case NOTE_ACTIONS.INCREASE_PRIORITY:
      break;
    default:
      console.log("ошибка!");
      break;
  }
};

const handleFilterInput = event => {
  const value = event.target.value;
  const filteredNotes = notepad.filterNotesByQuery(value);
  refs.list.innerHTML = "";
  return renderNoteList(refs.list, filteredNotes);
};

const handleOpenModal = () => {
  MicroModal.show("note-editor-modal");
};

renderNoteList(refs.list, notepad.notes);

refs.editor.addEventListener("submit", handleFormSubmit);
refs.searchForm.addEventListener("input", handleFilterInput);
refs.list.addEventListener("click", handleListClick);
refs.buttonOpenModal.addEventListener("click", handleOpenModal);

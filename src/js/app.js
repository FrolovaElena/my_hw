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
import setItem from "./utils/storage";

const refs = getRefs();
const notyf = new Notyf();

const replaceNoteId = arr => {
  return arr.map(note => {
    return {
      ...note,
      priority: `Priority: ${Notepad.getPriorityName(note.priority)}`
    };
  });
};

let startedNotes = [];
const storageNotes = localStorage.getItem("notes");

if (!storageNotes) {
  startedNotes = replaceNoteId(initialNotes);
  setItem("notes", startedNotes);
}
startedNotes = JSON.parse(localStorage.getItem("notes"));
setItem("notes", startedNotes);

export const notepad = new Notepad(startedNotes);

const handleFormSubmit = event => {
  event.preventDefault();

  const [title, body] = event.target.elements;
  const titleValue = title.value;
  const bodyValue = body.value;

  if ((titleValue.trim() && bodyValue.trim()) === "") {
    notyf.alert("Необходимо заполнить все поля!");
    return;
  }
  notepad
    .saveNote(titleValue, bodyValue)
    .then(newNote => {
      addListItem(refs.list, newNote);
      setItem("notes", notepad.notes);
      notyf.confirm("Заметка успешно добавлена!");
      MicroModal.close("note-editor-modal");
    })
    .catch(error => console.log(error));
  event.currentTarget.reset();
  localStorage.removeItem("title-note");
  localStorage.removeItem("body-note");
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

      notepad
        .deleteNote(listItemId)
        .then(notes => {
          setItem("notes", notes);
          removeListItem(listItem);
          notyf.confirm("Заметка успешно удалена!");
        })
        .catch(error => console.log(error));
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
  notepad
    .filterNotesByQuery(value)
    .then(notes => {
      refs.list.innerHTML = "";
      renderNoteList(refs.list, notes);
    })
    .catch(error => console.log(error));
};

const handleOpenModal = () => {
  MicroModal.show("note-editor-modal");
};

const handleFormInput = event => {
  const [title, body] = event.currentTarget.elements;

  localStorage.setItem("title-note", title.value);
  localStorage.setItem("body-note", body.value);
};

renderNoteList(refs.list, notepad.notes);

const [title, body] = refs.editor.elements;

try {
  title.value = localStorage.getItem("title-note");
  body.value = localStorage.getItem("body-note");
} catch (error) {
  console.log(error);
}

refs.editor.addEventListener("submit", handleFormSubmit);
refs.editor.addEventListener("input", handleFormInput);
refs.searchForm.addEventListener("input", handleFilterInput);
refs.list.addEventListener("click", handleListClick);
refs.buttonOpenModal.addEventListener("click", handleOpenModal);

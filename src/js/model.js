import { PRIORITY_TYPES, PRIORITIES } from "./utils/constants";
import { get, save, del } from "./api.js";

export default class Notepad {
  constructor(notes = []) {
    this.notes = notes;
  }

  getNotes() {
    return get().then(notes => {
      this.notes = notes;
      return this.notes;
    });
  }

  findNoteById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const note = this.notes.find(note => note.id === id);
        resolve(note);
        reject("error");
      }, 300);
    });
  }

  saveNote(title, body) {
    const note = {
      title: title,
      body: body,
      priority: PRIORITY_TYPES.LOW
    };
    return save(note).then(addedNote => {
      this.notes.push(addedNote);
      return addedNote;
    });
  }

  deleteNote(id) {
    return del(id).then(() => {
      this.notes = this.notes.filter(note => note.id !== id);
      return this.notes;
    });
  }

  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!note) return;
        const { title = note.title, body = note.body } = updatedContent;
        note.title = title;
        note.body = body;

        resolve(note);
        reject("error");
      }, 300);
    });
  }

  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!note) return;
        note.priority = priority;

        resolve(note);
        reject("error");
      }, 300);
    });
  }

  filterNotesByQuery(query) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filtredNotes = this.notes.filter(note =>
          (note.title + note.body).toLowerCase().includes(query.toLowerCase())
        );
        resolve(filtredNotes);
        reject("eror");
      }, 300);
    });
  }

  filterNotesByPriority(priority) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filtredNotes = this.notes.filter(
          note => note.priority === priority
        );

        resolve(filtredNotes);
        reject("error");
      }, 300);
    });
  }

  static getPriorityName(priorityId) {
    return PRIORITIES[priorityId].name;
  }
}

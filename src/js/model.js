import { PRIORITY_TYPES, PRIORITIES } from "./utils/constants";

export default class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  findNoteById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const note = this._notes.find(note => note.id === id);
        resolve(note);
        reject("error");
      }, 300);
    });
  }

  saveNote(title, text) {
    const note = {
      id: Notepad.generateUniqueId(),
      title: title,
      body: text,
      priority: `Priority: ${Notepad.getPriorityName(PRIORITY_TYPES.LOW)}`
    };
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._notes.push(note);
        resolve(note);
        reject("error");
      }, 300);
    });
  }

  deleteNote(id) {
    return new Promise((resolve, reject) => {
      this._notes = this.notes.filter(note => note.id !== id);
      resolve(this._notes);
      reject("error");
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
        const filtredNotes = this._notes.filter(note =>
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
        const filtredNotes = this._notes.filter(
          note => note.priority === priority
        );

        resolve(filtredNotes);
        reject("error");
      }, 300);
    });
  }

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

  static getPriorityName(priorityId) {
    return PRIORITIES[priorityId].name;
  }
}

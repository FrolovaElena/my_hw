import { PRIORITY_TYPES } from "./utils/constants";

export default class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  findNoteById(id) {
    return this._notes.find(note => note.id === id);
  }

  saveNote(title, text) {
    const note = {
      id: Notepad.generateUniqueId(),
      title: title,
      body: text,
      priority: PRIORITY_TYPES.LOW
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
      setTimeout(() => {
        this._notes = this.notes.filter(note => note.id !== id);
        resolve(this._notes);
        reject("error");
      }, 300);
    });
  }

  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);

    if (!note) return;

    const { title = note.title, body = note.body } = updatedContent;

    note.title = title;
    note.body = body;

    return note;
  }

  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);
    if (!note) return;

    note.priority = priority;

    return note;
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
    const filtredNotes = this._notes.filter(note => note.priority === priority);

    return filtredNotes;
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
    const priorityValues = Object.values(this.PRIORITIES);
    const value = priorityValues.find(value => value.id === priorityId);

    return value.name;
  }
}
Notepad.PRIORITIES = {
  0: { id: 0, value: 0, name: "Low" },
  1: { id: 1, value: 1, name: "Normal" },
  2: { id: 2, value: 2, name: "High" }
};

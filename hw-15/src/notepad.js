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

  saveNote(note) {
    this._notes.push(note);
  }

  deleteNote(id) {
    this._notes = this._notes.filter(note => note.id !== id);

    return this._notes;
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
    const filtredNotes = this._notes.filter(
      note =>
        note.title.toLowerCase().includes(query.toLowerCase()) +
        note.body.toLowerCase().includes(query.toLowerCase())
    );
    return filtredNotes;
  }

  filterNotesByPriority(priority) {
    const filtredNotes = this._notes.filter(note => note.priority === priority);

    return filtredNotes;
  }

  static getPriorityName(priorityId) {
    return Notepad.PRIORITIES[priorityId].name;
  }
}

Notepad.PRIORITIES = {
  0: { id: 0, value: 0, name: "Low" },
  1: { id: 1, value: 1, name: "Normal" },
  2: { id: 2, value: 2, name: "High" }
};

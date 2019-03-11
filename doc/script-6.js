'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const initialNotes = [
  {
    id: 1,
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 2,
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
];

class Notepad {
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
    const updatedNotes = this._notes.filter(note => note.id !== id);

    return updatedNotes;
  }

  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);

    if (!note) return;

    const { title = note.title, body = note.body } = updatedContent;

    note.title = title;
    note.body = body;

    return note;
  }

  /*
лучшие варианты

  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);

    if (!note) return;

    const updatedEntries = Object.entries(updatedContent);
    console.log(updatedEntries);
    updatedEntries.forEach(([key, value]) => {
      note[key] = value;
    });
    return note;
  }


  updateNoteContent(id, updatedContent) {
    let updatedNote;

    this._notes = this._notes.map(note => {
      if (note.id === id) {
        updatedNote = { ...note, ...updatedContent };
      
        return updatedNote;
      }
      return note;
    });
    return updatedNote;
  }
*/

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
        note.body.toLowerCase().includes(query.toLowerCase()),
    );
    return filtredNotes;
  }

  filterNotesByPriority(priority) {
    const filtredNotes = this._notes.filter(note => note.priority === priority);

    return filtredNotes;
  }

  /*
  static getPriorityName(priorityId) {
    const priorityValues = Object.values(this.PRIORITIES);
    const value = priorityValues.find(value => value.id === priorityId);

    return value.name;
  }*/
  static getPriorityName(priorityId) {
    return Notepad.PRIORITIES[priorityId].name;
  }
}

Notepad.PRIORITIES = {
  0: { id: 0, value: 0, name: 'Low' },
  1: { id: 1, value: 1, name: 'Normal' },
  2: { id: 2, value: 2, name: 'High' },
};

/*
 * Посмотрим имя приоритета по id
 */
const getNotePriorityName = data => {
  const updatedData = data.map(
    note => (note.priority = Notepad.getPriorityName(note.priority)),
  );
  return updatedData;
};

console.log('notes', getNotePriorityName(initialNotes));
console.log(Notepad.getPriorityName(PRIORITY_TYPES.LOW)); // "Low"
console.log(Notepad.getPriorityName(PRIORITY_TYPES.NORMAL)); // "Normal"
console.log(Notepad.getPriorityName(PRIORITY_TYPES.HIGH)); // "High"

const notepad = new Notepad(initialNotes);

console.log(notepad.updateNoteContent(2, { title: 'css' }));
console.log(
  notepad.updateNoteContent(1, { title: 'lorem', body: 'hdh hdkgld ksuhfidl' }),
);
/*
  Смотрю что у меня в заметках после инициализации
*/
console.log('Все текущие заметки: ', notepad.notes);

/*
 * Добавляю еще 2 заметки и смотрю что получилось
 */
notepad.saveNote({
  id: 3,
  title: 'Get comfy with Frontend Frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: PRIORITY_TYPES.NORMAL,
});

notepad.saveNote({
  id: 4,
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: PRIORITY_TYPES.LOW,
});

console.log('Все текущие заметки: ', notepad.notes);

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority(4, PRIORITY_TYPES.NORMAL);
console.log('Заметки после обновления приоритета для id 4: ', notepad.notes);

/*
 *  Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority(3, PRIORITY_TYPES.LOW);
console.log('Заметки после обновления приоритета для id 3: ', notepad.notes);

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery('html'),
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
  'Отфильтровали заметки по нормальному приоритету: ',
  notepad.filterNotesByPriority(PRIORITY_TYPES.NORMAL),
);

/*
 * Обновим контент заметки с id 3
 */
notepad.updateNoteContent(3, { title: 'Get comfy with React.js or Vue.js' });
console.log(
  'Заметки после обновления контента заметки с id 3: ',
  notepad.notes,
);

/*
 * Повторил HTML и CSS, удаляю запись c id 2
 */
notepad.deleteNote(2);
console.log('Заметки после удаления с id 2: ', notepad.notes);

console.log(notepad.findNoteById(3));

console.log(notepad.updateNoteContent(2, { title: 'html' }));
console.log(notepad.updateNoteContent(2, { body: 'html' }));

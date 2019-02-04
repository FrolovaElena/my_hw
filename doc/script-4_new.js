'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const notebook = {
  notes: [],
  getNotes() {
    return this.notes;
    /*
        Принимает: ничего
        Возвращает: все заметки, значение свойства notes
      */
  },
  findNoteById(id) {
    for (const note of this.notes) {
      if (note.id === id) {
        return note;
      }
    }
    /*
        Ищет заметку в массиве notes
  
        Принимает: идентификатор заметки
        Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
      */
  },
  saveNote(note) {
    this.notes.push(note);
    /*
        Сохраняет заметку в массив notes
  
        Принимает: объект заметки
        Возвращает: сохраненную заметку
      */
  },
  deleteNote(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].id === id) {
        this.notes.splice(i, 1);
      }
    }
    /*
        Удаляет заметку по идентификатору из массива notes
  
        Принимает: идентификатор заметки
        Возвращает: ничего
      */
  },
  updateNoteContent(id, updatedContent) {
    const updatedNote = {};
    const note = this.findNoteById(id);
    const { title, body } = updatedContent;

    if (!note) return;

    note.title = title;
    note.body = body;
    updatedContent = note;

    return updatedNote;
    /*
        Обновляет контент заметки
        updatedContent - объект с полями вида {имя: значение, имя: значение}
        Свойств в объекте updatedContent может быть произвольное количество
  
        Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
        Возвращает: обновленную заметку
      */
  },
  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);
    if (!note) return;

    note.priority = priority;

    return note;
    /*
        Обновляет приоритет заметки
  
        Принимает: идентификатор заметки и ее новый приоритет
        Возвращает: обновленную заметку
      */
  },
  filterNotes(query) {
    const filtredNotes = [];

    for (const note of this.notes) {
      if (
        (note.title && note.body).toLowerCase().includes(query.toLowerCase())
      ) {
        filtredNotes.push(note);
      }
    }
    return filtredNotes;

    /*
        Фильтрует массив заметок по подстроке query.
        Если значение query есть в заголовке или теле заметки, то она подходит
  
        Принимает: подстроку для поиска в title и body заметки
        Возвращает: новый массив заметок, контент которых содержит подстроку
      */
  },
  filterByPriority(priority) {
    const filtredNotes = [];

    for (const note of this.notes) {
      if (note.priority === priority) {
        filtredNotes.push(note);
      }
    }
    return filtredNotes;
  },
};
/*
  Добавляю 4 заметки и смотрю что получилось
*/
notebook.saveNote({
  id: 1,
  title: 'JavaScript essentials',
  body:
    'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: PRIORITY_TYPES.HIGH,
});

notebook.saveNote({
  id: 2,
  title: 'Refresh HTML and CSS',
  body:
    'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: PRIORITY_TYPES.NORMAL,
});

notebook.saveNote({
  id: 3,
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: PRIORITY_TYPES.NORMAL,
});

notebook.saveNote({
  id: 4,
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket and scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: PRIORITY_TYPES.LOW,
});

console.log('Все текущие заметки: ', notebook.getNotes());

/*
  Зима уже близко, пора поднять приоритет на покупку одежды
*/
notebook.updateNotePriority(4, PRIORITY_TYPES.NORMAL);
// Смотрю что у меня в заметках
console.log(
  'Заметки после обновления приоритета для id 4: ',
  notebook.getNotes(),
);

/*
  Решил что фреймворки отложу немного, понижаю приоритет
*/
notebook.updateNotePriority(3, PRIORITY_TYPES.LOW);
console.log(
  'Заметки после обновления приоритета для id 3: ',
  notebook.getNotes(),
);

/*
  Решил отфильтровать заметки по слову html
*/
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notebook.filterNotes('html'),
);

/*
  Решил отфильтровать заметки по слову javascript
*/
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notebook.filterNotes('javascript'),
);

console.log(
  'Отфильтровали заметки по приоритету - высокий: ',
  notebook.filterByPriority(PRIORITY_TYPES.HIGH),
);

console.log(
  'Отфильтровали заметки по приоритету - низкий: ',
  notebook.filterByPriority(PRIORITY_TYPES.LOW),
);

console.log(
  'Отфильтровали заметки по приоритету - средний: ',
  notebook.filterByPriority(PRIORITY_TYPES.NORMAL),
);

/*
  Обновим контент заметки с id 3
*/
notebook.updateNoteContent(3, { title: 'Get comfy with React.js or Vue.js' });
console.log(
  'Заметки после обновления контента заметки с id 3: ',
  notebook.getNotes(),
);

/*
  Повторил HTML и CSS, удаляю запись c id 2
*/
notebook.deleteNote(2);
console.log('Заметки после удаления с id 2: ', notebook.getNotes());

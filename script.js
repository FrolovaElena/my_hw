'use srtict';
/*
const notebook = {
  id: 2,
  title: 'Refresh js and CSS',
  body:
    'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: 1,
  filterNotes(query) {
    const filtredNotes = [];
    if (
      this.title.toLowerCase().includes(query.toLowerCase()) ||
      this.body.toLowerCase().includes(query.toLowerCase())
    ) {
      filtredNotes.push(this);
    }
    return filtredNotes;
  },
};

console.log(notebook.filterNotes(''));
*/

const string1 =
  'Need to refresh HTML and CSS concepts, after learning some JavaScript';
const string2 = 'Refresh html and CSS';
if ((string1 || string2).toLowerCase().includes('javascript'.toLowerCase())) {
  console.log('Yes');
}

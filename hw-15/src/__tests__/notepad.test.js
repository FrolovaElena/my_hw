import Notepad from "../notepad";

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2
};

const initialNotes = [
  {
    id: 1,
    title: "JavaScript essentials",
    body:
      "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
    priority: PRIORITY_TYPES.HIGH
  },
  {
    id: 2,
    title: "Refresh HTML and CSS",
    body:
      "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
    priority: PRIORITY_TYPES.NORMAL
  }
];

describe("Notepad", () => {
  let notepad;

  beforeEach(() => {
    notepad = new Notepad(initialNotes);
  });

  afterEach(() => {
    notepad._notes = [];
  });

  it("should have initial notes", () => {
    expect(notepad.notes).toEqual(initialNotes);
  });

  it("should find note by id", () => {
    const note = notepad.findNoteById(2);

    expect(note).toEqual({
      id: 2,
      title: "Refresh HTML and CSS",
      body:
        "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
      priority: PRIORITY_TYPES.NORMAL
    });
  });

  it("should save note", () => {
    const note = {
      id: 2,
      title: "Refresh HTML and CSS",
      body:
        "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
      priority: PRIORITY_TYPES.NORMAL
    };
    notepad.saveNote(note);

    expect(notepad.notes).toContain(note);
  });

  it("should delete note", () => {
    const notes = notepad.deleteNote(1);

    expect(notepad.notes).toEqual(notes);
  });

  it("should update note by content", () => {
    const note = notepad.updateNoteContent(1, { title: "JavaScript" });

    expect(note).toEqual({
      id: 1,
      title: "JavaScript",
      body:
        "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
      priority: PRIORITY_TYPES.HIGH
    });
  });

  it("should update note by priority", () => {
    const note = notepad.updateNotePriority(2, PRIORITY_TYPES.LOW);

    expect(note).toEqual({
      id: 2,
      title: "Refresh HTML and CSS",
      body:
        "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
      priority: PRIORITY_TYPES.LOW
    });
  });

  it("should get priority name", () => {
    const priorityName = Notepad.getPriorityName(2);

    expect(priorityName).toEqual("High");
  });

  it("should filter by string", () => {
    const notes = notepad.filterNotesByQuery("html");

    expect(notes).toEqual([
      {
        id: 2,
        title: "Refresh HTML and CSS",
        body:
          "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
        priority: PRIORITY_TYPES.LOW
      },
      {
        id: 2,
        title: "Refresh HTML and CSS",
        body:
          "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
        priority: PRIORITY_TYPES.NORMAL
      }
    ]);
  });

  it("should filter note by priority", () => {
    const notes = notepad.filterNotesByPriority(1);

    expect(notes).toEqual([
      {
        id: 2,
        title: "Refresh HTML and CSS",
        body:
          "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
        priority: PRIORITY_TYPES.NORMAL
      }
    ]);
  });
});

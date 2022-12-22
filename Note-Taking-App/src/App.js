import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import NoteList from "./components/NoteList";


function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  // Create Handler----------------------------------
  // const createHandler = (e) => {
  //   e.preventDefault();
  //   if (!noteTitle) {
  //     return alert("Please provide a valid title");
  //   }
  //   const newNote = {
  //     id: Date.now() + " ",
  //     title: noteTitle,
  //   };
  //   setNotes([...notes, newNote]);
  //   setNoteTitle("");
  // };

  // Remove Handler----------------------------------
  // const removeHandler = (id) => {
  //   const newNotes = notes.filter((item) => item.id !== id);
  //   setNotes(newNotes);
  // };

  // Edit Handler----------------------------------
  // const editHandler = (id) => {
  //   const toBeEditedNote = notes.find((item) => item.id === id);
  //   setEditMode(true);
  //   setEditableNote(toBeEditedNote);
  //   setNoteTitle(toBeEditedNote.title);
  // };

  // Update Handler----------------------------------
  // const updateHandler = (e) => {
  //   e.preventDefault();
  //   if (!noteTitle) {
  //     return alert("Please provide a valid title");
  //   }
  //   const newNotes = notes.map((item) => {
  //     if (item.id === editableNote.id) {
  //       item.title = noteTitle;
  //     }
  //     return item;
  //   });
  //   setNotes(newNotes);
  //   setEditMode(false);
  //   setEditableNote(null);
  //   setNoteTitle("");
  // };

  return (
    <div className="App">
      <div className="title">Welcome to Note taking App</div>

      {/* Form part---------------------------------- */}
      {/* <form
        onSubmit={(e) => {
          editMode ? updateHandler(e) : createHandler(e);
        }}
      >
        <input
          value={noteTitle}
          type="text"
          onChange={(event) => setNoteTitle(event.target.value)}
        />
        <button
          onClick={(e) => {
            editMode ? updateHandler(e) : createHandler(e);
          }}
          type="submit"
        >
          {editMode ? "Update Note" : "Add Note"}
        </button>
      </form> */}

      {/* Component Part------------------------------- */}
      <Form 
        notes={notes}
        noteTitle = {noteTitle}
        setNoteTitle = {setNoteTitle}
        setNotes = {setNotes}
        editableNote = {editableNote}
        setEditableNote = {setEditableNote}
        editMode = {editMode}
        setEditMode = {setEditMode}
      />

      <NoteList 
        setNoteTitle = {setNoteTitle}
        notes = {notes}
        setNotes = {setNotes}
        editableNote = {editableNote}
        setEditableNote = {setEditableNote}
        setEditMode = {setEditMode}
      />

      {/* Note List part---------------------------------- */}
      {/* <ul>
        {notes?.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <button onClick={() => editHandler(item.id)}>Edit</button>
            <button onClick={() => removeHandler(item.id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;

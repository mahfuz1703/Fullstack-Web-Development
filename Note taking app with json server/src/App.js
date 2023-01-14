import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const getAllNotes = async () => {
    try {
      const response = await fetch("http://localhost:17033/notes");
      // console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setNotes(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };

  const createHandler = (e) => {
    e.preventDefault();
    if (!noteTitle) {
      return alert("Please provide a valid title");
    }
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
    };

    fetch("http://localhost:17033/notes", {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      getAllNotes();
    });
    setNoteTitle("");
  };

  const removeHandler = (id) => {
    fetch(`http://localhost:17033/notes/${id}`, {
      method: "DELETE",
    }).then(() => {
      getAllNotes();
    });
  };

  const editHandler = (id) => {
    fetch(`http://localhost:17033/notes/${id}`, {
      method: "PATCH",
    }).then(() => {
      getAllNotes();
    });

    const toBeEditedNote = notes.find((item) => item.id === id);
    setEditMode(true);
    setEditableNote(toBeEditedNote);
    setNoteTitle(toBeEditedNote.title);
  };

  const updateHandler = (id) => {
    id.preventDefault();
    if (!noteTitle) {
      return alert(`Please Provide a valid title`);
    }
    const newNotes = notes.map((item) => {
      if (item.id === editableNote.id) {
        item.title = noteTitle;
      }

      return item;
    });

    setNotes(newNotes);
    setEditMode(false);
    setEditableNote(null);
    setNoteTitle("");
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <div className="App">
      <h1>Hello React Developer</h1>
      <form
        onSubmit={(e) => {
          editMode ? updateHandler(e) : createHandler(e);
        }}
      >
        <input
          type="text"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <button
          onClick={(e) => {
            editMode ? updateHandler(e) : createHandler(e);
          }}
          type="submit"
        >
          {editMode ? "Update Note" : "Create Note"}
        </button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <span>{note.title}</span>
            <button onClick={() => editHandler(note.id)}>Edit</button>
            <button onClick={() => removeHandler(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {isLoading && <div>Loading.........</div>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default App;

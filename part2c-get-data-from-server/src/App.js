
import './App.css';
import noteService from "./services/notes";
import {useEffect, useState} from "react";
import Note from "./components/Note"

function App() {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Loads the notes from the Value stored in the DB
  useEffect(() => {
    noteService
      .getAll()
      .then(response => {
        console.log("Response: ", response.data);
        setNotes(response.data)
    });
  }, []);

  // Add a new note and Show on the Page
  const addNotes = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5
    }
    noteService.create(noteObject).then(response => {
      setNotes(notes.concat(response.data));
      setNewNote("");
    });
  }

  // Change the importance of a note
  const toggleImportanceOf = (id) => {
    const note = notes.find(note => note.id === id);
    const updatedNote = {...note, important: !note.important};

    noteService
      .update(id, updatedNote)
      .then(response => {
        setNotes(notes.map( note => note.id !== id ? note : response.data ));
      })
  }

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)

  return (
    <>
    <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'important': 'All'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
            <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
        )}
      </ul>
      <form onSubmit={addNotes}>
        <input value={newNote} onChange={(event) => {setNewNote(event.target.value)}}/>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default App;

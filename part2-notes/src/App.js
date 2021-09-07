import React, { useState } from 'react'
import Note from './components/Note'

const App = ( props ) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("A new note");
  const [showAll, setShowAll] = useState(false);

  const addNotes = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObject));
    console.log("button clicked", event.target, notes);
    setNewNote("");
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  console.log("Notes to Show", notesToShow);

  const handleNewNoteChange = (event) => {
    setNewNote(event.target.value);
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'important': 'All'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
            <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNotes}>
        <input value={newNote} onChange={handleNewNoteChange}/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App
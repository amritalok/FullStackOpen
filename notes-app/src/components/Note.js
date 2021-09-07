import React from "react";

const Note = ({toggleImportance, note}) => {
    const label = note.important ? "Make not important" : "Make Important";
    return (
        <>
            <li>
                {note.content}
                <button onClick={toggleImportance}> {label} </button>
             </li>
        </>
    )
}

export default Note;
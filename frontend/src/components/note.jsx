import React from "react";

function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at);
  return (
    <div className="note-container">
      <p className="note-title">{note.title}</p>
      <p className="note-content">{note.content}</p>
        <p className="note-date">
            Created at: {formattedDate.toLocaleDateString()}{" "}
            {formattedDate.toLocaleTimeString()}</p>
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}
export default Note;

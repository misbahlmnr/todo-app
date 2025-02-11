import { useState } from 'react';

const Note = ({ note, handleEdit, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleChangeNoteText = (e) => {
    const newNote = { ...note, title: e.target.value };
    handleEdit(newNote);
  };

  const handleChangeCheckbox = (e) => {
    const newNote = { ...note, isCompleted: e.target.checked };
    handleEdit(newNote);
  };

  const renderContent = () => {
    if (isEditing) {
      return (
        <>
          <input
            type="text"
            value={note.title}
            onChange={handleChangeNoteText}
          />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
      );
    } else {
      return (
        <>
          {note.title}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      );
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={note.isCompleted}
        onChange={handleChangeCheckbox}
      />
      {renderContent()}
      <button onClick={() => handleDelete(note.id)}>Delete</button>
    </label>
  );
};

export default Note;

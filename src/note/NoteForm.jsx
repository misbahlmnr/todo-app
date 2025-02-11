import { useState } from 'react';
import { generateId } from '../shared/Utils';

const NoteForm = ({ onAddNote }) => {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNote({
      id: generateId(),
      title: note,
      isCompleted: false,
    });
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="note"
        id="note"
        placeholder="Masukan note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
};

export default NoteForm;

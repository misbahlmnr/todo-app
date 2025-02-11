import Note from './Note';

const NoteList = ({ notes, handleEdit, handleDelete }) => {
  return (
    <ul>
      {notes && notes.length > 0 ? (
        notes.map((note, idx) => (
          <li key={idx}>
            <Note
              note={note}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </li>
        ))
      ) : (
        <li>Belum ada note</li>
      )}
    </ul>
  );
};

export default NoteList;

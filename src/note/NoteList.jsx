import { useMemo, useRef, useState } from 'react';
import Note from './Note';

const NoteList = ({ notes, handleEdit, handleDelete }) => {
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => note.title.includes(search));
  }, [notes, search]);

  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };

  return (
    <div>
      <div>
        <input placeholder="Search" ref={searchInput} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {filteredNotes && filteredNotes.length > 0 ? (
          filteredNotes.map((note, idx) => (
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
    </div>
  );
};

export default NoteList;

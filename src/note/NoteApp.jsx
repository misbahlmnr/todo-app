import NoteForm from './NoteForm';
import NoteList from './NoteList';
import { useReducer } from 'react';

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];
    case 'CHANGE_NOTE':
      return state.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    case 'DELETE_NOTE':
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
};

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  const onAddNote = (note) => {
    dispatch({
      type: 'ADD_NOTE',
      payload: note,
    });
  };

  const onEditNote = (note) => {
    dispatch({
      type: 'CHANGE_NOTE',
      payload: note,
    });
  };

  const onDeleteNote = (noteId) => {
    dispatch({
      type: 'DELETE_NOTE',
      payload: noteId,
    });
  };

  return (
    <>
      <h1>Note App</h1>
      <NoteForm onAddNote={onAddNote} />
      <NoteList
        notes={notes}
        handleEdit={onEditNote}
        handleDelete={onDeleteNote}
      />
    </>
  );
};

export default NoteApp;

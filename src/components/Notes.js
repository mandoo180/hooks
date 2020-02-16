import React, { useReducer, useEffect } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NotesContext from '../context/notes-context';

const Notes = props => {
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, []);

  // alternate to componentDidMount
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
      dispatch({ type: 'POPULATE_NOTES', notes });
      // setNotes(notesData);
    }
  }, []);

  // alternate to componentDidUpdate
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <NoteList />
      <NoteForm />
    </NotesContext.Provider>
  );
};

export default Notes;

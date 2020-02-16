import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { dispatch } = useContext(NotesContext);

  const addNote = e => {
    e.preventDefault();
    // setNotes([...notes, { title, body }]);
    dispatch({ type: 'ADD_NOTE', title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea value={body} onChange={e => setBody(e.target.value)}></textarea>
      <button onClick={addNote}>Add Note</button>
    </form>
  );
};

export default NoteForm;

import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';
import useForm from '../hooks/useForm';

const NoteForm = () => {
  const { dispatch } = useContext(NotesContext);
  const [content, bindContent, resetContent] = useForm({
    title: '',
    body: ''
  });
  const { title, body } = content;

  const addNote = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_NOTE', title, body });
    resetContent();
  };

  return (
    <form>
      <input type="text" value={title} name="title" {...bindContent} />
      <textarea value={body} name="body" {...bindContent}></textarea>
      <button onClick={addNote}>Add Note</button>
    </form>
  );
};

export default NoteForm;

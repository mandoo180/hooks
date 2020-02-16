import React, { useEffect, useContext } from 'react';
import NotesContext from '../context/notes-context';

const Note = ({ title, body }) => {
  const { dispatch } = useContext(NotesContext);
  useEffect(() => {
    console.log('setting up effect');

    // alternate to componentWillUnmount
    return () => {
      console.log('cleaning up effect');
    };
  }, []);

  return (
    <div>
      <ul>
        <li>
          <h2>{title}</h2>
          <h4>{body}</h4>
          <button onClick={() => dispatch({ type: 'REMOVE_NOTE', title })}>Remove</button>
        </li>
      </ul>
    </div>
  );
};

export default Note;

import React, { useEffect, useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({ title, body }) => {
  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

  useEffect(() => {
    console.log('setting up effect');
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
          <p>
            {position.x}, {position.y}
          </p>
          <button onClick={() => dispatch({ type: 'REMOVE_NOTE', title })}>Remove</button>
        </li>
      </ul>
    </div>
  );
};

export default Note;

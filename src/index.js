import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Notes from './components/Notes';

ReactDOM.render(<Notes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

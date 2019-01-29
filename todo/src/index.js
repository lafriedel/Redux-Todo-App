import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { loadState, saveState } from './localStorage'

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const persistedState = loadState();

const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    saveState({
        todos: store.getState().todos
    });
})

ReactDOM.render(
    <Provider store={store}><App /></Provider>
,
 document.getElementById('root'));


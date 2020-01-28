import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from './reducers/todoReducer';



ReactDOM.render(
    <Provider store={createStore(todoReducer)}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  
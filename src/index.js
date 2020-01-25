import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './reducers'
import './index.css';
import EventIndex from './components/Event';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <EventIndex />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

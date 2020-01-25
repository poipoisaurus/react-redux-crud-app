import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import reducer from './reducers'
import './index.css';
import EventIndex from './components/Event/index';
import EventNew from './components/Event/new';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact pash="events/new" component={EventNew} />
        <Route exact pash="/" component={EventIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

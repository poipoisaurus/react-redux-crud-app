import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'
import './index.css';
import EventIndex from './components/Event/index';
import EventNew from './components/Event/new';
import EventShow from './components/Event/show';
import registerServiceWorker from './registerServiceWorker';

const enhancer = process.env.NODE_ENV === 'development'
  ? composeWithDevTools(applyMiddleware(thunk))
  : applyMiddleware(thunk)

const store = createStore(reducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/events/new" component={EventNew} />
        <Route path="/events/:id" component={EventShow} />
        <Route exact path="/" component={EventIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

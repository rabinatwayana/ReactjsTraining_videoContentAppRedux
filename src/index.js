import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from "redux-thunk"
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import rootReducers from "./reducers/index"

import { applyMiddleware, createStore } from 'redux'
import { Provider } from "react-redux"
const middleware = [thunk];
const store = createStore(
  rootReducers,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

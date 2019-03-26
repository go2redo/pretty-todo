import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './store/reducer';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import './index.scss';

import App from './components/App';

UIkit.use(Icons);

const store = createStore(rootReducer, composeWithDevTools());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

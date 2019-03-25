import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import './index.scss';
import App from './App.jsx';
import rootReducer from './store/reducer';

import { addTodo, editTodo, deleteTodo, setUserName } from './store/actions';

UIkit.use(Icons);

const store = createStore(rootReducer);

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  addTodo: () => dispatch(addTodo()),
  editTodo: () => dispatch(editTodo()),
  deleteTodo: () => dispatch(deleteTodo()),
  setUserName: () => dispatch(setUserName()),
});

const ConnectApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

render(
  <Provider store={store}>
    <ConnectApp />
  </Provider>,
  document.getElementById('root'),
);

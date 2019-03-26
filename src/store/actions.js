import _ from "lodash";

import {
  ADD_TODO,
  TOOGLE_TODO,
  EDIT_TODO,
  DELETE_TODO,
  SET_USERNAME
} from './types';

export const addTodo = payload => ({
  type: ADD_TODO,
  id: _.uniqueId(),
  text: payload
});

export const toogleTodo = payload => ({
  type: TOOGLE_TODO,
  id: payload
});

export const editTodo = payload => ({
  type: EDIT_TODO,
  payload
});

export const deleteTodo = payload => ({
  type: DELETE_TODO,
  id: payload
});

export const setUserName = payload => ({
  type: SET_USERNAME,
  username: payload
});
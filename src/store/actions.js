import {
  ADD_TODO,
  TOOGLE_TODO,
  EDIT_TODO,
  DELETE_TODO,
  SET_USERNAME
} from './types'

let nextId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  id: ++nextId,
  text
})
export const toogleTodo = id => ({
  type: TOOGLE_TODO,
  id
})
export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  id,
  text
})
export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
})

export const setUserName = text => ({
  type: SET_USERNAME,
  text
})
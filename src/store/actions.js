import {
  ADD_TODO,
  TOOGLE_TODO,
  EDIT_TODO,
  DELETE_TODO,
  SET_USERNAME
} from './types'

let nextId = 0;

export const addTodo = payload => ({
  type: ADD_TODO,
  id: ++nextId,
  text: payload
})
export const toogleTodo = payload => ({
  type: TOOGLE_TODO,
  id: payload
})
export const editTodo = payload => ({
  type: EDIT_TODO,
  payload
})

export const deleteTodo = payload => ({
  type: DELETE_TODO,
  id: payload
})

export const setUserName = payload => ({
  type: SET_USERNAME,
  username: payload
})
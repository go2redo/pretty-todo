import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  SET_USERNAME
} from './types'

export const addTodo = payload => ({
  type: ADD_TODO,
  payload
})
export const editTodo = (id, payload) => ({
  type: EDIT_TODO,
  id,
  payload
})
export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
})

export const setUserName = payload => ({
  type: SET_USERNAME,
  payload
})
import {
  ADD_TODO,
  TOOGLE_TODO,
  EDIT_TODO,
  DELETE_TODO,
  SET_USERNAME
} from './types'

const initialState = {
  username: '',
  todos: []
}

const rootReducer = (state = initialState, action) => {

  const {
    text,
    id
  } = action;

  const {
    todos
  } = state;

  switch (action.type) {

    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...todos,
          {
            id,
            text,
            completed: false
          }
        ]
      }

    case TOOGLE_TODO:
      return {
        ...state,
        todos: todos.map(
          item => item.id === id ? {
            ...item,
            completed: !item.completed
          } : item
        )

      }

    case EDIT_TODO:
      return {
        ...state,
        todos: todos.map(
          item => item.id === action.payload.id ? {
            ...item,
            text: action.payload.text
          } : item
        )

      }

    case DELETE_TODO:
      return {
        ...state,
        todos: todos.filter(todo => todo.id !== action.id)
      }

    case SET_USERNAME:
      return {
        ...state,
        username: action.username
      }

    default:
      return state

  }

}

export default rootReducer;
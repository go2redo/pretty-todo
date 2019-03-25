import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  SET_USERNAME
} from './types'

const defaultState = {}

const rootReducer = (state = defaultState, action) => {

  switch (action.type) {

    case ADD_TODO:
      return {
        ...state,
      }

    case EDIT_TODO:
      return {
        ...state,
      }

    case DELETE_TODO:
      return {
        ...state,
      }

    case SET_USERNAME:
      return {
        ...state,
      }

    default:
      return state

  }

}

export default rootReducer;
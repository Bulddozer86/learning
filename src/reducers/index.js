import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import buttons from './buttons'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  buttons
})

export default todoApp
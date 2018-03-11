import { combineReducers } from 'redux'
import chats from './chats'
import buttons from './buttons'

const chatApp = combineReducers({
    chats,
    buttons
})

export default chatApp;
import types from './types'

function chatSelected(chat)
{ 
    return {
        type: types.CHAT_SELECTED,
        chat: chat
    }
}

export default {chatSelected}
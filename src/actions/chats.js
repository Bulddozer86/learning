import types from './types'

function chatSelected(chat)
{ 
    return {
        type: types.CHAT_SELECTED,
        chat: chat
    }
}

function chatStart(chat)
{
    return {
        type: types.CHAT_START,
        chat: chat
    }
}

export default {chatSelected, chatStart}
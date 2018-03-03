import types from '../actions/types'

const initialState = {
    chats: []
}

function chatsReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch(action.type) {
        case types.CHAT_SELECTED:
            state.chats = initialState;
            
            return Object.assign({}, state, {
                chats: [...state.chats, action.chat]
            });
    }
}

export default chatsReducer;
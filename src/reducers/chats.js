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
        
        case types.CHAT_START:
            return Object.assign({}, state, {
                chats: [...state.chats, action.chat]
            });
        
        default: return state;    
    }
}

export default chatsReducer;
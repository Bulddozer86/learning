import types from '../actions/buttons/types';

const initialState = {
    buttons: {
        start: {
            name: 'Start',
            enabled: true
        },
        stop: {
            name: 'Stop',
            enabled: false
        },
        next: {
            name: 'Next',
            enabled: false
        }
    }
}

function buttonReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch(action.type) {
        case types.BUTTON_START:
             action.button.enabled = false
            return { ...state, year: action.button }
            // return Object.assign({}, state, {
            //     chats: [...state.buttons, action.button]
            // });
        
        case types.BUTTON_STOP:
            return Object.assign({}, state, {
                chats: [...state.buttons, action.button]
            });
        
        case types.BUTTON_NEXT:
            return Object.assign({}, state, {
                chats: [...state.buttons, action.button]
            });
        
        default: return state; 
    }
}

export default buttonReducer;

const initialState = {
  isInit: false,
  buttons: {
    start: {
      name: 'Start'
    },
    stop: {
      name: 'Stop'
    },
    next: {
      name: 'Next'
    }
  }
}

const button = (state, action) => {
    switch (action.type) {
      case 'BUTTON_START':
        return {
          ...state,
          ['isInit']: action.flag
        }
      case 'BUTTON_STOP':
        return {
          ...state,
          ['isInit']: action.flag
        }  
      default:
        return state
    }
  }
  
  const buttonsAction = (state = initialState, action) => {
    switch (action.type) {
      case 'BUTTON_START':
        return button(state, action);
      
      case 'BUTTON_STOP':
        return button(state, action);  
      
      default:
        return state
    }
  }
  
  export default buttonsAction
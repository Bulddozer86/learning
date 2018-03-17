
import constants from '../actions/buttons/constants'

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
      case constants.SATRT_BTN:
        return {
          ...state,
          ['isInit']: action.flag
        }
      case constants.STOP_BTN:
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
      case constants.SATRT_BTN:
        return button(state, action);
      
      case constants.STOP_BTN:
        return button(state, action);  
      
      default:
        return state
    }
  }
  
  export default buttonsAction
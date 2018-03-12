
const initialState = {
  start: {
    name: 'Start',
    flag: true
  }  
}

const button = (state, action) => {
    switch (action.type) {
      case 'BUTTON_START':
        console.log(state)
        state.start.name = 'hello world'  
        return state
      default:
        return state
    }
  }
  
  const buttonsAction = (state = initialState, action) => {
    switch (action.type) {
      case 'BUTTON_START':
        console.log(button(state, action));
        return [
          ...state,
          button(state, action)
        ]
        //return state
      default:
        return state
    }
  }
  
  export default buttonsAction
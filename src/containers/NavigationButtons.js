import { connect } from 'react-redux'
import { buttonStart } from '../actions'
import Buttons from '../components/Buttons'

const mapStateToProps = (state) => {
  return {
    buttons: state.buttons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonStart: (flag) => {
      dispatch(buttonStart(flag))
    }
  }
}

const ButtonList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons)

export default ButtonList
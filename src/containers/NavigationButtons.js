import { connect } from 'react-redux'
import {buttonNext, buttonStart, buttonStop} from '../actions/buttons'
import Buttons from '../components/Buttons'

const mapStateToProps = (state) => {
  return {
    buttons: state.buttons
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonStart: (flag) => {
      dispatch(buttonStart(flag))
    },
    onButtonStop: (flag) => {
      dispatch(buttonStop(flag))
    },
    onButtonNext: (flag) => {
      dispatch(buttonNext(flag))
    }
  }
};

const ButtonList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);

export default ButtonList
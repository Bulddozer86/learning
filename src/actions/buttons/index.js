import constants from './constants'

export const buttonStart = (flag) => {
    return {
        type: constants.SATRT_BTN,
        flag
    }
}

export const buttonStop = (flag) => {
  return {
      type: constants.STOP_BTN,
      flag
  }
}
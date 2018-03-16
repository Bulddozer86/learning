import React from 'react'

const Buttons = ({ onButtonStart, onButtonStop, buttons }) => {
  if (buttons.isInit == false) {
    return (<div className="navigation">
    <button type="text" onClick={() => onButtonStart(true)}>{buttons.buttons.start.name}</button>
   </div>)
  } else {
    return (<div className="navigation">
    <button type="text" onClick={() => onButtonStop(false)}>{buttons.buttons.stop.name}</button>
    <button type="text">{buttons.buttons.next.name}</button>
    </div>)
  }
}

export default Buttons
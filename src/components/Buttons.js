import React, { PropTypes } from 'react'

const Buttons = ({ onButtonStart, buttons }) => (
  <button 
    type="text" 
    onClick={() => onButtonStart(buttons.start.flag)}
  >
    {console.log(buttons)}
    {buttons.start.name}
  </button>
)

export default Buttons
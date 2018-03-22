import React from 'react'

const Buttons = ({onButtonStart, onButtonStop, onButtonNext, buttons}) => {
    return (<div className="navigation">
        <button type="text" onClick={() => onButtonStart(1)}>{buttons.buttons.start.name}</button>
        <button type="text" onClick={() => onButtonStop(2)}>{buttons.buttons.stop.name}</button>
        <button type="text" onClick={() => onButtonNext(3)}>{buttons.buttons.next.name}</button>
    </div>)

};

export default Buttons
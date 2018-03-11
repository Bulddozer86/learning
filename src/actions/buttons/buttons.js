import types from './types'

function buttonStart(button)
{ 
    return {
        type: types.BUTTON_START,
        button: button
    }
}

function buttonStop(button)
{
    return {
        type: types.BUTTON_STOP,
        button: button
    }
}

function buttonNext(button)
{
    return {
        type: types.BUTTON_NEXT,
        button: button
    }
}

export default {buttonStart, buttonStop, buttonNext}
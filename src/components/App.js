import React from 'react'
import NavigationButtons from '../containers/NavigationButtons'
import LeftWindow from './chat-windows/LeftWindow'
import RightWindow from './chat-windows/RightWindeo'

import '../App.css';

const App = () => (
  <div>
    <NavigationButtons />
    <LeftWindow />
    <RightWindow />
  </div>
)

export default App
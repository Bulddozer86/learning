import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import NavigationButtons from '../containers/NavigationButtons'

const App = () => (
  <div>
    
    <NavigationButtons />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
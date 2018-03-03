import React, { Component } from 'react';
import { connect } from 'react-redux'
import MainLayout from './components/Layout'
import chatActions from './actions/chats'

import logo from './logo.svg';

import './Bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <MainLayout chats={this.props.chats} onChatSelect={this.props.onChatSelect}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chats: state.chats.chats
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChatSelect: (chat) => {
      dispatch(chatActions.chatSelected(chat))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

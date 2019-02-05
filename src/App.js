import React, { Component } from 'react';
import Messages from './components/Messages';
import './App.css'

class App extends Component {
  state = {
    messages: [
    {
      id: 1,
      tite: 'Lebron is trash'
    },
    {
      id: 2,
      tite: 'And so are the Lakers'
    },
    {
      id: 3,
      tite: 'Not as bad as the Cowboys though...'
    }
    ]
  }

  render() {
    console.log(this.state.messages)
    return (
      <div className="App">
        <h1>Sean App</h1>
        <Messages />
      </div>
    );
  }
}

export default App;

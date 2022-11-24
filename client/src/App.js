// src/App.js

import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App">
          <h1>Users</h1>
          {this.state.users.map(user =>
            <div key={user.id}>{user.username}</div>
          )}
        </div>
        </header>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid rc-introp">
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Coins List</h2>
        </div>
      </div>
    );
  }
}

export default App;

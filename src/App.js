import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to the App.js<br/>
        <Link to="/counter">Counter</Link>
      </div>
    );
  }
}

export default App;
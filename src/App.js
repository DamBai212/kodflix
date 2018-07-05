import React, { Component } from 'react';
import Lambs from './Lambs.jpg';
import Tokyo from './Tokyo.jpg';
import Seven from './Seven.png';
import One from './One.jpg';
import Titan from './Titan.jpg';
import Magi from './Magi.jpg';
import Cover from './Cover.js';
import Gallery from './Gallery';

import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bold and Cold</h1>
        </header>
        <div className="App-intro">
          <Gallery/>
        </div>
      </div >
    );
  }
}

export default App;
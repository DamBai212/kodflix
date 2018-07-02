import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Bold and Cold</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          
          
         <div className="container">
           
           <div className="children">
           Naruto
           </div>
         
           <div className="children">
           One Piece
           </div>

            <div className="children">
           Seven Deadly Sins
           </div>
         </div>

         <div className="container">
           
           <div className="children">
           
           Tokyo Ghoul
           
           </div>
         
           <div className="children">
           
           Magi
           
           </div>

            <div className="children">
           
           My Hero Academia
           
           </div>
         </div>


        </p>
      </div>
    );
  }
}

export default App;

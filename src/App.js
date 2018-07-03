import React, { Component } from 'react';
import Lambs from './Lambs.jpg';
import Tokyo from './Tokyo.jpg';
import Seven from './Seven.png';
import One   from './One.jpg'  ;
import Titan from './Titan.jpg';
import Magi  from './Magi.jpg'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Bold and Cold</h1>
          
        </header>
        <div className="App-intro">
          
          
          
         <div className="container">
           
           <div className="children">
           <img src={Tokyo}   alt="Tokyo" width="200" height="400" className="hover"/>
           <p className="text">Tokyo Ghoul</p>
           </div>
         
           <div className="children">
           <img src={One}   alt="One" width="200" height="400" className="hover"/>
           <p className="text">One Piece</p>
           </div>

            <div className="children">
            <img src={Seven}   alt="Seven" width="200" height="400" className="hover" />
           <p className="text">Seven Deadly Sins</p>
           </div>
         </div>

         <div className="container">
           
           <div className="children">
           
           <img src={Magi}   alt="Magi" width="200" height="400" className="hover" />
           <p className="text">Magi</p>
           </div>
         
           <div className="children">
           
           <img src={Titan}   alt="Titan" width="200" height="400" className="hover" />
           <p className="text">Attack on Titan</p>
           </div>

            <div className="children">
           
            <img src={Lambs}   alt="Lambs" width="200" height="400" className="hover" />
           <p className="text">The Silence of the Lambs</p>
           </div>
         </div>


        </div>
      </div>
    );
  }
}

export default App;
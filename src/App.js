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
           <img src={Tokyo}   alt="Tokyo" width="200" height="400" />
           <div className="overlay">Toyko Ghoul</div>
           </div>
         
           <div className="children">
           <img src={One}   alt="One" width="200" height="400" />
           <div className="overlay">One Piece</div>
           </div>

            <div className="children">
            <img src={Seven}   alt="Seven" width="200" height="400"  />
           <div className="overlay">Seven Deadly Sins</div>
           </div>
         </div>

         <div className="container">
           
           <div className="children">
           
           <img src={Magi}   alt="Magi" width="200" height="400"  />
           <div className="overlay">Magi</div>
           </div>
         
           <div className="children">
           
           <img src={Titan}   alt="Titan" width="200" height="400"  />
           <div className="overlay">Attack on Titan</div>
           </div>

            <div className="children">
           
            <img src={Lambs}   alt="Lambs" width="200" height="400"  />
           <div className="overlay">The Silence of the Lambs</div>
           </div>
         </div>


        </div>
      </div>
    );
  }
}

export default App;
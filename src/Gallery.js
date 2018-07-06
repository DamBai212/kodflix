import React, { Component } from 'react';
import './App.css';
import Cover from './Cover';
import Lambs from './Lambs.jpg';
import Tokyo from './Tokyo.jpg';
import Seven from './Seven.png';
import One from './One.jpg';
import Titan from './Titan.jpg';
import Magi from './Magi.jpg';


class Gallery extends Component {
    render() {
        return (
            <div>
                    <header className="App-header">
                        <h1 className="App-title">Bold and Cold</h1>
                    </header>
                    <div className="App-intro">¸
                        <div className='container'>
                            <Cover title='Seven' image={Seven} alt="Seven" />
                            <Cover title='Tokyo-Ghoul' image={Tokyo} alt="Tokyo-Ghoul" />
                            <Cover title='Titan' image={Titan} alt="Titan" />
                        </div>
                        <div className='container'>
                            <Cover title='Lambs' image={Lambs} alt="Lambs" />
                            <Cover title='Magi' image={Magi} alt="Magi" />
                            <Cover title='One' image={One} alt="One" />
                        </div>
                    </div >
                </div>
           
        );
    }
}
export default Gallery;
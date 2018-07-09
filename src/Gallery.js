import React, { Component } from 'react';
import './App.css';
import Cover from './Cover';
import Anime from './Gallery-get.js';

class Gallery extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Bold and Cold</h1>
                </header>
                <div className="App-intro">¸
                        <div className='container'>
                       {Anime.map(function(Anime){
                       return <Cover  title={Anime.title} image={Anime.image} key={Anime.alt} alt={Anime.alt}/>;
                       })}
                    </div>
                </div >
            </div>

        );
    }
}
export default Gallery;


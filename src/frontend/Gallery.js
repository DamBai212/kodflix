import React, { Component } from 'react';
import './App.css';
import Cover from './Cover';
import Loading from './Loading.js'

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Animes: []
        };
    }

    componentDidMount() {
        fetch("/rest/animes")
            .then(res => res.json())
            .then(Animes => this.setState({ Animes }));
    }



    render() {
        let Animes = this.state.Animes;
        if (!Animes) {
          return <Loading />
        }



        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Bold and Cold</h1>
                </header>
                <div className="App-intro">
                    <div className='container'>
                        {Animes.map(function (Anime) {
                            return <Cover id={Anime.id} title={Anime.title} image={Anime.image} synopsis={Anime.synopsis} key={Anime.id} alt={Anime.alt} />;
                        })}
                    </div>
                </div >
            </div>

        );

    }
}
export default Gallery;


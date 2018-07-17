import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import Animes from './Gallery-get.js';

class Details extends Component {

    constructor(props) {
        super(props);

        this.state = {
            NotFound: false,
            Anime: {
            }






        }
    }

    componentDidMount() {
        const Anime = Animes.find(Anime => Anime.id === this.props.match.params.id);
        this.setState({ Anime: Anime });

    }



    render() {


        if (this.state.Anime) {
            return (
                <div>
                    <h1 className="Title">
                        <center>{this.state.Anime.title}</center>
                    </h1>
                    <Link to="/">Gallery</Link>

                    <div className="Container2">

                        <h2 className="Synopsis">
                            {this.state.Anime.synopsis}
                        </h2>

                        <img className="Anime-Images"
                            src={this.state.Anime.image} alt="Anime.alt" width="60px" height="40px" />

                    </div>
                    <div>
                        <h4>id:{this.props.match.params.id}</h4>
                    </div>

                </div>

            );
        } else {
            return <Redirect to='/not-found' />
        }

    }
}




export default Details;
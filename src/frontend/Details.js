import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import Loading from './Loading'
class Details extends Component {

    constructor(props) {
        super(props);

        this.state = {
            NotFound: false,
            Anime: null
        }
    }

    componentDidMount() {

        fetch("/rest/animes")
            .then(res => res.json())
            .then(Animes => {
                const Anime = Animes.find(Anime =>
                    Anime.id === this.props.match.params.id);
                this.setState({ Anime: Anime });
            });

    }



    render() {

        let{ Anime } = this.state;

        if (!Anime) {
          return <Loading />
        }


        if (this.state.Anime) {
            return (
                <div>
                    <h1 className="Title">
                        <center>{Anime.title}</center>
                    </h1>
                    <Link to="/">Gallery</Link>

                    <div className="Container2">

                        <h2 className="Synopsis">
                            {Anime.synopsis}
                        </h2>

                        <img className="Anime-Images"
                            src={require(`./images/${Anime.id}.jpg`)} alt="Anime.alt" width="60px" height="40px" />

                    </div>
                    <div className="ID">
                        <h4>id :{this.props.match.params.id}</h4>
                    </div>

                </div>

            );
        } else {
            return <Redirect to='/not-found' />
        }

    }
}




export default Details;
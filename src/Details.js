import React, { Component } from 'react';
import { Link,Redirect } from "react-router-dom";
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
const Anime = Animes.find(Anime=> Anime.id === this.props.match.params.id );
this.setState({Anime:Anime });

    }

   

    render() {


if(this.state.Anime) {
        return (
            <div>
                <h1 className="Title">Hello World,
                    {this.state.Anime.title}
                </h1>
                <Link to="/">Gallery</Link>
                <div>
                    <h3>Title: {this.props.match.params.id}</h3>
                
                </div>
            </div>
           );  
         } else {
             return <Redirect to='/not-found'/>
         }
       
    }
}




export default Details;
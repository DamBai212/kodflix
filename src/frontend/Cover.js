import React from 'react';
import './App.css';
import {Link} from "react-router-dom";


const Cover = (props) => {
    return (
        <div className="Cover">
            <Link to={ props.id}>
                <img src={require(`./images/${props.id}.jpg`)} alt={props.alt} key={props.id}  />
                <div className="overlay">{props.title}</div>
              </Link>
            </div>
        )
    }


export default Cover;
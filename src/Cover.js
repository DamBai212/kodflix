import React from 'react';
import './App.css';
import {Link} from "react-router-dom";


const Cover = (props) => {
    return (
        <div className="Cover">
            <Link to={ props.title}>
                <img src={props.image} alt={props.alt} />
                <div className="overlay">{props.title}</div>
             </Link>
            </div>
        )
    }


export default Cover;
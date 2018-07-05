import React, { Component } from 'react';
import './App.css';

const Cover = (props) => {
        return (
            <div className="Cover">
                <img src={props.image} alt={props.alt} width="200" height="400" />
                <div className="overlay">{props.title}</div>
            </div>
        )
    }


export default Cover;
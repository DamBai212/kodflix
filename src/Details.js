import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Details extends Component {
    render() {
        return (
          <div>
            <h1 className="Title">Hello World</h1>
            <Link to="/">Gallery</Link>
            </div>
        );
    }
}
export default Details;
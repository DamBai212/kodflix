import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Details extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "Hello, this will be the details page for each Movie & TV show :)"
        }
    }
 
    componentDidMount(){
        this.getMessage();
    }

  getMessage(){
      setTimeout(()=>{
        console.log("Our message is sent");
        this.setState({
            message: "Coming Soon!"
        })
    },3000)
  }
  


    render() {
        return (
            <div>
                <h1 className="Title">Hello World,
            {this.state.message}
                </h1>

                <Link to="/">Gallery</Link>
            </div>
        );
    }
}
export default Details;
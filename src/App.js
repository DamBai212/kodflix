import React, { Component } from 'react';
import Gallery from './Gallery';
import Details from './Details';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact  path="/" component={Gallery} />
            <Route path="/:Details" component={Details} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
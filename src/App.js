import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from './components/Nav.js' ;
import Swipe from './components/Swipe.js';

class App extends Component {

  render() {
    return (
      <div className="app">
      <Nav />
        <Switch>

          <Route path='/' component={Swipe} />
        </Switch>
      </div>
    );
  }
}

export default App;

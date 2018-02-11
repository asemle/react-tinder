import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'; 
// import axios from 'axios';
import Swipe from './Swipe.js'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: "FFJFJJFJF"
    }
    // let getCards = () => axios.get('/api/users/1').then(response => {
    //   console.log(response)
    //   this.setState({
    //     data: response
    //   })
    // }).catch(err => {
    //   console.log(err);
    // })
  }
  render() {
    return (
      <div className="main">
        <Switch>

          <Route path='/' component={Swipe} />
        </Switch>
      </div>
    );
  }
}

export default Main;
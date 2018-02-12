import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from './components/Nav.js' ;
import Swipe from './components/Swipe.js';
import Profile from './components/Profile.js';

var me = {
  id: 0,
  name: "Jerry",
  age: 35,
  gender: "Male",
  location: "3 miles",
  pictures: ["https://upload.wikimedia.org/wikipedia/en/f/f6/Jerry_Seinfeld.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLp6tWjhgc2rYei-dr98WP802eDOEYuKS4jScAg3l-18UXUbR"],
  job: "Stand-up Comedian",
  school: "",
  about: "There's more to life than making shallow, fairly obvious observations"

}

class App extends Component {

  render() {
    return (
      <div className="app">
      <Nav />
        <Switch>
          <Route exact path='/profile' render={() => <Profile myProfile={me}/>} />
          <Route exact path='/' component={Swipe} />
        </Switch>
      </div>
    );
  }
}

export default App;

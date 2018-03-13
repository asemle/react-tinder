import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from './components/Nav.js' ;
import Swipe from './components/Swipe.js';
import Account from './components/Account.js';
import Messages from './components/Messages.js';

var me = {
  id: 0,
  name: "Jerry",
  age: 35,
  gender: "Male",
  location: "3 miles",
  pictures: ["https://i.chzbgr.com/full/8334924288/hCFACD046/","https://upload.wikimedia.org/wikipedia/en/f/f6/Jerry_Seinfeld.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLp6tWjhgc2rYei-dr98WP802eDOEYuKS4jScAg3l-18UXUbR"],
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
          <Route exact path='/account' render={() => <Account myProfile={me}/>} />
          <Route exact path='/' component={Swipe} />
          <Route exact path='/messages' component={Messages} />
        </Switch>
      </div>
    );
  }
}

export default App;

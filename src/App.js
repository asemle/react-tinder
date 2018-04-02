import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import { getUser } from './ducks/reducer.js';


import { connect } from 'react-redux';

import Nav from './components/Nav.js' ;
import Swipe from './components/Swipe.js';
import Login from './components/Login.js';
import Account from './components/Account.js';
import Messages from './components/Messages.js';
import Conversation from './components/Conversation.js';
import MatchProfile from './components/MatchProfile.js';



class App extends Component {

  componentDidMount() {
    this.props.getUser().then(function(props =this.props) {
      if(!props.user) {
      } else if (!props.user.name) {
        this.props.history.push("login") 
      } else {
        
      }
    })
  }

  render() {
    return (
      <div className="app">
      <Nav />
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/account' component={Account} />
          <Route exact path='/' component={Swipe} />
          <Route exact path='/messages' component={Messages} />
          <Route exact path='/convo/:id' component={Conversation}/>
          <Route exact path='/profile/:id' component={MatchProfile}/>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    loading: state.loading
  }
}

export default withRouter(connect(mapStateToProps, {getUser})(App));



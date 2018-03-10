
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import profile from './../styles/icons/profile.png';
import flame from './../styles/icons/flame.png';
import messages from './../styles/icons/messages2.png';

export default class Nav extends Component {
    constructor(props) {
        super(props);   
    }
    getRoute = ()=>{
        switch (window.location.hash) {
            case '#/':
                return 'navMiddle';
            case '#/account':
                return 'navRight';
            case '#/messages':
                return 'navLeft';
        }
    }
    render() {
        return (
            <header id='Nav' className={this.getRoute()}>
                <NavLink className="nav-link" exact activeClassName="activeLink" to='/account'>
                    <img className='logo' src={profile} alt="" />
                </NavLink>
                <NavLink className="nav-link" activeClassName="activeLink" exact to='/'>
                    <img className='logo' src={flame} alt="" />
                </NavLink>
                <NavLink className="nav-link" activeClassName="activeLink" to='/messages'>
                    <img className='logo' src={messages} alt="" />
                </NavLink>

            </header>
        )
    }
 }

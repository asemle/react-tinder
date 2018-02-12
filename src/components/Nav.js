
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import profile from './../styles/icons/profile.png';
import flame from './../styles/icons/flame.png';
import messages from './../styles/icons/messages2.png';

class Nav extends Component {

    render() {
        return (
            <header className='Nav'>
                <NavLink className="nav-link" exact activeClassName="activeLink" to='/profile'>
                    <img className='logo' src={profile} alt="" />
                </NavLink>
                <NavLink className="nav-link" activeClassName="activeLink" to='/'>
                    <img className='logo' src={flame} alt="" />
                </NavLink>
                <NavLink className="nav-link" activeClassName="activeLink" to='/messages'>
                    <img className='logo' src={messages} alt="" />
                </NavLink>

            </header>
        )
    }
}
export default Nav;
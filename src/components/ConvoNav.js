import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

export default function ConvoNav(props) {
    const match = props.match
    if(!match.pictures) {
        match.pictures=[];
    }
    return (
        <nav>
            <NavLink className="backButton" to="/messages"><i className="fas fa-angle-left"></i>

</NavLink>

            <NavLink className="messageNavProfile" to={`/profile/${match._id}`}><div><img src={match.pictures[0]} alt={match.name}/></div><span>{match.name}</span></NavLink>

            <span></span>
        </nav>
    )
}
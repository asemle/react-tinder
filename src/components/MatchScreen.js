import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default function MatchScreen(props) {
    var data = props.data;
    return (
    <div className='matchScreen'>
        <div className="msHeader">
                <img src="https://tinder.com/static/build/d9082867442774287641220db6e90f21.svg" alt=""/>
            <h3>{`You and ${data.name} have liked each other.`}</h3>
        </div>
        <div className="imageBox">
                <div className="imgLeft" style={{ backgroundImage: `url(${data.user.pictures[0]})`}}>
            </div>
            <div className="imgRight" style={{backgroundImage: `url(${data.picture})`}}>
            </div>
            
        </div>
        <NavLink exact to={`/convo/${data.id}`}>
            <button className="toconvo">SEND MESSAGE</button>
        </NavLink >
        <button className="keepswiping" onClick={() => props.close()}>KEEP SWIPING</button>
    </div>
    )
}


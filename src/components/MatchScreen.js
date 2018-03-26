import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class MatchScreen extends Component {

    componentDidMount() {
        var d = new Date();
        axios.post(`/api/match/${this.props.data.id}`,{'id':this.props.data.user.id, "matchTime": d})
        .then((res) => console.log(res))
    }

render() {
    var data = this.props.data;
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
        <button className="keepswiping" onClick={() => this.props.close()}>KEEP SWIPING</button>
    </div>
    )
}
}


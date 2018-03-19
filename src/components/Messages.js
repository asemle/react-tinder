import React, {Component} from 'react';
import NoMessages from './NoMessages.js';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

export default class Messages extends Component {
    constructor() {
        super();

        this.state = {
            matches: []
        }
    }

    componentDidMount() {
        axios.get('/api/users')
        .then(res => {
            this.setState({
                matches:res.data
            })
            console.log(res.data)
        })
    }



    render() {
        const matches = this.state.matches.map((match) => {
            return (

            <NavLink key={match._id} className="newMatch" exact to={`/convo/${match._id}`}>
                    <div style={{backgroundImage: `url(${match.pictures[0]})`}}>
                    {/* <img src={match.pictures[0]} alt=""/> */}
                </div>
                <span>{match.name}</span>
            </NavLink>
            )
        })

        const messages = <NoMessages/>


        return (
            <div className="messagesWrap">
                <div className="matchesTitle"><span>New Matches</span></div>
                <div className="matchList">
                    {matches}
                </div>
                {messages}
            </div>
        )
    }
}
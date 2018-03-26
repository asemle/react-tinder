import React, {Component} from 'react';
import NoMessages from './NoMessages.js';
import {NavLink} from 'react-router-dom';
import { getUser } from '../ducks/reducer.js';
import { connect } from 'react-redux';
import axios from 'axios';

class Messages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            matches: []
        }
    }

    componentDidMount() {
        const user = this.props.user;
        axios.put('/api/matches', {'matches':user.matches})
        .then(res => {
            this.setState({
                matches:[...res.data]
            })
            console.log(res.data)
        })
    }



    render() {
        let messages = [];
        const newmatches = this.state.matches.map((match) => {
            if(match.matches.find((match) => match.id === this.state.user.id).messages.length === 0) {
                console.log("yes")
            
            return (

            <NavLink key={match._id} className="newMatch" exact to={`/convo/${match._id}`}>
                    <div style={{backgroundImage: `url(${match.pictures[0]})`}}>
                    {/* <img src={match.pictures[0]} alt=""/> */}
                </div>
                <span>{match.name}</span>
            </NavLink>
            )
            } else {
                messages.push(match)
            }
        })

        const nomessages = <NoMessages/>

        messages = messages.map((match) => {
                return (

                    <NavLink key={match._id} className="newMatch" exact to={`/convo/${match._id}`}>
                        <div style={{ backgroundImage: `url(${match.pictures[0]})` }}>
                            {/* <img src={match.pictures[0]} alt=""/> */}
                        </div>
                        <section className="contentBox">
                             <h4>{match.name}</h4>
                              <span>{match.matches.find((match) => match.id === this.state.user.id).messages[0].content}</span>
                        </section>
                    </NavLink>
                )
            })

console.log(messages)
        return (
            <div className="messagesWrap">
                <div className="matchesTitle"><span style={newmatches.length !== 0 ? {display:"block"}:{display:"none"}}>New Matches</span></div>
                <div className="matchList">
                    {newmatches}
                </div>
                {messages.length === 0 ? nomessages:''}

                <div className="messagesBox">
                    <div className="matchesTitle"><span style={messages.length !== 0 ? { display: "block" } : { display: "none" }}>Messages</span></div>
                    {messages}
                </div>
                
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, { getUser })(Messages);
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
            matches: []
        }
    }

    componentDidMount() {
        const user = this.props.user;
        axios.put('/api/matches', {'matches':user.matches})
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
function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, { getUser })(Messages);
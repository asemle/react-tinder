import React, {Component} from 'react';
import axios from 'axios';
import ConvoNav from './ConvoNav';
import Message from './Message';

import {NavLink} from 'react-router-dom';
import { getUser} from '../ducks/reducer.js';
import { connect } from 'react-redux';

class Conversation extends Component {
    constructor(props) {
        super(props) 
        var user = {'matches':[]}
        if(props.user) {
            user = props.user;
        }

        this.state = {
            user: user,
            match: [],
            messages: [],
            id:props.match.params.id,
            message:''

        }
    }

    componentDidMount() {
        axios.get(`/api/user/${this.state.id}`)
        .then(res => {
            this.setState({
                match: res.data
            })
            console.log(res.data)
        })

    }
    
    changeMessage(message) {

        var userid = this.state.user.id;
        var newMessage = {
            timestamp: new Date(),
            userid: userid,
            content: message
        }
        this.setState({
            message: newMessage
        })
        console.log(this.state.message)
    }

    sendMessage() {

        axios.post(`/api/messages/${this.state.id}`, this.state.message).then((res) => {
            console.log(res)
            
        }
        )
        axios.post(`/api/mymessages/${this.state.id}`, this.state.message).then((res) => {
            console.log(res)
            this.setState({
                message:''
            })
            this.props.getUser().then((res) => {
                this.setState({
                    user:this.props.user
                })
            })

        }
        )

    }


    render() {

        function dhm(t) {
            var cd = 24 * 60 * 60 * 1000,
                ch = 60 * 60 * 1000,
                d = Math.floor(t / cd),
                h = Math.floor((t - d * cd) / ch),
                m = Math.round((t - d * cd - h * ch) / 60000);
            if (m === 60) {
                h++;
                m = 0;
            }
            if (h === 24) {
                d++;
                h = 0;
            }
            if(d) {
                return d + " days";
            } else if(h) {
                return h + " hours";
            } else if(m) {
                return m + " minutes";
            } else {
                return (Math.floor(t/1000)) + " seconds"
            }

        }

        var msgs;

        if(this.state.user) {
            msgs = this.state.user.matches.find((match) => match.id === this.state.id)

        }
        var showMessages;
        var matchedOn = '';

        var time = new Date(msgs.matchTime)
        
        if(msgs.messages.length) {

            time = (time.getMonth() + 1) + '/' + time.getDate() + '/' + time.getFullYear();

            matchedOn = <div className="matchTime"><span>You matched with {this.state.match.name} on {time}</span></div>
            showMessages = msgs.messages.map((msg) => {
            return (
                <Message sent={msg.timestamp} content={msg.content} mine={this.state.user.id === msg.userid}/>
            )
            }
        )
        } else {
            time = Date.now() - time
            matchedOn = <div className="matchedOn">
                <div>
                    <h3>You matched with <b>{this.state.match.name}</b> </h3>
                    <div><span>{dhm(time)} ago</span></div>
                    <NavLink to={`/profile/${this.state.match._id}`}>
                        <div>
                                <img src={this.state.match.pictures ? this.state.match.pictures[0]: ''} alt=""/>
                        </div>
                    </NavLink>
                    <span>Say hi</span>
                </div>
            </div>
        }

        return (
            <div className="convo">
                <ConvoNav match={this.state.match}/>
                <div className="convoInner">
                    {matchedOn}
                    {showMessages}
                </div>
                
                <div className="inputBox">
                    <input type="text" onChange={(e) => this.changeMessage(e.target.value)} placeholder=" Type a message..." value={this.state.message ? this.state.message.content: ''}> 
                    </input>
                    <input style={this.state.message ? { color: '#2A8CFB' } : {}} type="submit" value="Send" onClick={this.state.message ? () => this.sendMessage() : console.log('enter a message')}/>
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

export default connect(mapStateToProps, { getUser})(Conversation);
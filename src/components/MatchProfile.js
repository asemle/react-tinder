import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import Profile from './Profile';
import ProfilePics from './ProfilePics';


export default class Conversation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            match: [],
            pictures: [],
            id: props.match.params.id,
            redirect: false

        }
    }

    handleOnClick = () => {
        this.setState({ redirect: true });
    }


    componentDidMount() {
        axios.get(`/api/user/${this.state.id}`)
            .then(res => {
                this.setState({
                    match: res.data[0],
                    pictures: res.data[0].pictures
                })
                console.log(res.data[0])
            })

    }

    render() {
        const match = this.state.match;
        const pictures = this.state.pictures;

        if (this.state.redirect) {
            return <Redirect push to={`/convo/${match.id}`} />;
        }

        return (
            <div className="matchProfile">
                <div id="picWrap" className='fullScreen'>
                    <ProfilePics pictures={pictures} />
                </div>
                <Profile info={match.id} close={() => this.handleOnClick()} profile={match}></Profile>
            </div>
        )
    }
}
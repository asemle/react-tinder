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
                console.log(res.data)
                this.setState({
                    match: res.data,
                    pictures: res.data.pictures
                })
            })

    }

    render() {
        const match = this.state.match;
        const pictures = this.state.pictures;

        if (this.state.redirect) {
            return <Redirect push to={`/convo/${match._id}`} />;
        }

        return (
            <div className="matchProfile">
                <div id="picWrap" className='fullScreen'>
                    <ProfilePics pictures={pictures} />
                </div>
                <Profile info={match._id} close={() => this.handleOnClick()} profile={match}></Profile>
            </div>
        )
    }
}
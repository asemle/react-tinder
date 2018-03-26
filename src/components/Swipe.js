import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';
import axios from 'axios';
import Loading from './Loading.js';
import ProfilePics from './ProfilePics.js';
import Profile from './Profile.js';

import MatchScreen from './MatchScreen.js';

import { updateUser } from '../ducks/reducer.js';

import { connect } from 'react-redux';


class Swipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            data: null,
            info: false,
            matchscreen:false
        }

    }
    componentDidMount() {
        axios.get('/api/users').then(response => {
            this.setState({
                data: response.data
            })
        }).catch(err => {
            console.log(err);
        })
    }

    moreInfo(i) {
        this.setState({
            info: i
        })
        console.log(i)
        console.log(this.state.info)
    }
    close() {
        this.setState({
            matchscreen: false
        })
    }

    render() {
        let itsaMatch = (user, id, picture, name) => {
            this.setState({
                matchscreen:{user, id, picture, name}
            })
        }

        let swiped = (x, id, picture, name, likes) => {
            if(!x) {
                console.log(this.props.user)
                var user = this.props.user;
                user.dislikes.push(id);
                this.props.updateUser(user);

            } else {
                var user = this.props.user;
                var time = new Date();
                user.likes.push(id);
                // if(likes.indexOf(user.id) !== -1) {
                    user.matches.push({"id":id, 'messages':[], 'matchTime':time});
                    itsaMatch(user, id, picture, name)
                // }
                
                this.props.updateUser(user);
            }
        }



        const CustomAlertLeft = () => <span>NOPE</span>
        const CustomAlertRight = () => <span>LIKE</span>
        
        let done = () => {
            this.setState({
                data: null
            })
        }

        let theCards = <div> Loadi</div>
        
        console.log(this.props.user)
        console.log(this.state.data)
        if (this.state.data) {
            var profiles = this.state.data.filter((profile) => {
                if(this.props.user.settings.gender) {
                    return profile.gender === this.props.user.settings.gender
                }
                else {
                    return profile;
                }
            })
            theCards =
            <Cards onEnd={done} className='master-root' alertRight={<CustomAlertRight />} alertLeft={<CustomAlertLeft />}>
                {profiles.map((item) =>
                    <Card key={item._id} id={this.state.info === item.id ? "cardFull" : ''} onSwipeLeft={() => swiped(false, item._id)} onSwipeRight={() => swiped(true, item._id, item.pictures[0], item.name, item.likes)}>
                        <div className={this.state.info === item.id ? "anotherdiv":''}>
                            <div className={this.state.info === item.id ?"somanydivs":''}>
                            <div id="picWrap" className={this.state.info === item.id ? 'fullScreen' : ''}>
                                <ProfilePics pictures={item.pictures}/>
                                <div className="overlay" style={{ display: this.state.info !== item.id ? 'block' : 'none' }}>   
                                    <div className="overLayBottom">
                                            <h2>{`${item.name}`}<strong>{item.age ? ", " + item.age : ''}</strong></h2>
                                        <p>{item.job}</p>
                                        <span onClick={() => this.moreInfo(item.id)}>
                                            <i className="fas fa-info-circle"></i>
                                        </span>
                                    </div>

                                </div>
                            </div>
                            <Profile profile={item} info={this.state.info} close={(x) => this.moreInfo(x)}> </Profile>
                        </div>
                    </div>
                    </Card>
                )}
            </Cards>
        } else {
            theCards = <Loading />
        }

        var match = '';
        if(this.state.matchscreen) {
            match = <MatchScreen close={() => this.close()} data={this.state.matchscreen} />
        }
        return (
            <div className="swipe">
            {theCards}

            {match}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, { updateUser })(Swipe);




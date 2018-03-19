import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';
import axios from 'axios';
import Loading from './Loading.js'
import ProfilePics from './ProfilePics.js'
import Profile from './Profile.js'



class Swipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            info: false
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

    render() {
        let swiped = (e) => {
            console.log(e);
        }
        const CustomAlertLeft = () => <span>NOPE</span>
        const CustomAlertRight = () => <span>LIKE</span>
        
        let done = () => {
            this.setState({
                data: null
            })
        }

        let theCards = <div> Loadi</div>
        
        
        console.log(this.state.data)
        if (this.state.data) {
            theCards =
            <Cards onEnd={done} className='master-root' alertRight={<CustomAlertRight />} alertLeft={<CustomAlertLeft />}>
                {this.state.data.map((item) =>
                    <Card key={item._id} onSwipeLeft={() => swiped("nope")} onSwipeRight={() => swiped("yep")}>
                        <div className={this.state.info === item.id ? "anotherdiv":''}>
                            <div className={this.state.info === item.id ?"somanydivs":''}>
                            <div id="picWrap" className={this.state.info === item.id ? 'fullScreen' : ''}>
                                <ProfilePics pictures={item.pictures}/>
                                <div className="overlay" style={{ display: this.state.info !== item.id ? 'block' : 'none' }}>   
                                    <div className="overLayBottom">
                                        <h2>{`${item.name}, `}<strong>{item.age}</strong></h2>
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

        return (
            <div className="swipe">
            {theCards}
            </div>
        )
    }
}

export default Swipe



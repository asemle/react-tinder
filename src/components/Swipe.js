import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';
import axios from 'axios';
import Loading from './Loading.js'



class Swipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
        this.getCards = () => axios.get('/api/users/1').then(response => {
            console.log(response)
            this.setState({
                data: response
            })
        }).catch(err => {
            console.log(err);
        })

        
    }


    render() {
        let swiped = (e) => {
            console.log(e);
        }
        const CustomAlertLeft = () => <span>NOPE</span>
        const CustomAlertRight = () => <span>LIKE</span>
        
        let done = () => console.log("done")

        let theCards = <div> Loadi</div>

        

        if (this.state.data) {
            theCards = <div>
            <Cards onEnd={done} className='master-root' alertRight={<CustomAlertRight />} alertLeft={<CustomAlertLeft />}>
                {this.state.data.map((item) =>
                    <Card key={item.id} onSwipeLeft={() => swiped("nope")} onSwipeRight={() => swiped("yep")}>
                        <div className="picWrap">
                            <img className="proPic" src={item.pictures[0]} alt="" />
                            <div className="overlay">
                                <div className="overlayTop"></div>
                                <div className="overLayBottom">
                                    <h2>{`${item.name}, `}<strong>{item.age}</strong></h2>
                                    <p>{item.job}</p>
                                </div>
                            </div>
                        </div>

                    </Card>
                )}
            </Cards>
        </div>
        } else {
            this.getCards();
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



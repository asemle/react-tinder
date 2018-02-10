import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';

import data from "../characters.js"



class Swipe extends Component {
    
    render() {
        let swiped = (e) => {
            console.log(e);
        }
        const CustomAlertLeft = () => <span>NOPE</span>
        const CustomAlertRight = () => <span>LIKE</span>

        let done = () => console.log("done")
        return (
            <div>
                <Cards onEnd={done} className='master-root' alertRight={<CustomAlertRight />} alertLeft={<CustomAlertLeft />}>
                    {data.map((item) =>
                        <Card key={item.id} onSwipeLeft={() => swiped("nope")} onSwipeRight={() => swiped("yep")}>
                            <div className="picWrap">
                                <img className="proPic" src={item.pictures[0]} alt="" />
                                <div className="overlay">
                                    <div className="overlayTop">
                                    {}
                                    </div>
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
        );
    }
}
export default Swipe



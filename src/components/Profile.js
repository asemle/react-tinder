import React, { Component } from 'react';

import axios from 'axios';
import cog from "./../styles/icons/cog.png";
import pencil from "./../styles/icons/pencil.png";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        let myData = props.myProfile
        this.state = {
            me:myData
        }
    }
    componentWillMount() {
        
    }
    render() {
        var item = this.state.me;
        console.log(this.state.me)
        return (
            <div className="myProfile">
                <div className="circle">
                    <img src={item.pictures[1]} alt="fffgdsf" />
                </div>
                <h2>{`${item.name}, `}<strong>{item.age}</strong></h2>
                <p>{item.job}</p>
                <p>{item.school}</p>
                <div className="profileBottom">
                    <div className="leftBox">
                        <div className="iconBox"><img src={cog} alt="cog" /></div>
                        <h5>SETTINGS</h5>
                    </div>
                    <div>
                        <div className="iconBox"><img src={pencil} alt="pencil" /></div>
                        <h5>EDIT INFO</h5>
                    </div>
                </div>


            </div>
        )
    }
}
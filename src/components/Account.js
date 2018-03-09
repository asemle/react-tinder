import React, { Component } from 'react';
import Profile from './Profile';
import ProfilePics from './ProfilePics';

import axios from 'axios';
import cog from "./../styles/icons/cog.png";
import pencil from "./../styles/icons/pencil.png";

export default class Account extends Component {
    constructor(props) {
        super(props);
        let myData = props.myProfile
        this.state = {
            me:myData,
            pictureIndex: 0,
            cmpt: 'account'
        }
    }

    changeCmpt(x) {
        this.setState({
            cmpt: x
        })
    }
    componentWillMount() {
        
    }
    render() {
        var show;
        var item = this.state.me;
        console.log(this.state.cmpt)
        if(this.state.cmpt === 'account') {
            show = <div className="myAccount">
                <div className="circle" onClick={() => this.changeCmpt("profile")}>
                    <img src={item.pictures[this.state.pictureIndex]} alt="fffgdsf" />
                </div>
                <h2>{`${item.name}, `}<strong>{item.age}</strong></h2>
                <p>{item.job}</p>
                <p>{item.school}</p>
                <div className="accountBottom">
                    <div onClick={() => this.changeCmpt("settings")}className="leftBox">
                        <div className="iconBox"><img src={cog} alt="cog" /></div>
                        <h5>SETTINGS</h5>
                    </div>
                    <div onClick={() => this.changeCmpt("edit")}>
                        <div className="iconBox"><img src={pencil} alt="pencil" /></div>
                        <h5>EDIT INFO</h5>
                    </div>
                </div>


            </div>
        }
        else if(this.state.cmpt === "profile") {
            show = <div>
                        <div id="picWrap" className='fullScreen'>
                            <ProfilePics pictures={item.pictures} />
                        </div>
                        <Profile info={item.id} close={() => this.changeCmpt("account")}profile={item}></Profile>
                        <button onClick={() => this.changeCmpt("edit")}className="editInfo">EDIT INFO</button>
                    </div>
        }
        else if (this.state.cmpt === "edit") {
            show =  <div>
                        

                    </div>
        }


        
        console.log(this.state.me)
        return (
            <div className="account">
                {show}
            </div>
            
        )
    }
}
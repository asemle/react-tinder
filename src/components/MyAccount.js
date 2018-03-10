import React, { Component } from 'react';
import cog from "./../styles/icons/cog.png";
import pencil from "./../styles/icons/pencil.png";

export default class MyAccount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pictureIndex: 0
        }
    }
    render() {
        const item = this.props.item;
        return (
            <div className="myAccount">
                <div className="circle" onClick={() => this.props.change("profile")}>
                    <img src={item.pictures[this.state.pictureIndex]} alt="fffgdsf" />
                </div>
                <h2>{`${item.name}, `}<strong>{item.age}</strong></h2>
                <p>{item.job}</p>
                <p>{item.school}</p>
                <div className="accountBottom">
                    <div onClick={() => this.props.change("settings")} className="leftBox">
                        <div className="iconBox"><img src={cog} alt="cog" /></div>
                        <h5>SETTINGS</h5>
                    </div>
                    <div onClick={() => this.props.change("edit")}>
                        <div className="iconBox"><img src={pencil} alt="pencil" /></div>
                        <h5>EDIT INFO</h5>
                    </div>
                </div>
            </div>
        )
    }
}
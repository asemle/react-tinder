import React, { Component } from 'react';

export default class ProfilePics extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            pictures: props.pictures,
            index: 0
        }
        this.cycleRight = () => {
            var count = this.state.index + 1;
            if (this.state.index !== this.state.pictures.length) {
                this.setState({
                    index: count
                })
            }
            
            
        }
        this.cycleLeft = () => {
            console.log("sddssdds")
            var count = this.state.index - 1;
            if (this.state.index) {
                this.setState({
                    index: this.state.index - 1
                })
            }
        }
    }
    render() {
        
        return (
            <div>
                <div className="overlayTop">
                    <ul>
                        {this.state.pictures.map((element, i) => { return <li key={i} className={i === this.state.index ? "activePic" : ""}></li> })}
                    </ul>
                </div>
                <img className="proPic" src={this.state.pictures[this.state.index]} alt="" />
                <div className="leftButton" onClick={this.cycleLeft}></div>
                <div className="rightButton" onClick={this.cycleRight}></div>
            </div>
        )
    }
}
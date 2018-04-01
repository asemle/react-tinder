import React, { Component } from 'react';

export default class Loading extends Component {



    render() {
        return (
            <div className="loading">
                
                <div className="halo">
                </div>
                <div className="halo halo2">
                </div>
                <div className="halo halo3">
                </div>
                    <div className="circle">
                    <img src={this.props.picture} alt="" />
                    
                </div>
                
            </div>
        )
    }
}
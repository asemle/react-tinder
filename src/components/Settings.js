import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


import { getUser } from '../ducks/reducer.js';


class Settings extends Component {

    constructor(props) {
        super(props);
        var agerange = [0, 100],
            gender='',
            distance=100
        if(props.item.settings) {
            agerange = props.item.settings.agerange;
            gender = props.item.settings.gender;
            distance = props.item.settings.distance;
        } 
        
        this.state = {
            id: props.item.id,
            settings: props.item.settings,
            agerange: agerange,
            gender: gender,
            distance: distance
        }
    }
    handleChange(event, property, index) {
        console.log(property + " " + event.target.value)

        if(typeof index === 'number') {
            var agearr = this.state.agerange;
            agearr[index] = event.target.value;
            this.setState({
                agerange: agearr
            })
        } else {
        this.setState({

            [property]: event.target.value
        });
    }
    }
    



    render() {
        var getUserr = this.props.getUser

        console.log(this.state)
        function updateUser(state) {

            axios.post(`/api/user/settings/${state.id}`, {
                settings: {"agerange":state.agerange, "gender":state.gender, "distance": state.distance}
            }).then((res) => {
                getUserr();
            })
        }
        return (
            <div className="Edit">
                
                <header><span></span><span>Settings</span><span className="done" onClick={() => { updateUser(this.state); this.props.change("profile") }}>Done</span></header>

                <div className="settingsWrap">
                    <h2>DISCOVERY SETTINGS</h2>
                    <div>
                        <span className="inputTitle">Maximum Distance</span>
                        <span className="inputTitle sliderValue">{this.state.distance+"mi."}</span>
                        <input type="range" min="0" max="100" className="slider slider1" onChange={(e) => this.handleChange(e, 'distance')} value={this.state.distance} ></input>



                        <span className="inputTitle">Gender</span>
                        <div className="genderSelect">
                            <select name="gender" onChange={(e) => this.handleChange(e, 'gender')} value={this.state.gender}>
                            <option value="male">Men</option>
                            <option value="female">Women</option>
                            <option value="">Gender is a social construct</option>
                        </select>
                        </div>

                        <span className="inputTitle">Age Range</span>

                        <span className="inputTitle sliderValue">{`${this.state.agerange[0]} - ${this.state.agerange[1]}` }</span>

                        <input type="range" min={this.state.agerange[0]} max="100" className="slider" onChange={(e) => this.handleChange(e, 'agerange', 1)} value={this.state.agerange[1]}/>
                        <input type="range" min="18" max={this.state.agerange[1]}  className="slider slider2" onChange={(e) => this.handleChange(e, 'agerange', 0)} value={this.state.agerange[0]}
                        ></input>
                    </div>
                    
                    
            
                   

                    
                </div>

            </div>

        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

let actions = {
    // updatePictures,
    getUser
}

export default connect(mapStateToProps, actions)(Settings);
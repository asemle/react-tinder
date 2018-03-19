import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updatePictures, updateName, updateAge, updateAbout, updateWork, updateSchool, updateGender } from '../ducks/reducer.js';

class Edit extends Component{

    constructor() {
        super();
        this.state = {
            // pictures: [],
            name: '',
            age: '',
            about: "",
            work: '',
            school: '',
            gender: ''
        }
    }
    handleChange(event, property) {
        this.setState({
            [property]:event.target.value
        });
    }

    render() {
        console.log(this.state)
        const item = this.props.item;
        return (
            <div className="Edit">
                <header><span></span><span>Edit Info</span><span className="done" onClick={() => this.props.change("profile")}>Done</span></header>

                <div className="editWrap">
                    <div className="picGrid">
                        <div className="item-a">
                            <img src={item.pictures[0]} alt=""/>
                            <span className={item.pictures[0] ? "picButton": "removePic"}><i className="fas fa-plus-circle"></i><i className="fas fa-times"></i></span>
                        </div>
                        <div className="item-b">
                            <img src={item.pictures[1]} alt=""/>
                            <span className={item.pictures[1] ? "picButton": "removePic"}><i className="fas fa-plus-circle"></i><i className="fas fa-times"></i></span>
                        </div>
                        <div className="item-c">
                            <img src={item.pictures[2]} alt=""/>
                            <span className={item.pictures[2] ? "picButton": "removePic"}><i className="fas fa-plus-circle"></i><i className="fas fa-times"></i></span>
                        </div>
                        <div className="item-d">
                            <img src={item.pictures[3]} alt=""/>
                            <span className={item.pictures[3] ? "picButton": "removePic"}><i className="fas fa-plus-circle"></i><i className="fas fa-times"></i></span>
                        </div>
                        <div className="item-e">
                            <img src={item.pictures[4]} alt=""/>
                            <span className={item.pictures[4] ? "picButton": "removePic"}><i className="fas fa-plus-circle"></i><i className="fas fa-times"></i></span>
                        </div>
                        <div className="item-f">
                            <img src={item.pictures[5]} alt=""/>
                            <span className={item.pictures[5] ? "picButton": "removePic"}><i className="fas fa-plus-circle"></i><i className="fas fa-times"></i></span>
                        </div>
                    </div>
                    <span className="inputTitle">NAME</span>
                    <input type="text" onChange={(e) => this.handleChange(e, 'name')} value={this.state.name} ></input><i className="fas fa-angle-right"></i>
                    <span className="inputTitle">AGE</span>
                    <input type="number" min="18" max="100" onChange={(e) => this.handleChange(e, 'age')} value={this.state.age}    ></input><i className="fas fa-angle-right"></i>
                    <span className="inputTitle">ABOUT ME</span>
                    <textarea onChange={(e) => this.handleChange(e, 'about')} value={this.state.about} name="about" maxLength="500" id="" cols="30" rows="7"></textarea>
                    <div className="wordCount">{500 - this.state.about.length}</div>
                    <span className="inputTitle">CURRENT WORK</span>
                    <input type="text" name="" id="" onChange={(e) => this.handleChange(e, 'work')} value={this.state.work}></input><i className="fas fa-angle-right"></i>
                    <span className="inputTitle">SCHOOL</span>
                    <input type="text" onChange={(e) => this.handleChange(e, 'school')} value={this.state.school} ></input><i className="fas fa-angle-right"></i>

               <span className="inputTitle">GENDER</span>
                    <input onChange={(e) => this.handleChange(e, 'gender')} value={this.state.gender} type="text" name="" id=""></input><i className="fas fa-angle-right"></i>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { 
            // pictures, 
            name,
            age,
            about,
            work,
            school,
            gender } = state;
    return {
        // pictures,
        name,
        age,
        about,
        work,
        school,
        gender
    }
}

let actions = {
        // updatePictures,
        updateName,
        updateAge,
        updateAbout,
        updateWork,
        updateSchool,
        updateGender
}

export default connect(mapStateToProps, actions)(Edit);
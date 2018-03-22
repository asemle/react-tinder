import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import PicturePopup from './PicturePopup.js';

import { getUser } from '../ducks/reducer.js';


class Edit extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id: props.item.id,
            pictures: props.item.pictures,
            name: props.item.name,
            age: props.item.age,
            about: props.item.about,
            work: props.item.work,
            school: props.item.school,
            gender: props.item.gender,
            showpopup: false
        }
    }
    handleChange(event, property) {
        this.setState({
            [property]:event.target.value
        });
    }
    changePic(x) {
        var newPics;
        if(typeof x === "number") {
            newPics = this.state.pictures;
            newPics.splice(x, 1)
            this.setState({
                pictures: newPics,
                showpopup: false
            })
        } else {
            newPics = this.state.pictures;
            newPics.push(x)
            this.setState({
                pictures: newPics,
                showpopup: false
            })
        }
    }
    openPopup(index) {
        if(this.state.pictures[index]) {
            this.setState({
                showpopup: index,
            })
        } else {
            this.setState({
                showpopup: true,
            })
        }
    }
    closePopup() {
        this.setState({
            showpopup: false
        })
    }


    render() {
        var getUserr = this.props.getUser

        console.log(this.state)
        function updateUser(state) {
            axios.post(`/api/user/${state.id}`, {
                pictures: state.pictures,
                name: state.name,
                age: state.age,
                about: state.about,
                work: state.work,
                school: state.school,
                gender: state.gender}).then((res) => {
                getUserr();
            })
        }
        return (
            <div className="Edit">
            
                <header><span></span><span>Edit Info</span><span className="done" onClick={() => { updateUser(this.state); this.props.change("profile")}}>Done</span></header>

                <div className="editWrap">
                    <div className="picGrid">
                        <div className="item-a">
                            <img src={this.state.pictures[0]} alt=""/>
                            <span onClick={() => this.openPopup(0)}className={this.state.pictures[0] ? "picButton": "removePic"}><i className="fas fa-plus-circle"></i><i className="fas fa-times"></i></span>
                        </div>
                        <div className="item-b">
                            <img src={this.state.pictures[1]} alt=""/>
                            <span onClick={() => this.openPopup(1)}className={this.state.pictures[1] ? "picButton": "removePic"}><i className="fas fa-plus-circle"></i><i className="fas fa-times"></i></span>
                        </div>
                        <div className="item-c">
                            <img src={this.state.pictures[2]} alt=""/>
                            <span onClick={() => this.openPopup(2)}className={this.state.pictures[2] ? "picButton": "removePic"}><i className="fas fa-plus-circle"></i><i className="fas fa-times"></i></span>
                        </div>
                        <div className="item-d">
                            <img src={this.state.pictures[3]} alt=""/>
                            <span onClick={() => this.openPopup(3)}className={this.state.pictures[3] ? "picButton": "removePic"}><i className="fas fa-plus-circle"></i><i className="fas fa-times"></i></span>
                        </div>
                        <div className="item-e">
                            <img src={this.state.pictures[4]} alt=""/>
                            <span onClick={() => this.openPopup(4)}className={this.state.pictures[4] ? "picButton": "removePic"}><i className="fas fa-plus-circle"></i><i className="fas fa-times"></i></span>
                        </div>
                        <div className="item-f">
                            <img src={this.state.pictures[5]} alt=""/>
                            <span onClick={() => this.openPopup(5)}className={this.state.pictures[5] ? "picButton": "removePic"}><i className="fas fa-plus-circle"></i><i className="fas fa-times"></i></span>
                        </div>
                    </div>
                    <span className="inputTitle">NAME</span>
                    <input type="text" onChange={(e) => this.handleChange(e, 'name')} value={this.state.name} ></input><i className="fas fa-angle-right"></i>
                    <span className="inputTitle">AGE</span>
                    <input type="number" min="18" max="100" onChange={(e) => this.handleChange(e, 'age')} value={parseInt(this.state.age)}></input><i className="fas fa-angle-right"></i>
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

                <PicturePopup pic={this.state.showpopup} changepic={(x) =>this.changePic(x)}close={() => this.closePopup()}/>
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

export default connect(mapStateToProps, actions)(Edit);
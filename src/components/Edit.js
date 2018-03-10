import React, { Component } from 'react';

export default class Edit extends Component{


    render() {
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
                    <span className="inputTitle">ABOUT ME</span>
                    <textarea name="about" id="" cols="30" rows="5"></textarea>
                    <div className="wordCount">444</div>
                    <span className="inputTitle">CURRENT WORK</span>
                    <input type="text" name="" id=""></input><i className="fas fa-angle-right"></i>
                    <span className="inputTitle">SCHOOL</span>
                    <input type="text"></input><i className="fas fa-angle-right"></i>

               <span className="inputTitle">GENDER</span>
                    <input type="text" name="" id=""></input><i className="fas fa-angle-right"></i>
                </div>
            </div>
        )
    }
}
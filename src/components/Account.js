import React, { Component } from 'react';
import axios from 'axios';

import { getUser } from '../ducks/reducer.js';
import { connect } from 'react-redux';

import MyProfile from './MyProfile';
import MyAccount from './MyAccount';
import Edit from './Edit';


 class Account extends Component {
    constructor(props) {
        super(props);
        // let myData = props.myProfile
        this.state = {
            cmpt: 'account',
            user: this.props.user
        }
    }


    changeCmpt(x) {
        this.setState({
            cmpt: x
        })
    }
    render() {
        var show;
        var item = this.props.user;
        console.log(item)
        console.log(this.state.cmpt)
        if(this.state.cmpt === 'account') {
            show = <MyAccount change={(x) => this.changeCmpt(x)} item={item}/>
        }
        else if(this.state.cmpt === "profile") {
            show = <MyProfile change={(x) => this.changeCmpt(x)} item={item}/>
        }
        else if (this.state.cmpt === "edit") {
            show = <Edit item={item} change={(x) => this.changeCmpt(x)} item={item}/>
        }


        return (
            <div className="account">
                {show}
            </div>
            
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { getUser })(Account);
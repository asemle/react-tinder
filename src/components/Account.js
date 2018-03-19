import React, { Component } from 'react';


import MyProfile from './MyProfile';
import MyAccount from './MyAccount';
import Edit from './Edit'



export default class Account extends Component {
    constructor(props) {
        super(props);
        let myData = props.myProfile
        this.state = {
            me:myData,
            cmpt: 'account'
        }
    }

    changeCmpt(x) {
        this.setState({
            cmpt: x
        })
    }
    render() {
        var show;
        var item = this.state.me;
        console.log(this.state.cmpt)
        if(this.state.cmpt === 'account') {
            show = <MyAccount change={(x) => this.changeCmpt(x)} item={item}/>
            
            

        }
        else if(this.state.cmpt === "profile") {
            show = <MyProfile change={(x) => this.changeCmpt(x)}item={item}/>
        }
        else if (this.state.cmpt === "edit") {
            show = <Edit item={item} change={(x) => this.changeCmpt(x)}/>
        }


        
        console.log(this.state.me)
        return (
            <div className="account">
                {show}
            </div>
            
        )
    }
}
import React, {Component} from 'react';
import axios from 'axios';

export default class Conversation extends Component {
    constructor() {
        super() 

        this.state = {
            messages:[]
        }
    }

    componentDidMount() {
        axios.get()

    }

    render() {
        console.log("floofah")

        return (
            <div className="convo">
                <h4>FOOOODODONNF</h4>
            </div>
        )
    }
}
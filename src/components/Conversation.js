import React, {Component} from 'react';
import axios from 'axios';
import ConvoNav from './ConvoNav';


export default class Conversation extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            match: [],
            messages:[],
            id:props.match.params.id

        }
    }

    componentDidMount() {
        axios.get(`/api/user/${this.state.id}`)
        .then(res => {
            this.setState({
                match: res.data
            })
            console.log(res.data)
        })

    }

    render() {

        return (
            <div className="convo">
                <ConvoNav match={this.state.match}/>
            </div>
        )
    }
}
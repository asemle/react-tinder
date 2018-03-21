import React, {Component} from 'react';


export default class PicturePopup extends Component {
    constructor() {
        super();

        this.state = {
            picvalue: ''
        }
    }

    changePicValue(x){
        this.setState({
            picvalue: x
        })
    }   

    render() {
        var innerDiv
        if(this.props.pic) {
            innerDiv = <button onClick={() => this.props.changepic(this.props.pic)}>DELETE</button>
        } else {
            innerDiv = <input onChange={(e) => this.changePicValue(e.target.value)} placeholder="PICTURE URL"/>
        }
        return (
            <div id="PicturePopup" className={this.props.pic !== false ? "open": ""}>
                <div className="">{innerDiv}</div>
                <div className="cancel">
                    <button onClick={this.props.pic ? () => this.props.close() : () => {this.props.changepic(this.state.picvalue); this.props.close()}}
                    >{this.props.pic ? "CANCEL" : "POST"}</button>
                </div>
            </div>
        )
    }
}
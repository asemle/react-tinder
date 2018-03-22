import React, {Component} from 'react';


export default class PicturePopup extends Component {
    constructor() {
        super();

        this.state = {
            picvalue: ''
        }
    }

    changePicValue(x){
        if(x) {
            this.setState({
               picvalue: x
         })
        } else {
            this.setState({
                picvalue: ''
            })
        }
    }   

    render() {
        console.log(this.state.picvalue)
        var innerDiv
        if(typeof this.props.pic === "number") {
            innerDiv = <button onClick={() => this.props.changepic(this.props.pic)}>DELETE</button>
        } else {
            innerDiv = <input value={this.state.picvalue} onChange={(e) => this.changePicValue(e.target.value)} placeholder="PICTURE URL"/>
        }
        return (
            <div id="PicturePopup" className={this.props.pic !== false ? "open": ""}>
                <div className="">{innerDiv}</div>
                <div className="cancel">
                    <button onClick={typeof this.props.pic === "number" ? () => this.props.close() : () => { this.changePicValue(); this.props.changepic(this.state.picvalue)}}
                    >{typeof this.props.pic === "number" ? "CANCEL" : "POST"}</button>
                </div>
            </div>
        )
    }
}
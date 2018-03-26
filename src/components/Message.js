import React, {Component} from 'react';

export default function Message(props) {
    return (
        <div className="message" style={props.mine ? { textAlign: "right", paddingLeft: "100px" } : { textAlign: "left", paddingRight: "100px" }}>

            <div style={props.mine ? { borderBottomRightRadius: "4px", borderTopRightRadius: "4px", borderBottomLeftRadius: "16px", borderTopLeftRadius: "16px" } : { borderBottomRightRadius: "16px", borderTopRightRadius: "16px", borderBottomLeftRadius: "4px", borderTopLeftRadius: "4px"}}>
                <span>
                    {props.content}
                </span>
            </div>
        
        </div>
    )

    
}

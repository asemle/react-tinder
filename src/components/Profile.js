import React, { Component } from 'react';

export default class Profile extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        var pro = this.props.profile;
        return (
            <div id="profile" className={this.props.info === pro.id ? 'open' : ''}>
                <div className="profileHeader">
                    <div className="profileName">
                        <h2>{`${pro.name}`}<strong>{pro.age ? ", " + pro.age : ''}</strong></h2>
                    </div>
                    <div className="profileJob" style={{ display: pro.job ? 'block' : 'none' }}>
                        <h4><i className="fas fa-briefcase"></i>{`${pro.job}`}</h4>
                    </div>
                    <div className="profileSchool" style={{ display: pro.school ? 'block' : 'none' }}>
                        <h4><i className="fas fa-graduation-cap"></i>{`${pro.school}`}</h4>
                    </div>
                    <div style={{ display: pro.distance ? 'block' : 'none' }} className="profileDistance">
                        <h4><i className="fas fa-map-marker-alt"></i>{`${pro.school}`}</h4>
                    </div>
                </div>
                <div className="profileDescription">
                    <p>{pro.about}</p>
                </div>
                <div className="profileReport">
                    <p>{`report ${pro.name}`}</p>
                </div>
                <div className="closeCircle" onClick={() => this.props.close(null)}><img src="https://tinder.com/static/build/04da95cfb58bc3e5669617b7c18df6d6.svg" alt="closecircle" /></div>
            </div>
        )
    }
}
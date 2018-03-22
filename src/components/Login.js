import React, { Component } from 'react';
// import logo from './communityBank.svg';

export default class Login extends Component {
    render() {
        return (
            <div className='login'>
                <div className="logoBox">
                    <img src="https://tinder.com/static/build/8f0b7bbb809ef942400994ee3414d06f.svg" alt="tinder" />

                    <div className="logoHeader">
                            <h1>Swipe</h1>
                            <h1>Match</h1>
                            <h1>Chat</h1>
                    </div>

                    <div className="logoText">Tinder</div>

                </div>
                <div className="authBox">
                    <div className="authButton">
                        <a className="authLink" href={process.env.REACT_APP_LOGIN}>Log in with facebook</a>
                    </div>
                </div>
                <div className="legalStuff">
                    <span>We don't post anything to Facebook.</span>
                    <div>
                        <span>By signing in, you agree with our &nbsp; 
                                 <a href="https://www.gotinder.com/terms?locale=en" target="_blank" rel="noopener noreferrer">
                                <span>Terms of Service</span>
                            </a> &amp; &nbsp;
                            <a href="https://www.gotinder.com/privacy?locale=en" target="_blank" rel="noopener noreferrer">
                                <span>Privacy Policy</span>
                            </a>.
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import Profile from './Profile';
import ProfilePics from './ProfilePics';

export default function MyProfile(props) {

        const item = props.item;
        return (
            <div>
                <div id="picWrap" className='fullScreen'>
                    <ProfilePics pictures={item.pictures} />
                </div>
                <Profile info={item.id} close={() => props.change("account")} profile={item}></Profile>
                <button onClick={() => props.change("edit")} className="editInfo">EDIT INFO</button>
            </div>
        )
}

import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import avatar from '../images/avatars.PNG';
import MainIcons from './MainIcons';

export default function SideContent ({ props }) {
    return (
        <div className='first-content'>
            <div className='header'>
                <div className="inner">
                    <img className="image_avatar" src={avatar} alt="My_Profile_Image" />
                    <p className="intro"><strong>I'm Aurelien Essome</strong>, —a mobile software developer, and a React native enthusiast.</p>
                </div>
                <MainIcons container='icon-container' />
            </div>
        </div>
    )
}
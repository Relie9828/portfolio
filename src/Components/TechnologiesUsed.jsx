import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import ExpoLogo from '../images/expo-logo.png'

export default function TechnologiesUsed ({ props }) {

    const IconContainer = ({ icon }) => {
        return (
            <i id='icons' className={ icon } />
        )
    };

    const ExpoContainer = ({ icon }) => {
        return (
            <img className='expo-logo' src={icon} alt='expo-logo-black' />
        )
    };

    return (
        <div className='tech-container'>
            <p className='tech-title'>Technologies</p>
            <div className="icons-row">
                <IconContainer icon="devicon-vscode-plain colored" />
                <IconContainer icon="devicon-github-original colored" />
                <IconContainer icon="devicon-git-plain colored" />
                <IconContainer icon="devicon-html5-plain-wordmark colored" />
                <IconContainer icon="devicon-css3-plain-wordmark colored" />
                <IconContainer icon="devicon-javascript-plain colored" />
                <IconContainer icon="devicon-nodejs-plain colored" />
                <IconContainer icon="devicon-express-original" />
                <IconContainer icon="devicon-firebase-plain colored" />
                <IconContainer icon="devicon-react-original colored" />
                <ExpoContainer icon={ExpoLogo} />
                <IconContainer icon="devicon-androidstudio-plain colored" />
                <IconContainer icon="devicon-android-plain colored" />
                <IconContainer icon="devicon-xcode-plain colored" />
                <IconContainer icon="devicon-apple-original colored" />
                <IconContainer icon="devicon-xd-plain colored" />
            </div>
        </div>
    )
}
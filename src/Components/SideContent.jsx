import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import { FaStackOverflow, FaLinkedin } from 'react-icons/fa';
import { DiGithubBadge } from "react-icons/di";
import avatar from '../images/avatars.PNG';

export default function SideContent ({ props }) {
    return (
        <div className='first-content'>
            <div className='header'>
                <div className="inner">
                    <img className="image_avatar" src={avatar} alt="My_Profile_Image" />
                    <p className="intro"><strong>I'm Aurelien Essome</strong>, a mobile software developer, and a React native enthusiast.</p>
                </div>
                
                <div className='icon-container'>
                    <div className='icon-content'>
                        <div className='icon-1'>
                            <FaLinkedin size={25} color='rgba(255, 254, 255, 0.5)' />
                        </div>
                        <div className='icon-1'>
                            <DiGithubBadge size={30} color='rgba(255, 254, 255, 0.5)' />
                        </div>
                        <div className='icon-1'>
                            <FaStackOverflow size={25} color='rgba(255, 254, 255, 0.5)' />
                        </div>
                    </div>
                    <div class="footer-details">
                        <li className='copyright'>All rights &copy; Reserved 2021</li>
                        <li className='author'>Design by Aurelien Essome</li>
                    </div>
                </div>
            </div>
        </div>
    )
}
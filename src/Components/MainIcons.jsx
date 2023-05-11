import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import { FaStackOverflow, FaLinkedin } from 'react-icons/fa';
import { DiGithubBadge } from "react-icons/di";

export default function MainIcons ({ container }) {
    return (
        <div className={container}>
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
                <li className='copyright'>All rights &copy; Reserved 2023</li>
                <li className='author'>Design by Aurelien Essome</li>
            </div>
        </div>
    )
}

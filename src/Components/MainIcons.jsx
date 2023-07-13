import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import { FaStackOverflow, FaLinkedin } from 'react-icons/fa';
import { DiGithubBadge } from "react-icons/di";

export default function MainIcons ({ container }) {
    return (
        <div className={container}>
            <div className='icon-content'>
                <a className='icon-1' href='https://www.linkedin.com/in/aurelien-essome-1117941b3/' target='_blank'>
                    <FaLinkedin size={25} color='rgba(255, 254, 255, 0.5)' />
                </a>

                <a className='icon-1' href='https://github.com/Relie9828' target='_blank'>
                    <DiGithubBadge size={30} color='rgba(255, 254, 255, 0.5)' />
                </a>
                
                <a className='icon-1' href='https://stackoverflow.com/users/16262518/relie-essom' target='_blank'>
                    <FaStackOverflow size={25} color='rgba(255, 254, 255, 0.5)' />
                </a>
            </div>

            <div class="footer-details">
                <li className='copyright'>All rights &copy; Reserved {(new Date().getFullYear())}</li>

                <li className='author'>Designed by Aurelien Essome</li>
            </div>
        </div>
    )
}

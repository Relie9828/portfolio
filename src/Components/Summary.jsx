import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import RecentWork from './RecentWork';

export default function Summary ({ props }) {
    return (
        <div className='summary-container'>
            <header className="summary-title-box">
                <p className='summary-title'>Summary</p>
            </header>
            <div className='summary-content'>
                <p className='description'>As a native developer, I present simple and beautifully 
                minimalistic User Interfaces to your application&mdash;An application that is appealing 
                to the end user, which will not take away from the experience that makes your app fun and unique.</p>
                <a href='#'><button className='action'>view content</button></a>
            </div>
            <RecentWork />
        </div>
    )
}
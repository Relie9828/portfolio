import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import RecentWork from './RecentWork';
import SendMessage from './SendMessage';

export default function Summary ({ props }) {
    return (
        <div className='main-content'>
            <div className='second-content'>
                <div className='contents'>
                    <div className='summary-container'>
                        <div className='summary-content'>
                            <header className="summary-title-box">
                                <p className='summary-title'>Summary</p>
                            </header>
                            <p className='description'>As a native developer, I present simple and beautifully 
                            minimalistic User Interfaces to your application&mdash;An application that is appealing 
                            to the end user, which will not take away from the experience that makes your app fun and unique.</p>
                            <a href='#'><button className='action'>view content</button></a>
                        </div>
                        <RecentWork />
                        <SendMessage />
                    </div>
                </div>
            </div>
        </div>
    )
}
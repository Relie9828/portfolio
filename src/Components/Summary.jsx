import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import TechnologiesUsed from './TechnologiesUsed';
import SendMessage from './SendMessage';
import RecentWork from './RecentWork';

export default function Summary ({ toggleModal, goToNext }) {
    return (
        <div className='main-content'>
            <div className='second-content'>
                <div className='contents'>
                    <div className='summary-container'>
                        <div className='summary-content'>
                            <header className="summary-title-box">
                                <p className='summary-title'>Summary</p>
                            </header>
                            <p className='description'>As a UI/UX developer, I present simple and beautifully 
                            minimalistic User Interfaces to your application&mdash;An application that is appealing 
                            to the end user, which will not take away from the experience that makes your app fun and unique.</p>
                            <a href='#'><button className='action'>My Resume</button></a>
                        </div>
                        

                        <RecentWork toggleModal={toggleModal} />
                        <SendMessage />
                        <TechnologiesUsed />
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import TechnologiesUsed from './TechnologiesUsed';
import SendMessage from './SendMessage';
import RecentWork from './RecentWork';

export default function Summary ({ toggleModal, toggleResume }) {
    return (
        <div className='main-content'>
            <div className='second-content'>
                <div className='contents'>
                    <div className='summary-container'>
                        <div className='summary-content'>
                            <header className="summary-title-box">
                                <p className='summary-title'>Summary</p>
                            </header>
                            <p className='description'>As a seasoned UI/UX Developer, I strive to create clean, aesthetically pleasing, and minimalistic User Interfaces that effortlessly complement your application. My design philosophy centers around enhancing the user experience, augmenting your application's unique qualities, and ensuring an enjoyable, seamless interaction. By intricately weaving together form and function, my designs are not merely attractive—they enhance and uplift your application's core features, delivering an immersive, user-centered journey that is as engaging as it is intuitive.</p>
                            <a href='#'>
                                <button className='action' onClick={toggleResume}>
                                    My Resume
                                </button>
                            </a>
                        </div>
                        

                        <RecentWork toggleModal={toggleModal} />
                        <TechnologiesUsed />
                        <SendMessage />
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import './App.css';
import Summary from './Components/Summary';
import SideContent from './Components/SideContent';

export default function App ({ props }) {
    return (
        <div className='body'>
            <div className='first-content'>
                <SideContent />
            </div>

            <div className='main-content'>
                <div className='second-content'>
                    <div className='contents'>
                        <Summary />
                    </div>
                </div>
            </div>
        </div>
    )
}
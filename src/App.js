import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import './App.css';
import Summary from './Components/Summary';
import SideContent from './Components/SideContent';
import Footer from './Components/Footer';

export default function App ({ props }) {
    return (
        <div className='body'>
            <SideContent />
            <Summary />
            <Footer />
        </div>
    )
}
import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import './App.css';
import Summary from './Components/Summary';
import SideContent from './Components/SideContent';
import Footer from './Components/Footer';
import ImageModal from './Components/ImageModal';

export default function App ({ props }) {

    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(!showModal)
    }
    
    return (
        <div className='body'>
            {showModal ? <ImageModal openModal={openModal} /> : null }
            <SideContent />
            <Summary openModal={openModal} />
            <Footer />
        </div>
    )
}
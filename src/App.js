import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import './App.css';
import Summary from './Components/Summary';
import SideContent from './Components/SideContent';
import Footer from './Components/Footer';
import ImageModal from './Components/ImageModal';

export default function App ({ props }) {

    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const showNext = () => {
        console.log('right')
    }

    const showPrevious = () => {
        console.log('left')
    }
    
    return (
        <div className='body'>
            {showModal ? 
            <ImageModal toggleModal={toggleModal}
            showPrevious={showPrevious}
            showNext={showNext} /> 
            : 
            null }
            <SideContent />
            <Summary toggleModal={toggleModal} />
            <Footer />
        </div>
    )
}
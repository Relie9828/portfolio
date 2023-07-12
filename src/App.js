import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import SideContent from './Components/SideContent';
import ImageModal from './Components/ImageModal';
import Summary from './Components/Summary';
import Footer from './Components/Footer';
import './App.css';

export default function App ({ props }) {

    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => {
        setShowModal(!showModal)
    };

    const showNext = () => {
        console.log('show next')
    };

    const showPrevious = () => {
        console.log('show previous')
    };

    const docs = [
        { uri: require("./assets/Fomo_Social_Pitch_Deck.pdf") }, // Local File
    ];
    
    return (
        <div className='body'>
            <div className='pdf'>
                <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} config={{
                    header: {
                        disableHeader: true,
                        disableFileName: true,
                        retainURLParams: true,
                    },
                    pdfZoom: {
                        defaultZoom: .90, // 1 as default,
                        zoomJump: 0.1, // 0.1 as default,
                    },
                    pdfVerticalScrollByDefault: true,
                }} />
            </div>
            {showModal && <ImageModal toggleModal={toggleModal}
            showPrevious={showPrevious} showNext={showNext} />}
            <SideContent />
            <Summary toggleModal={toggleModal} />
            <Footer />
        </div>
    )
}
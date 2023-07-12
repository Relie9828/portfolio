import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import SideContent from './Components/SideContent';
import ImageModal from './Components/ImageModal';
import Summary from './Components/Summary';
import Footer from './Components/Footer';
import './App.css';

export default function App ({ props }) {

    const [selectedDescription, setSelectedDescription] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showResume, setShowResume] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = (image, description, status) => {
        setShowModal(!showModal);
        setSelectedImage(image);
        setSelectedStatus(status);
        setSelectedDescription(description);
    };

    const toggleResume = () => {
        setShowResume(!showResume)
    };

    const showNext = () => {
        console.log('show next')
    };

    const showPrevious = () => {
        console.log('show previous')
    };

    const docs = [
        { uri: require("./assets/deck.pdf") }, // Local File
    ];
    
    return (
        <div className='body'>
            {showResume &&
                <div className='pdf'>
                    <DocViewer documents={docs} config={{
                        header: {
                            disableHeader: true,
                            disableFileName: true,
                            retainURLParams: true,
                        },
                        pdfZoom: {
                            defaultZoom: 1, // 1 as default,
                            zoomJump: 0.1, // 0.1 as default,
                        },
                        pdfVerticalScrollByDefault: true,
                    }} 
                    pluginRenderers={DocViewerRenderers}/>

                    <button className='close-resume' onClick={toggleResume}>
                        CLOSE
                    </button>
                </div>
            }

            {showModal && <ImageModal toggleModal={toggleModal} selectedImage={selectedImage} selectedDescription={selectedDescription} selectedStatus={selectedStatus} showPrevious={showPrevious} showNext={showNext} />}
            <SideContent />
            <Summary toggleModal={toggleModal} toggleResume={toggleResume} />
            <Footer />
        </div>
    )
}
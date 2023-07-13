import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import { IoIosArrowForward, IoIosArrowBack, IoIosClose } from "react-icons/io";
import { data } from '../assets/data';

export default function ImageModal ({ toggleModal, showNext, showPrevious, selectedImage, selectedDescription, selectedStatus }) {
    return (
        <div className='modal-container'>
            <div onClick={toggleModal} className='modal-overlay' />
                <div className='modal-top-content'>
                    <div className='modal-content'>
                        <div className='modal-image-container'>
                            <img className='modal-image' src={selectedImage} alt="" />

                            <div className='modal-image-overlay'>
                                <div onClick={showPrevious} className='left-arrow'>
                                    <IoIosArrowBack id='left' size={35} color='white' />
                                </div>

                                <div onClick={showNext} className='right-arrow'>
                                    <div className='close' onClick={toggleModal}>
                                        <IoIosClose id='close' size={35} color='white' />
                                    </div>

                                    <IoIosArrowForward id='right' size={35} color='white' />
                                    
                                    <div className='close'>
                                        <IoIosClose id='close' size={35} color='transparent' />
                                    </div>
                                </div>
                            </div>

                            <div className='modal-image-text-container'>
                                <text className='modal-image-text'>
                                    {selectedDescription}
                                </text>

                                {/* <div onClick={() => alert('clicked')} className='modal-image-button'>
                                    View
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import { IoIosArrowForward, IoIosArrowBack, IoIosClose } from "react-icons/io";

export default function ImageModal ({ toggleModal, showNext, showPrevious }) {
    return (
        <div className='modal-container'>
            <div onClick={toggleModal} className='modal-overlay' />
            <div className='modal-top-content'>
                <div className='modal-content'>
                    <div className='modal-image-container'>
                        <image className='modal-image' alt='modal image' />
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
                            <text className='modal-image-text'>image text</text>
                            <div onClick={() => alert('clicked')} className='modal-image-button'>
                                View
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
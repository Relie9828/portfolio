import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import { IoIosArrowForward, IoIosArrowBack, IoIosClose } from "react-icons/io";

export default function ImageModal ({ openModal, goToNext }) {
    return (
        <div className='modal-container'>

                <div onClick={openModal} className='modal-overlay' />
            <div className='modal-top-content'>
                <div className='close-modal'>
                    <IoIosClose className='close-modal-btn' color='white' size={35} onClick={openModal} />
                </div>
                <div className='modal-content'>
                    <div className='modal-image-container'>
                        <image className='modal-image' alt='modal image' />
                        <div className='modal-image-overlay'>
                            <div onClick={() => alert('left-arrow')} className='left-arrow'>
                                <IoIosArrowBack id='left' size={35} color='white' />
                            </div>
                            <div onClick={goToNext} className='right-arrow'>
                                <IoIosArrowForward id='right' size={35} color='white' />
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
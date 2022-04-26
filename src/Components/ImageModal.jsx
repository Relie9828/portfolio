import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';

export default function ImageModal ({ openModal }) {
    return (
        <div className='modal-container'>
            <div className='close-modal'>
                <button onClick={openModal} className='close-modal-btn'>
                    close
                </button>
            </div>
            <div className='modal-content'>
                <div className='left-arrow'>arrow</div>
                <div className='modal-image-container'>
                    <div className='modal-image-container'>
                        <div className='modal-image-content'>image</div>
                        <div className='modal-image-text'>
                            text
                            <div className='modal-image-button'>
                                button
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-arrow'>arrow</div>
            </div>
        </div>
    )
}
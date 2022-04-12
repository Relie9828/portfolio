import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import image1 from '../images/thumbs/01.jpg';
import image2 from '../images/thumbs/02.jpg';
import image3 from '../images/thumbs/03.jpg';
import image4 from '../images/thumbs/04.jpg';
import image5 from '../images/thumbs/05.jpg';
import image6 from '../images/thumbs/06.jpg';
import '../App.css';

export default function RecentWork ({ props }) {
    return (
        <div className='experience-container'>
            <p className='experience-title'>Recent Work</p>

            <div className="work-items-row">
                <div className="work-item">
                    <img className="thumbnail" src={image1} alt="" />
                    <div className='overlay'>
                        <button className='overlay-btn'>view</button>
                    </div>
                    <p className='work-title'>Washe</p>
                    <p className='work-description'>Currently innactive on the apple & google play store.</p>
                </div>

                <div className="work-item">
                    <img className="thumbnail" src={image2} alt="" />
                    <div className='overlay'>
                        <button className='overlay-btn'>view</button>
                    </div>
                    <p className='work-title'>F.O.M.O</p>
                    <p className='work-description'>Currently innactive on the apple & google play store.</p>
                </div>

                <div className="work-item">
                    <img className="thumbnail" src={image3} alt="" />
                    <div className='overlay'>
                        <button className='overlay-btn'>view</button>
                    </div>
                    <p className='work-title'>Ride</p>
                    <p className='work-description'>Currently innactive on the apple & google play store.</p>
                </div>

                <div className="work-item">
                    <img className="thumbnail" src={image4} alt="" />
                    <div className='overlay'>
                        <button className='overlay-btn'>view</button>
                    </div>
                    <p className='work-title'>Weather app</p>
                    <p className='work-description'>Currently innactive on the apple & google play store.</p>
                </div>

                <div className="work-item">
                    <img className="thumbnail" src={image5} alt="" />
                    <div className='overlay'>
                        <button className='overlay-btn'>view</button>
                    </div>
                    <p className='work-title'>Calculator app</p>
                    <p className='work-description'>Currently innactive on the apple & google play store.</p>
                </div>

                <div className="work-item">
                    <img className="thumbnail" src={image6} alt="" />
                    <div className='overlay'>
                        <button className='overlay-btn'>view</button>
                    </div>
                    <p className='work-title'>To do list</p>
                    <p className='work-description'>Currently innactive on the apple & google play store.</p>
                </div>
            </div>
            <div className='button-container'>
                <a href='#'><button className='action'>Back to top</button></a>
            </div>
        </div>
    )
}
import React, { useState, useEffect,} from 'react';
import { data } from '../assets/data';
import '../App.css';

export default function RecentWork ({ toggleModal }) {

    return (
        <div className='experience-container'>
            <p className='experience-title'>Recent Work</p>

            <div className="work-items-row">
                {data.map((item) => {
                    return (
                        <div key={String(item.id)} className="work-item">
                            <img className="thumbnail" src={item.image} alt="" />

                            <div className='overlay' onClick={() => toggleModal(item.image, item.body[0].description, item.status)}>
                                <button className='overlay-btn'>view</button>
                            </div>

                            <p className='work-title'>{item.title}</p>
                            
                            <p className='work-description'>{item.status}</p> 
                        </div>
                    )
                })}
            </div>
            
            <div className='button-container'>
                <a href='#'><button className='action'>Back to top</button></a>
            </div>
        </div>
    )
}
import React, { useState, useEffect,} from 'react';
import image1 from '../images/thumbs/01.jpg';
import image2 from '../images/thumbs/02.jpg';
import image3 from '../images/thumbs/03.jpg';
import image4 from '../images/thumbs/04.jpg';
import image5 from '../images/thumbs/05.jpg';
import image6 from '../images/thumbs/06.jpg';
import '../App.css';

export default function RecentWork ({ toggleModal }) {

    const [active, setActive] = useState(`Currently active on the apple & google play store.`);
    const [innactive, setInnactive] = useState(`Currently innactive on the apple & google play store.`);
    const [activity, setActivity] = useState(active)
    
    const data = [
        {id: '1', active: 'no', title: 'Washe', image:`${image1}`, status: activity,},
        {id: '2', active: 'no', title: 'FOMO', image:`${image2}`, status: activity,},
        {id: '3', active: 'no', title: 'Ride', image:`${image3}`, status: activity,},
        {id: '4', active: 'no', title: 'Weather app', image:`${image4}`, status: activity,},
        {id: '5', active: 'no', title: 'Calculator app', image:`${image5}`, status: activity,},
        {id: '6', active: 'no', title: 'To do list', image:`${image6}`, status: activity,},
    ];

    return (
        <div className='experience-container'>
            <p className='experience-title'>Recent Work</p>

            <div className="work-items-row">
                {data.map((item) => {
                    return (
                    <div className="work-item">
                        <img className="thumbnail" src={item.image} alt="" />
                        <div className='overlay' onClick={toggleModal}>
                            <button className='overlay-btn'>view</button>
                        </div>
                        <p className='work-title'>{item.title}</p>
                        { item.active === 'yes' ? 
                            <p className='work-description'>{item.status}</p> 
                            : 
                            <p className='work-description'>{innactive}</p> 
                        }
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
import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import { MdEmail } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

export default function SendMessage ({ props }) {
    return (
        <div className='send-message-container'>
            <div className='send-message-containt'>
                <p className='send-message-title'>Get In Touch</p>
                <p className='send-message-paragraph'>
                    Feel free to shoot me a message for any help or 
                    question and I should get back to you as soon as possible.
                </p>
                <div className="text-input-address">
                    <div className="text-input-container">
                        <form className='form' method="post" action="submit">
                            <div className="text-input-content">
                                <div className='name-email'>
                                    <div className='name-container'>
                                        <input type="text" id="name" placeholder="Name" />
                                    </div>

                                    <div className='email-container'>
                                        <input type="email" id="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className='message' >
                                    <textarea name="message" id="message" placeholder="Message" />
                                </div>
                            </div>
                        </form>
                        <button className="action-3" type="submit" >Message</button>
                    </div>
                    <div className="info-container">
                        <div className="info-content">
                            <div className='address-content'>
                                <div className='icon-2'>
                                    <AiFillHome size={25} color='#D0D0D1' />
                                </div>
                                <div className='address'>
                                    Gaithersburg, MD 20877<br />
                                    United States
                                </div>
                            </div>
                            {/* <li>
                                <h3 className="icon solid fa-mobile-alt"><span className="label">Phone</span></h3>
                                000-000-0000
                            </li> */}
                            <div className='email-content'>
                                <div className='icon-2'>
                                    <MdEmail size={25} color='#D0D0D1' />
                                </div>
                                
                                <a className='email'>aubessome98@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
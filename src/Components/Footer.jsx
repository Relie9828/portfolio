import React, {useCallback, useState, useContext, useEffect, useRef} from 'react';
import MainIcons from './MainIcons';

export default function Footer ({ props }) {
    return (
        <div className='footer'>
            <MainIcons container='icon-container-2' />
        </div>
    )
}
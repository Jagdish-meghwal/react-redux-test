import React, { useEffect, useState } from 'react'
import { Utils } from '../Utils/Utils'
import './styles.css';
import logo from '../logo.svg'

const Header = () => {
    let [currentTime, setCurrentTime] = useState();
    useEffect(() => {
        setTimeout(() => {
            setCurrentTime(Utils.getCurrentTime())
        }, 1000);
    })
    return (
        <div className="header">
            <div id="logo"><img src={logo} height="100" width="100" alt='Sleek Sky' /></div>
            <div id="clock"><h1 > Current Time is : {currentTime}</h1></div>      
        </div>
    )
}

export default Header

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Footer = () => {
    let counter = useSelector(state => state.counter);
    let [count, setCount] = useState();

    useEffect(() => {
        setCount(counter);
    },[counter])

    return (
        <div className="footer">
           <h1>You clicked {count} times</h1> 
        </div>
    )
}

export default Footer

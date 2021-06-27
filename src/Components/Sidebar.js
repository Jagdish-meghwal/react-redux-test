import React from 'react'
import { useDispatch } from 'react-redux';
import { addTimestampAction, counterAction } from '../redux/actions';
import { Utils } from '../Utils/Utils.js'

const Sidebar = () => {
    let dispatch = useDispatch();
   
    let dispatchAddTimestampAction = () =>{
        dispatch(addTimestampAction({
            time: Utils.getCurrentTime(),
            id: Date.now()
        }));
    };
    
    let dispatchCounterAction = () =>{
        dispatch(counterAction());
    }
    
    return (
        <div className="side">
            <button
            id="btn"
                onClick={() => {
                    dispatchAddTimestampAction();
                    dispatchCounterAction();
                }}
            >
                Click here
            </button>
        </div>
    )
}

export default Sidebar

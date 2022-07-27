import React from 'react';
import './dumbexcell.css';
import { MdOutlinePhonelinkErase } from 'react-icons/md'
const DumbExcell = () => {
    return (
        <div className="dumb__container">
            <div className="dumb__left"><h2>Dump Excel, <br />
                Mess, & Worries</h2>
                <h4>Sort out your calling team today</h4>
            </div>
            <div className="dumb__right"><button><MdOutlinePhonelinkErase /> &nbsp; START FREE TRIAL</button></div>
        </div>
    )
}

export default DumbExcell
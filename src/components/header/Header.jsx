import React from 'react';
import './header.css';
import { BsFillPatchQuestionFill } from 'react-icons/bs';
import { AiFillAccountBook } from 'react-icons/ai';
const Header = () => {
    return (
        <div className='header '>
            <div className="headerTitles">
                <span className='headerTitleLg'>DUMP EXCEL, USE TELECRM</span>
                <span className='headerTitleSm'>TO MAKE MORE CALLS, CLOSE MORE DEALS, AND GET PERFECT TRACKING</span>

            </div>
            <div className="btn_container">
                <button type='button' className='btn-1'><BsFillPatchQuestionFill className='icon' />&nbsp; HOW IT WORKS</button>
                <button type='button' className='btn-2'><AiFillAccountBook />&nbsp; BOOK FREE DEMO</button>
            </div>


        </div >
    )
}

export default Header
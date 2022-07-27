import React from 'react';
import './navbar.css';
import Logo from '../../assets/telecrm-logo.png';
import { FiFeather } from 'react-icons/fi';
import { MdOutlinePriceChange } from 'react-icons/md'
import { MdOutlineHelp } from 'react-icons/md'
import { FaShoppingBag } from 'react-icons/fa'
const Navbar = () => {
    return (
        <div>


            <nav>
                <a href="#"><img src={Logo} alt="logo" /></a>

                <div className="nav-links" id="navLinks">
                    <ul>
                        <li><a href=""> <FiFeather className='icons' /> &nbsp; Features</a></li>
                        <li><a href=""> <MdOutlinePriceChange className='icons' /> &nbsp; Pricing</a></li>
                        <li><a href=""><MdOutlineHelp className='icons' />&nbsp; How it works</a></li>
                        <li><a href=""><button type='button'><FaShoppingBag className='btn-icon' />&nbsp; Book Free Demo</button></a></li>

                    </ul>
                </div>

            </nav>


        </div>
    )
}

export default Navbar
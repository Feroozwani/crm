import React from 'react'
import './howitworks.css'
import HowitworksChild from './HowitworksChild'
import { MdMobileOff } from 'react-icons/md'
import { AiFillShopping } from 'react-icons/ai'
import Circle1 from '../../assets/circle1.png'
import Circle2 from '../../assets/circle2.png'
import Circle3 from '../../assets/circle3.png'

const HowItWorks = () => {
    return (<>
        <div className='howitworks'>
            <div className="howitworks-title">
                <span>How It Works</span>
                <h3>Start right now or let us guide you!</h3>
                <p>Choose the model that's right for you</p>
            </div>
            <div className="div_box"></div>


        </div>
        <div className="child-container-parent" >
            <div className="child__container" id='child__1'><HowitworksChild image={Circle1} title="Model 1: DIY Free Trial" heading="Try for FREE" desc="Start your free trial" /></div>
            <div className="child__container" id='child__2'><HowitworksChild image={Circle1} title="Model 2: Guided Onboarding" heading="Book live demo" desc="get all your doubts cleared" /></div>
        </div>
        {/* ................................line........................................... */}
        <div className='howitworks'>

            <div className="div_box"></div>
        </div>
        {/* ................................line........................................... */}
        <div className="child-container-parent" >
            <div className="child__container"><HowitworksChild image={Circle2} title="Watch videos" heading="With step-by-step guide in demos." /></div>
            <div className="child__container" id='child__4'><HowitworksChild image={Circle2} title="Buy licenses" heading="And start trying the app with your team" /></div>
        </div>
        {/* ................................line........................................... */}
        <div className='howitworks'>

            <div className="div_box"></div>
        </div>
        {/* ................................line........................................... */}
        <div className="child-container-parent" >
            <div className="child__container" id='child__5'><HowitworksChild image={Circle3} title="If you get stuck" heading="your dedicated customer success" /></div>
            <div className="child__container" id='child__6'><HowitworksChild image={Circle3} title="If you get stuck" heading="your dedicated customer success" /></div>
        </div>
        {/* ................................line........................................... */}
        <div className='howitworks'>

            <div className="div_box"></div>
        </div>
        {/* ................................line........................................... */}




        {/* ................................line........................................... */}


        <div className="button-child" id='btn-child'>
            <button><MdMobileOff />	&nbsp; Try for Free</button>
            <button><AiFillShopping />&nbsp; Book Free Demo</button>
        </div>
    </>


    )
}

export default HowItWorks
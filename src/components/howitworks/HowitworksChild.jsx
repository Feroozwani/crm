import React from 'react'
import './howitworksChild.css'
import Circle1 from '../../assets/circle1.png'
const HowitworksChild = ({ image, title, heading, desc }) => {
    return (
        <div className='child__container'>


            <div className="child__img">
                <img src={image} alt="" />


            </div>


            <div className="child__content">

                <h1 className='model__title'>{title}</h1>
                <p>{heading}</p>
                <p>{desc}</p>
            </div>



        </div>
    )
}

export default HowitworksChild

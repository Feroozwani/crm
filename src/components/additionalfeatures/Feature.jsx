import React from 'react'
import './feature.css'
import Feature1 from '../../assets/featurespic1.jpg'

const feature = () => {
    return (

        <div className="row">
            <div className="course-col">
                <img src={Feature1} alt="" />
                <h3>Use WhatsApp CRM to Grow Your Business</h3>
                <p>Manage your entire team's business WhatsApp communications in one simple and unified platform</p>
                <div className="btn"><button type='button' id='btn1'>Learn More</button></div>

            </div>
        </div>
    )
}

export default feature

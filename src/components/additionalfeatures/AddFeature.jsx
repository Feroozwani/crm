import React from 'react'
import './addfeature.css'
import FeaturesPic1 from '../../assets/featurespic1.jpg'

const AddFeature = () => {
    return (
        <div className="tryrow">
            <div className="trycol">
                <img src={FeaturesPic1} alt="" />
                <h3 className='main-heading'>Step-by-step onboarding course</h3>
                <p className='sub-head'>Use this quick DIY course to get step-by-step guidance in onboarding yourself on TeleCRM.</p>
                <div className="btn"><button type='button' id='btn1'>Go To Course</button></div>
            </div>
        </div>
    )
}

export default AddFeature
import React from 'react'
import Faqs from './Faqs'
import './mainfaqs.css'

const MainFaqs = () => {
    return (
        <div>
            <div className="main">
                <h3>	&nbsp; &nbsp; Need Help?</h3>
                <h1 className='large'>FAQs</h1>
            </div>

            <div className="faqs-container">
                <Faqs />
            </div>
            <div className="faqs-container">
                <Faqs />
            </div>
            <div className="faqs-container">
                <Faqs />
            </div>
            <div className="faqs-container">
                <Faqs />
            </div>
            <div className="faqs-container">
                <Faqs />
            </div>
        </div>
    )
}

export default MainFaqs
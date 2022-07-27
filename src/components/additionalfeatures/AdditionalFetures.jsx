import React from 'react'
import AddFeature from './AddFeature'
import './additionalfeatures.css'
import CommonCard from './CommonCard'
import CardPic1 from '../../assets/featurespic1.jpg'
// import CardPic2 from '../../assets/featurespic2.jpg'
import CardPic3 from '../../assets/fe3.jpg'
import CardPic4 from '../../assets/fe4.jpg'
import CardPic5 from '../../assets/fe5.jpg'
import CardPic6 from '../../assets/fe6.jpg'
import CardPic7 from '../../assets/fe7.jpg'
import CardPic8 from '../../assets/fe8.jpg'
import CardPic9 from '../../assets/fe9.jpg'
import CardPic10 from '../../assets/fe10.jpg'
import CardPic11 from '../../assets/fe11.jpg'
import CardPic12 from '../../assets/fe12.jpg'
import CardPic13 from '../../assets/fe13.jpg'
import CardPic14 from '../../assets/fe14.jpg'
import CardPic15 from '../../assets/fe15.jpg'
import CardPic16 from '../../assets/fe16.jpg'
import CardPic17 from '../../assets/fe17.jpg'
import CardPic18 from '../../assets/fe18.jpg'
import CardPic19 from '../../assets/fe19.jpg'
import CardPic20 from '../../assets/fe20.jpg'
const AdditionalFetures = () => {
    return (

        <div className='features'>

            <h1>Additional features</h1>
            <p id='special-p'>Built-in features in TeleCRM that you can access at no extra cost</p>
            <div className="feature-container" >
                {/* <AddFeature />
                <AddFeature />
                <AddFeature />
                <AddFeature /> */}
                <CommonCard CardPic1={CardPic1} title="use whatsapp CRM to Grow your business" desc="Manage your entire team's business WhatsApp communications in one simple and unified platform." />
                <CommonCard CardPic1={CardPic15} title="Close more leads with TeleCRM Social Media CRM" desc="Capture leads from FB/Instagram in real-time, instantly engage on WhatsApp/Call, followup on time with call reminders to close more deals." />

            </div>
            <div className="feature-container" >
                {/* <AddFeature />
                <AddFeature />
                <AddFeature />
                <AddFeature /> */}
                <CommonCard CardPic1={CardPic3} title="Simplest Customer Segmentation Software" desc="Divide customers correctly, run the right campaigns, and sell better sell more" />
                <CommonCard CardPic1={CardPic4} title="Tours and Travels CRM to make your sales fly high" desc="Book personalised packages, manage follow-ups and pending payments & automate sales calling from a single platform to reduce your work and increase your revenue." />

            </div>
            <div className="feature-container" >
                {/* <AddFeature />
                <AddFeature />
                <AddFeature />
                <AddFeature /> */}
                <CommonCard CardPic1={CardPic5} title="Fill up your seats and finish enrollments targets faster with TeleCRM" desc="Use CRM for education institutions and consultancy to fill up seats & finish admission targets faster" />
                <CommonCard CardPic1={CardPic6} title="Automatic call recording CRM Software" desc="Your team does calling as usual and the CRM automatically records and stores calls." />
            </div>
            <div className="feature-container" >
                {/* <AddFeature />
                <AddFeature />
                <AddFeature />
                <AddFeature /> */}
                <CommonCard CardPic1={CardPic7} title="use whatsapp CRM to Grow your business" desc="Manage your entire team's business WhatsApp communications in one simple and unified platform." />
                <CommonCard CardPic1={CardPic8} title="Instant Facebook Lead Capture / Download" desc="Instantly Engage with Your Facebook Leads. Interact with each lead within minutes instead of making them wait for hours and days..." />
            </div>
            <div className="feature-container" >
                {/* <AddFeature />
                <AddFeature />
                <AddFeature />
                <AddFeature /> */}
                <CommonCard CardPic1={CardPic9} title="Virtual Call Center CRM for Remote Sales Team" desc="Virtual Call Center CRM for Remote Sales Team. Which keeps your stress level low and your team's productivity high." />
                <CommonCard CardPic1={CardPic10} title="The Next-level Call Center Management Software" desc="Frankly excel sucks so we have built all the right features for call-center management on one platform" />
            </div>
            <div className="feature-container" >
                {/* <AddFeature />
                <AddFeature />
                <AddFeature />
                <AddFeature /> */}
                <CommonCard CardPic1={CardPic11} title="Sales Performance Management Software" desc="To help you implement smart lead management hacks and get the maximum ROI" />
                <CommonCard CardPic1={CardPic12} title="TeleCRM Accurate Call tracking CRM Software" desc="Set automatic accurate tracking for each and every call that your sales team makes with TeleCRM call tracking CRM software." />
            </div>
            <div className="feature-container" >
                {/* <AddFeature />
                <AddFeature />
                <AddFeature />
                <AddFeature /> */}
                <CommonCard CardPic1={CardPic13} title="Financial Services CRM" desc="The Right CRM for Financial Service Providers like banks, insurance agents, NBFCs, and investment advisors" />
                <CommonCard CardPic1={CardPic14} title="Affordable Tele Sales CRM Software for the Best Value for Money" desc="We help you effectively service your customers without burning a hole in your pocket" />
            </div>
            <div className="feature-container" >
                {/* <AddFeature />
                <AddFeature />
                <AddFeature />
                <AddFeature /> */}
                <CommonCard CardPic1={CardPic15} title="B2B CRM Software - Build better relationships and sell effortlessly" desc="When selling to professionals TeleCRM helps you to be professional, because in B2B sales there is no scope of missed follow-ups or faltered commitments." />
                <CommonCard CardPic1={CardPic16} title="Close more deals with Real Estate CRM" desc="Close more deals with the best CRM for real estate industry with end-to-end support for real-estate workflow" />
            </div>
            <div className="feature-container" >
                {/* <AddFeature />
                <AddFeature />
                <AddFeature />
                <AddFeature /> */}
                <CommonCard CardPic1={CardPic17} title="Auto-dialer based tele-calling CRM" desc="Use TeleCRM Auto Dialer to Make 200 Calls Per Day. Without working for 13 hours, because NO MORE typing numbers, dialing wrong numbers, or maintaining records." />
                <CommonCard CardPic1={CardPic18} title="Follow-up scheduling and Call Reminder CRM" desc="Use Automated Followup Scheduling >and Call Reminders in CRM. So that you never miss an important call and your prospects feel cared for and trust you." />
            </div>
            <div className="feature-container" >
                {/* <AddFeature />
                <AddFeature />
                <AddFeature />
                <AddFeature /> */}
                <CommonCard CardPic1={CardPic19} title="Simplest Lead management CRM software" desc="Find the right insights from software and focus on where you are growing to grow even more" />
                <CommonCard CardPic1={CardPic20} title="Use TeleCRM the Simplest Cloud-Based CRM Software" desc="Use TeleCRM cloud-based CRM To safely store all your calling operations data and access it from anywhere." />
            </div>
        </div>

    )
}

export default AdditionalFetures

import React from 'react';
import './crm.css';
import CrmPic1 from '../../assets/crm-pic1.jpg';
import AutomaticPic from '../../assets/automatic.jpg'
import Calls from '../../assets/calls.jpg'
import CheckProgress from '../../assets/check.jpg'
import TrackPic from '../../assets/track.jpg'
import Integration from '../../assets/integration.jpg'
const Crm = () => {
    return (<>
        <div className='crm'>
            <div className="crm-heading"><h1>The only complete CRM for Indian <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; businesses!</h1></div>
            <div className="main-content"><div className="crm-img"><img src={CrmPic1} alt="" /></div>
                <div className="crm-content">
                    <h1>Integrate and <br /> Capture Leads <br /> from Everywhere</h1>
                    <h3>from 16 portals including FB Ads, Google Ads, <br /> Website, Justdial, Sulekha, IndiaMart, <br /> 99Acres, MagicBricks, WhatsApp, WhatsApp <br /> Business API, Housing, and many more...</h3>
                </div></div>
        </div>
        {/* ..............xxxxxxxxxxxxxxxxxxxxxxx...... */}
        <div className='automatic'>

            <div className="automatic-content">
                <h1>Automatically <br /> Distribute Leads to <br /> Team Members</h1>
                <h3>For any campaign or integration, just select <br /> team members, define percentage and set <br /> automatic distribution forever</h3>
            </div>
            <div className="main-content-auto"><div className="automatic-img"><img src={AutomaticPic} alt="" /></div>
            </div>
        </div>
        {/* /* .................xxxxxxxxxxxxxxxxxxxxxx............automatic................xxxxxxxxxxxxxxxxxxxxxx............. */}


        {/* ............................................calls.......................................... */}
        <div className='crm'>
            <div className="main-content"><div className="crm-img" id='calls-img'><img src={Calls} alt="" /></div>
                <div className="crm-content">
                    <h1 id='calls-head'>Make More Calls, <br /> Close More Sales</h1>
                    <h3>Make upto 250 calls per day with autodialer, <br /> schedule and manage all follow-ups in one <br /> place, never miss a follow-up with call <br /> reminders.</h3>
                </div></div>
        </div>
        {/* .......................xxxxxxxxxxxx.....................calls.......................xxxxxxxxxxxxxx................... */}


        {/* ..............xxxxxxxxxxxCheck Progress xxxxxxxxxxxx...... */}
        <div className='automatic' id='checkprogress'>

            <div className="automatic-content">
                <h1>Check Progress in <br /> a Single Glance</h1>
                <h3>Run multiple calling campaigns and check <br /> the progress report of all active campaigns <br /> with a single glance on campaign dashboard</h3>
            </div>
            <div className="main-content-auto"><div className="automatic-img"><img src={CheckProgress} alt="" /></div>
            </div>
        </div>
        {/* /* .................xxxxxxxxxxxxxxxxxxxxxx............Check Progress................xxxxxxxxxxxxxxxxxxxxxx............. */}


        {/* .....................................................track.............................. */}
        <div className="main-content"><div className="crm-img" id='track-img'><img src={TrackPic} alt="" /></div>
            <div className="crm-content" id='track'>
                <h1>
                    Track Everyone in <br /> Real-time</h1>
                <h3>Just one glance at the leaderboard and you can <br /> see the complete progress report for any team <br /> member. No of calls, time spent on calls, <br /> and total sales</h3>
            </div></div>


        {/* ..........................................xxxxxxx.......................track............xxxx........ */}

        {/* ..............xxxxxxxxxxxxxxxxxxxxxxx...... */}
        <div className='automatic'>

            <div className="automatic-content">
                <h1>Advanced <br /> Integrations & <br /> Automations</h1>
                <h3>Add the automation that YOU want on your <br /> entire data, or retarget filtered list list based on <br /> call status, lead interest, or pipeline level</h3>
            </div>
            <div className="main-content-auto"><div className="automatic-img"><img src={Integration} alt="" id='integration-img' /></div>
            </div>
        </div>
        {/* /* .................xxxxxxxxxxxxxxxxxxxxxx............automatic................xxxxxxxxxxxxxxxxxxxxxx............. */}

    </>
    )
}

export default Crm
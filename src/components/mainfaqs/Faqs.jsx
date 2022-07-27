import React from 'react';
import './faqs.css';
import Accordion from 'react-bootstrap/Accordion';
function Faqs() {
    return (
        <Accordion defaultActiveKey="" className='fix'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is the benefit of using TeleCRM?</Accordion.Header>
                <Accordion.Body>
                    When you deploy TeleCRM with your team, you instantly see the following benefits 1. Increased no. of calls made by your team 2. Improvement in follow ups and scheduled tasks 3. More brand recall, by sharing a WhatsApp after every call 4. Monitoring of each team member, their calls, duration of calls, recording and much more 5. Ability to work from any location, due to our amazing mobile app 6. Reduced costs, due to SIM based dialing. On average every company sees 2-3x more calls, which results in more sales. Follow-up reminders ensure that no contact is lost. Stop using an excel sheet and move to TeleCRM to handle your customers and make more calls.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>TeleCRM SIM based Dialer vs Cloud Telephony like Exotel or Knowlarity?</Accordion.Header>
                <Accordion.Body>
                    TeleCRM is a CRM, with a SIM based Autodialer that runs on your own phone. Cloud-tel companies are like Airtel or JIO who provide telephony solutions. With TeleCRM you do not need any cloud telephony as TeleCRM can utilize the SIM card on your phone to make calls. This gives you benefits like cost savings, no kyc and compliance hassel, call any number, numbers dont show as spam on truecaller and many more benefits.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Faqs;
import React from 'react'
import './freetrialdemo.css'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import { Button } from 'react-bootstrap';
const FreeTrialDemo = () => {
    return (
        <div className='container'>
            <h5 id='heading-main'>GET A FREE TRIAL!</h5>
            <p id='sm'>See it, fall in love with it! Then try it yourself</p>
            <div className="btn" id='btn-trial'> <Button> <BsFillBookmarkHeartFill /> &nbsp; Book free demo </Button></div>
            {/* <div className="btn" id='btn-trial'><button type='button' id='btn1'> <BsFillBookmarkHeartFill /> &nbsp; Book free demo</button></div> */}
        </div>
    )
}

export default FreeTrialDemo
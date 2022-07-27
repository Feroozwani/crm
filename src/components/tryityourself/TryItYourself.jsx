import React from 'react'
import './tryityourself.css'
import Try1 from '../../assets/try1.jpg'
import Try2 from '../../assets/try2.jpg'
import Try3 from '../../assets/try3.jpg'
import { AiFillAlipayCircle } from 'react-icons/ai'
import { BsFillCloudLightningRainFill } from 'react-icons/bs'
import { Button } from 'react-bootstrap';
const TryItYourself = () => {
    return (
        < section className="tryityourself" >
            <h1 className='heading'>TRY IT YOURSELF</h1>
            <p className='para'>Try it for free, see how it works, and contact us if you get stuck</p>

            <div className="tryrow">
                <div className="trycol">
                    <img src={Try1} alt="" />
                    <h3 className='main-heading'>Step-by-step onboarding course</h3>
                    <p className='sub-head'>Use this quick DIY course to get step-by-step guidance in onboarding yourself on TeleCRM.</p>

                    <div className="btn"><Button>Go to course</Button></div>

                </div>
                <div className="trycol">
                    <img src={Try2} alt="" />
                    <h3 className='main-heading'>Stuck on a particular step?</h3>
                    <p className='sub-head'>Check out quick videos for different steps in onboarding</p>
                    <div className="btn"><Button>Check Videos</Button></div>
                </div>
                <div className="trycol">
                    <img src={Try3} alt="" />
                    <h3 className='main-heading'>Want to explore advanced features?</h3>
                    <p className='sub-head'>Check out quick short demo videos of TeleCRM's advanced features.</p>
                    <div className="btn"><Button>Advanced Features</Button></div>
                </div>

            </div>
            <div className="btn_container" id='btn-try'>
                <button type='button' className='btn-2'> <AiFillAlipayCircle /> &nbsp; Go to your app dashboard</button>
                <button type='button' className='btn-1'><BsFillCloudLightningRainFill /> &nbsp; Download latest app</button>
            </div>

        </section>
    )
}

export default TryItYourself
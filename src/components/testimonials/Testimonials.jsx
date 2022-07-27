import React from 'react'
import './testimonials.css'
import Test1 from '../../assets/test1.jpeg'
import Test2 from '../../assets/test2.jpeg'
import Test3 from '../../assets/test3.jpg'
import { AiOutlineStar } from 'react-icons/ai'
const Testimonials = () => {
    return (
        <section className="testimonial__container">
            <h1 className='test_head'>TESTIMONIALS</h1>
            <p className='test_sub-head'>What Existing Companies Say</p>

            <div className="testimonial__row">
                <div className="testimonial__col">
                    <AiOutlineStar className='star' /> <AiOutlineStar className='star' /> <AiOutlineStar className='star' /><AiOutlineStar className='star' /><AiOutlineStar className='star' />

                    <p className='test_sub_heading'>TeleCRM helps us stay in touch with 21,000 different types of users on a daily basis. This includes existing users, new signups, and new transactions.</p>
                    <div className="img__test"> <img src={Test1} alt="" /> <p>Aayush Singh Sengar
                        Founder, tutor101</p>


                    </div>
                </div>
                <div className="testimonial__col">
                    <AiOutlineStar className='star' /> <AiOutlineStar className='star' /> <AiOutlineStar className='star' /><AiOutlineStar className='star' /><AiOutlineStar className='star' />
                    <p className='test_sub_heading'>TeleCRM helps us achieve 98% retention rate with 7000 customers from across India.</p>
                    <div className="img__test"> <img src={Test2} alt="" /> <p>Harsh Vora
                        Jewelry insurance Provider, IFFCO- Tokio</p></div>
                </div>
                <div className="testimonial__col">
                    <AiOutlineStar className='star' /> <AiOutlineStar className='star' /> <AiOutlineStar className='star' /><AiOutlineStar className='star' /><AiOutlineStar className='star' />
                    <p className='test_sub_heading'>"TeleCRM Facebook integration works flawlessly to capture and distribute leads. And then I can check the progress of every lead from the reports. It just works. Completely satisfied and totally recommend it!"</p>
                    <div className="img__test"> <img src={Test3} alt="" /> <p>ABhaskar Jogi
                        Founder, Go Online Trainings</p></div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
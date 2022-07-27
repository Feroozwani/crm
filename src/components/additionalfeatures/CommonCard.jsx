import React from 'react'
import "./commonCard.css"
import { Button } from 'react-bootstrap';

const CommonCard = (props) => {
    return (
        <div className='card__container'>

            <div className="card__img">
                <img src={props.CardPic1} alt="" />
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                {/* <button>whatsapp</button> */}
                <Button>Learn More</Button>

            </div>


        </div>
    )
}

export default CommonCard
import React from 'react'
import "./Card.css"
const Card = (props) => {
    const { rating } = props;

    // Create an array of five stars, with the appropriate rating color
    const stars = [];
    if (rating) {
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={`star ${i <= rating ? "yellow" : ""}`}>
                    ★
                </span>
            );
        }
    }

    return (
        <div className='my-card'>
            <img className="card-image" src={props.img} alt="" />
            <h4 className='card-title'>{props.title}</h4>
            <p className='card-sub-title'>{props.subtitle}</p>
            <p className='card-info'>{props.info}</p>
            <div className="star-rating">{stars}</div>
        </div>
    )
}

export default Card

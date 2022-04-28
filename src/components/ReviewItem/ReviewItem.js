import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    console.log(props)
    const {name, quantity} = props.product
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-title">{name}</h4>
            <p> Quantity: {quantity}</p>
            <br/>
            <button className="mainButton">Remove</button>
        </div>
    );
};

export default ReviewItem;
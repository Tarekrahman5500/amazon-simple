import React from 'react';
import './Card.css'

const Card = (props) => {
    const card = props.card
    const TotalPrice = card.reduce((total, product) => total + product.price, 0)
    let shipping = 0
    if (TotalPrice > 35) {
        shipping = 0
    } else if (TotalPrice > 15) {
        shipping = 4.99
    } else if (TotalPrice > 0) {
        shipping = 12.99
    }
    console.log(shipping)
    const tax =  TotalPrice / 10
    const FinalTotalPrice =  TotalPrice + shipping + tax
    const format = num => {
        const precision = parseFloat(num.toFixed(2))
        return precision
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Item Ordered: {card.length}</p>
            <p>Product Price:${format(TotalPrice)}</p>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p><small>Tax + Vat: ${format(tax)}</small></p>
            <p>Total Price: ${format(FinalTotalPrice)}</p>
        </div>
    );
};

export default Card;
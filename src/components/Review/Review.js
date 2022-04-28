import React, {useEffect, useState} from 'react';
import {getStoredCart} from "../../utilities/fakedb";
import fakeData from "../../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
import product from "../Product/Product";
const Review = () => {
    const [cart, setCart] = useState([])
    useEffect(()=>{
        // load data from card
        const saveCart = getStoredCart()
        const productKeys = Object.keys(saveCart)

        const cartProduct =  productKeys.map( key =>{
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = saveCart[key]
            return product
        })
        setCart(cartProduct)
    },[])
    return (
        <div>
            <h1>Cart Item: {cart.length}</h1>
            {
                cart.map(product =>   <ReviewItem key={product.key} product={product} />)
            }
        </div>
    );
};

export default Review;
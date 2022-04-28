import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Product.css'
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";



const Product = (props) => {


    const {name, img, seller, price, stock, key} = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-title" key={props.key}><Link to={`/product/${key}`}>{name}</Link></h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <br/>
                <p><small>only {stock} left in stock- Order soon</small></p>
                {props.showAddButton && <button className="mainButton" onClick={() =>
                    props.handleAddProduct(props.product)
                }>
                    <FontAwesomeIcon icon={faShoppingCart}/> add to card</button>}
            </div>

        </div>
    );
};

export default Product;
import React from 'react';
import {useParams} from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetail = () => {

    // extract parameter key
    const {productKey} = useParams()
    // now check to data that match the key
    const product = fakeData.find(data => data.key === productKey)

    return (
        <div>
            <h1> Product Details</h1>
           {/* // call product component*/}
            <Product key={product.key} showAddButton={false} product={product}/>
        </div>
    );
};

export default ProductDetail;
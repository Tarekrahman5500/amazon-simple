import React, {useState} from 'react';
import fakeData from '../../fakeData/'
import './Shop.css'
import Product from "../Product/Product";
import Card from "../Card/Card";
import {addToDb} from "../../utilities/fakedb";

const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    const [products, setProperties] = useState(first10)
    const [card, setCard] = useState([])

    const handleAddProduct = (product) => {

        const newCard = [...card, product]
        setCard(newCard)
        const sameProduct = newCard.filter(pd => pd.key ===product.key)
        addToDb(product.key,sameProduct.length)
    }
    console.log(fakeData)
    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map((product, id) => <Product
                        product={product}
                        showAddButton={true}
                        handleAddProduct = {handleAddProduct}
                        key={product.key}></Product>)
                }

            </div>
            <div className="card-container">
              <Card card={card}/>
            </div>
        </div>
    );
};

export default Shop;
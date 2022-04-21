import React, {useState} from 'react';
import fakeData from '../../fakeData/'
import './Shop.css'
import Product from "../Product/Product";
import Card from "../Card/Card";

const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    const [products, setProperties] = useState(first10)
    const [card, setCard] = useState([])

    const handleAddProduct = (product) => {
             console.log('button', product)
        const newCard = [...card, product]
        setCard(newCard)
    }
    console.log(fakeData)
    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map((product, id) => <Product
                        product={product}
                        handleAddProduct = {handleAddProduct}
                        key={product.id}></Product>)
                }

            </div>
            <div className="card-container">
              <Card card={card}/>
            </div>
        </div>
    );
};

export default Shop;
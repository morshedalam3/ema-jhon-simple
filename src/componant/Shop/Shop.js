import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Products/Product';
import './Shop.css';
const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [products, setProduct] = useState(firstTen)
    
    return (
        <div className="shop-container">
            <div className="product-container">
             
                 {
                    products.map(pd => <Product product={pd}></Product> )
                 }
              
            </div>
            <div className="card-container">
                <p>this is card</p>
            </div>
        </div>
    );
};

export default Shop;
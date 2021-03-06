import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';
const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [products, setProduct] = useState(firstTen)
    const [cart, setCart] = useState([])
    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
             
                 {
                    products.map(pd => <Product 
                        handleAddProduct = {handleAddProduct}
                        product={pd}
                    ></Product> )
                 }
              
            </div>
            <div className="card-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
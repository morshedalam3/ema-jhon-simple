import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
        <div>
            <h4 className="product-name">{name}</h4>
            <br/>
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <br/>
            <p><small>only{stock} left in stock-order soon</small></p>
            <button onClick={() => props.handleAddProduct(props.product)} className="button-main"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>

        </div>
        </div>
        
    );
};

export default Product;
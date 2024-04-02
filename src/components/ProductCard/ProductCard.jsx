import React from 'react';
import { TbPlus } from 'react-icons/tb';

import "./ProductCard.scss";
import { useCart } from '../../contexts/CartContext';


const ProductCard = ({ product }) => {
    const { addToCart } = useCart(product);
    const handleAdd = () => {
        addToCart(product)
    }
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={product.image} alt="product image" />
            </div>
            <div className="card-detail">
                <h4 className="card-title">{product.title}</h4>
                <div className="card-category">{product.category}</div>

                <div className="card-flex">
                    <div className="card-price">{product.price}</div>
                    <div className="card-button" onClick={() => handleAdd(product)}>
                        <TbPlus />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard
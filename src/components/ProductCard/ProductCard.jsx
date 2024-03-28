import React from 'react';
import { TbPlus } from 'react-icons/tb';

import "./ProductCard.scss"

const ProductCard = () => {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src="" alt="product image" />
            </div>
            <div className="card-detail">
                <h4 className="card-title">This is a title</h4>
                <div className="card-category">Category</div>

                <div className="card-flex">
                    <div className="card-price">$200.00</div>
                    <div className="card-button">
                        <TbPlus />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
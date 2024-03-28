import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

import "./ProductList.scss";

const ProductList = () => {
    return (
        <div className="product-list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default ProductList  
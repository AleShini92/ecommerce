import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

import "./ProductList.scss";
import { useProduct } from '../../contexts/ProductContext';

const ProductList = () => {
    const { products, loading } = useProduct();
    return (
        <div className="product-list">
             { 
                loading ? ( <p>loading</p> ) : ( <> {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))} </> )
            }
        </div>
    )
}

export default ProductList  
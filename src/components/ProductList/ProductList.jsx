import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

import "./ProductList.scss";
import { useProduct } from '../../contexts/ProductContext';
import Skeleton from '../Skeleton/Skeleton';

const ProductList = () => {
    const { products, loading } = useProduct();
    //const loading = true;
    return (
        <div className="product-list">
            { loading ?
                ( Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="skeleton-conatiner">
                        <Skeleton />
                    </div>
                    ))
                ) : ( <> {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            } </> 
            )}
        </div>
    )
}

export default ProductList  
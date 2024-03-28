import React from 'react';
import ProductList from '../components/ProductList/ProductList';
import CategoryList from '../components/CategoryList/CategoryList';

const Home = () => {
    return (
        <div className='main-content'>
            <div className="products">
                <h1 className="section-title">Products</h1>
                <ProductList />
            </div>

            <div className="gategory">
                <h2 className="section-title">Categories</h2>
                <CategoryList />
            </div>
        </div>
    )
}

export default Home
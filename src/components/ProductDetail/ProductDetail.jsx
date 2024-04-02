import React from "react";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import useGetProduct from "../hooks/useGetProduct";
import { useCart } from "../../contexts/CartContext";

import { motion } from "framer-motion";


const ProductDetail = () => {
    const { id } = useParams();
    const { product, loading } = useGetProduct();
    const { addToCart } = useCart();

    // Add to cart
    const handleAdd = (product) => {
        addToCart(product)
    };

    console.log(product);
    return (
        <motion.div className="product-container"
            initial={{ opacity: 0, y:100 }}
            animate={{ opacity: 1, y:0 }}
            transition= {{ duration: 1 }} // 1s 
        >
            <div className="product-image">
                {loading ? ( 
                    <div className="product-image-skeleton"></div>
                    ) : (
                        <img src={product.image} alt={product.title} />
                    )
                }
            </div>
            <div className="product-detail">
                {
                    loading ? (
                    <div className="product-details-skeleton">
                        <div className="product-skleton"></div>
                        <div className="product-skleton"></div>
                        <div className="product-skleton"></div>
                        <div className="product-skleton"></div>
                        <div className="product-skleton"></div>
                        <div className="product-skleton"></div>
                        <div className="product-skleton"></div>
                    </div> 
                    ) : ( <>

                    <div className="product-category">
                        {product.category}
                    </div>
                    <h1 className="product-title">
                        {product.title}
                    </h1>
                    <div className="product-rating">
                        <div className="product-rating-start">⭑</div>
                        <span>{product.rating?.rate}</span>
                        <span>{product.rating?.count} review</span>
                    </div>
                    <div className="product-description">
                        {product.description}
                    </div>
                    <div className="product-price">
                        {product.price}
                    </div>

                    <div className="product-buttons">
                        <div className="product-btn" onClick={() => handleAdd(product)}>Add to cart</div>
                        <div className="product-btn buy-btn">Buy Now</div>
                    </div>
                    </>
                )}
            </div>
        </motion.div>
    );
};

export default ProductDetail
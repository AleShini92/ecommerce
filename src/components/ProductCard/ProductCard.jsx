import React from 'react';
import { TbPlus } from 'react-icons/tb';
import { motion } from "framer-motion";

import "./ProductCard.scss";
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
    const { addToCart } = useCart(product);
    const handleAdd = () => {
        addToCart(product)
    }
    return (
        <motion.div className="card-container" 
            initial={{ opacity: 0, y:100 }}
            animate={{ opacity: 1, y:0 }}
            transition= {{ duration: 1.5 }} // 1s
        >
            <div className="card-image">
                <img src={product.image} alt="product image" />
            </div>
            <div className="card-detail">
                <Link to={`/product/${product.id}`}>
                    <h4 className="card-title">{product.title}</h4>
                    <div className="card-category">{product.category}</div>
                </Link>

                <div className="card-flex">
                    <div className="card-price">{product.price}</div>
                    <div className="card-button" onClick={() => handleAdd(product)}>
                        <TbPlus />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard
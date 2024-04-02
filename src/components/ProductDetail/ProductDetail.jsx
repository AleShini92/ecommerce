import React from "react";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import useGetProduct from "../hooks/useGetProduct";

const ProductDetail = () => {
    const { id } = useParams();
    const {product} = useGetProduct();
    console.log(product);
    return (
        <div className="">
            Product-detail
        </div>
    );
};

export default ProductDetail
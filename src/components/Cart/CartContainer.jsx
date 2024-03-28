import React from "react";
import "./CartContainer.scss";
import Item from "./item";

const CartContainer = () => {
    return (
        <div className="cart-wrapper">
            <h2 className="section-title">Shopping Cart</h2>
            <div className="cart-container">
                <div className="cart-items">
                    <Item />
                </div>
                <div className="summary"></div>
            </div>
        </div>
    )
}

export default CartContainer
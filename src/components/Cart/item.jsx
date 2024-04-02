import React from "react";
import { TbMinus, TbPlus, TbX } from "react-icons/tb";
import "./CartContainer.scss";

const Item = ({ item, handleRemove, handleAdd }) => {
    return (
        <div className="item-detail">
            <div className="item-info">
                <div className="item-image">
                    <img src="" alt="cart product image" />
                </div>
                <div className="item-title">{ item.title }</div>
            </div>
            <div className="item-unit-price">{ item.price }</div>
            <div className="item-quantity">
                <TbMinus /> { item.quantity } <TbPlus onClick={() => {item}} />
            </div>
            <div className="item-total-price">{ item.price }</div>

            <div className="item-remove" onClick={() => handleRemove(item.id)}><TbX /></div>
        </div>
    );
}

export default Item
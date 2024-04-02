import React from "react";
import "./CartContainer.scss";
import Item from "./item";
import Summary from "./Summary";
import { useCart } from "../../contexts/CartContext";

const CartContainer = () => {
    const { cartItems, removeFromCart, addToCart, removeQuantity } = useCart();

    // add item
    const handleAdd = (product) => {
        addToCart(product);
    }

    //remove item
    const handleRemove = (productId) => {
        
        removeFromCart(productId);
    };

    //remove quantity

    const handleRemoveQuantity = (productId) => {
        removeQuantity(productId);
    }

    return (
        <div className="cart-wrapper">
            <div className="cart-container">
            <h2 className="section-title">Shopping Cart</h2>
                {
                    cartItems && cartItems.length > 0 ? <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <Item 
                            key={item.id} 
                            item={item} handleRemove={handleRemove} 
                            handleAdd={handleAdd}
                            handleRemoveQuantity={handleRemoveQuantity}
                            />
                        ))}
                        </div>
                    </> :
                    <div className="no-item">
                        <p>no item</p>
                    </div>
                }
                </div>
                <Summary cartItems={cartItems}/>
        </div>
    );
}

export default CartContainer;
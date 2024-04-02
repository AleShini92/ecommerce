import React, { Children, createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext();

export const CartProvider = ( {children} ) => {
    const [cartItems, setcartItem] = useState(
        JSON.parse(localStorage.getItem("cartItems")) || [] 
    );

    console.log(cartItems);

    // add item to cart
    const addToCart = (product) => {
        const  existingItemIndex = cartItems.findIndex(
            (item) => item.id === product.id
        );

        product.quantity = product.quantity || 1; 
        if (existingItemIndex !== -1) {
            const updateItems = [...cartItems];
            updateItems[existingItemIndex].quantity += 1;
            setcartItem(updateItems);
        } else {
            setcartItem([...cartItems, product]);
        }
    };

    //remove item from card

    const removeFromCart = (productId) => {
        setcartItem(cartItems.filter((item) => item.id !== productId));
    };

    useEffect(() => {
        localStorage.setItem("cartItem", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);

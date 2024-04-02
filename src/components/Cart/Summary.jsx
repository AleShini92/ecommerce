import React from "react";
import "./CartContainer.scss";

const Summary = ({ cartItems, acc }) => {

    // total summary for cart
    const totalAmount = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    // add 2% tax on teh totalAmount
    const taxAmount = totalAmount * 0.02;

    // total quantity
    const totalQuantity = cartItems.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    // price

    const totalAmountWithTax = totalAmount + taxAmount;

    return (
        <div className="cart-summary">
            <h3 className="summary-title">Summary</h3>
            <div className="summary-total">
                <span>Subtotal*</span> ${totalAmount.toFixed(2)}
            </div>

            <div className="summary-total-tax">
                <span>Tax charge (2%)</span> {taxAmount.toFixed(2)}
            </div>

            <div className="summary-total-quantity">
                <span>Total Quantity*</span> {totalQuantity}
            </div>

            <div className="summary-total-amount">
                <span>Total Price</span> £{totalAmountWithTax.toFixed(2)}
            </div>

            <button className="check-out-btn">Proceed to checkout</button>
        </div>
    );
}

export default Summary
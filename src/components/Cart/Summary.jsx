import React from "react";
import "./CartContainer.scss";

const Summary = () => {
    return (
        <div className="cart-summary">
            <h3 className="summary-title">Summary</h3>
            <div className="summary-total">
                <span>Subtotal*</span> $1000
            </div>

            <div className="summary-total-tax">
                <span>Tax charge (2%)</span> 20
            </div>

            <div className="summary-total-quantity">
                <span>Total Quantity*</span> 5
            </div>

            <div className="summary-total-amount">
                <span>Total Price</span> £12000
            </div>

            <button className="check-out-btn">Proceed to checkout</button>
        </div>
    );
}

export default Summary
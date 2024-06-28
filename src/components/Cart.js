import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    return (
        <div className="offcanvas-body">
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="list-group">
                    {cartItems.map((item, index) => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                            <span>{item.title} - ₹{item.price}</span>
                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;

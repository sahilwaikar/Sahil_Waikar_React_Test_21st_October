import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/actions';
import './Cart.css'; // Import your CSS styles

const Cart = ({ cartItems, removeFromCart, incrementQuantity, decrementQuantity }) => {
    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId); // Dispatch the removeFromCart action to remove the item from the cart
    };

    const handleIncrementQuantity = (productId) => {
        incrementQuantity(productId); // Dispatch the incrementQuantity action to increase the item quantity
    };

    const handleDecrementQuantity = (productId) => {
        decrementQuantity(productId); // Dispatch the decrementQuantity action to decrease the item quantity
    };

    const total = calculateTotal(cartItems);

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li className="cart-item" key={item.productId}>
                                {item.productName} - ${item.productPrice} x {item.quantity}
                                <button onClick={() => handleDecrementQuantity(item.productId)}>-</button>
                                <button onClick={() => handleIncrementQuantity(item.productId)}>+</button>
                                <button onClick={() => handleRemoveFromCart(item.productId)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <p className="total">Total: ${total}</p>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
    };
};

const mapDispatchToProps = {
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

function calculateTotal(cartItems) {
    return cartItems.reduce((total, item) => total + item.productPrice * item.quantity, 0);
}

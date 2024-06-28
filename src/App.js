import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, { ...product, id: cartItems.length + 1 }]);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
    };

    return (
        <div>
            <NavBar cartItems={cartItems} removeFromCart={removeFromCart} />
            <div className="container mt-4">
                <h1 className="text-center mb-4">Welcome to MyShop</h1>
                <Cards addToCart={addToCart} />
            </div>
        </div>
    );
};

export default App;

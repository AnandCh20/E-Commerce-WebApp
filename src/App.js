import React, { useState } from "react";
import Cards from "./components/Cards";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import "./App.css"; // Import the CSS file for any additional styling

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const newCartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
    };
    setCartItems([...cartItems, newCartItem]);
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <div> 
    <NavBar/>
    <div className="app-container">
   
      <div className="content-container">
        {/* Ensure addToCart function is passed as a prop */}
        <Cards addToCart={addToCart} />
      </div>

      <div className="sidebar-container" >
      <SideBar cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
      
    </div>
    </div>  
  );
};

export default App;

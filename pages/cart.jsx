// src/pages/cart.js
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const removeFromCart = (productToRemove) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === productToRemove.id) {
          if (item.quantity > 1) {
            // Decrease quantity
            return { ...item, quantity: item.quantity - 1 };
          }
          return null; // Remove item from cart if quantity is 1
        }
        return item; // Keep other items as is
      })
      .filter((item) => item !== null); // Filter out nulls (removed items)

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <h1 style={{ textAlign: "center" }}>Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                margin: "20px",
                border: "1px solid #ddd",
                padding: "10px",
              }}
            >
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <p>Quantity: {item.quantity}</p> {/* Display quantity */}
              <button onClick={() => removeFromCart(item)}>Remove One</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;

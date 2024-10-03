// src/pages/index.js
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../utils/products";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    let updatedCart;
    if (existingProductIndex >= 0) {
      // Increase quantity of existing product
      updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Add new product with quantity 1
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to local storage
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

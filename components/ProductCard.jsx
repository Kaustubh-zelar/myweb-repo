// src/components/ProductCard.js
import Link from "next/link";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.price}>{product.price}</p>
        <div className={styles.buttons}>
          <button
            className={styles.addButton}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <Link href={`/checkout`}>
            <button className={styles.checkoutButton}>Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

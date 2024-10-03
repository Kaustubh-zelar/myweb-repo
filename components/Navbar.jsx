// src/components/Navbar.js
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = ({ cartCount }) => {
  return (
    <nav className={styles.navbar}>
      <h1>My E-Commerce Site</h1>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart ({cartCount})</Link>{" "}
        {/* Display cart count here */}
        <Link href="/checkout">Checkout</Link>
      </div>
    </nav>
  );
};

export default Navbar;

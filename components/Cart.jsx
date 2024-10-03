const Cart = ({ cart, removeFromCart }) => {
  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

import { useEffect, useState } from "react";
import "../Styles/cart.css";
import PropTypes from "prop-types";
import Payment from "./Payment";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    const handlePrice = () => {
      let ans = 0;
      cart.forEach((item) => {
        ans += item.amount * item.price;
      });
      setPrice(ans);
    };

    handlePrice();
  }, [cart]);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handlePaymentSubmit = () => {
    alert(`Details submitted successfully.`);
  };

  return (
    <article>
      {cart?.map((item) => (
        <div className="cart-box" key={item.id}>
          <div className="cart-img">
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
          <div>
            <button
              onClick={() => {
                handleChange(item, +1);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                handleChange(item, -1);
              }}
            >
              -
            </button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>
          Total price of your cart: <span>Rs:{price}</span>
        </span>
      </div>
      <button onClick={toggleForm}>Proceed</button>
      {showForm && (
        <Payment
          onPaymentSubmit={(formData) => handlePaymentSubmit(formData)}
        />
      )}
    </article>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Cart;

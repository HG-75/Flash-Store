import { useState } from "react";
import PropTypes from "prop-types";
import "../Styles/Payment.css";

const PaymentForm = ({ onPaymentSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onPaymentSubmit(formData);
    setFormSubmitted(true);
  };

  return (
    <div className={`payment-form ${formSubmitted ? "hidden" : ""}`}>
      <h2>Payment and Shipping Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Shipping Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Credit Card Number:</label>
          <input
            type="number"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="date"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="number"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

PaymentForm.propTypes = {
  onPaymentSubmit: PropTypes.func,
};

export default PaymentForm;

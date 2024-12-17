import React, { useState } from "react";
import { Icon } from "@iconify/react";
interface PaymentFormProps {
  onPayment: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onPayment }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [formErrors, setFormErrors] = useState({
    cardNumber: false,
    expiryDate: false,
    cvv: false,
    cardholderName: false,
  });

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCardNumber(value);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }
    setExpiryDate(value);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCvv(value);
  };

  const handleCardholderNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/[0-9]/g, "");
    setCardholderName(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = {
      cardNumber: cardNumber.length !== 16,
      expiryDate: !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate),
      cvv: cvv.length !== 3,
      cardholderName: cardholderName.length < 3,
    };
    setFormErrors(errors);
    if (Object.values(errors).some((error) => error)) {
      return;
    }
    onPayment();
  };

  return (
    <div className="payment-wrapper">
      <div className="payment-header">
        <div className="payment-title">
          <h2>Payment Details</h2>
        </div>
      </div>
      <div className="payment-details">
        <div className="credit-card">
          <div className="card-front">
            <div className="chip"></div>
            <div className="card-number">
              {cardNumber || "**** **** **** ****"}
            </div>
            <div className="cardholder-name">
              {cardholderName || "Cardholder"}
            </div>
            <div className="expiry">{expiryDate || "MM/YY"}</div>
            <div className="cvv">{cvv || "***"}</div>
          </div>
        </div>
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-group input-container">
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className={`floating-input ${
                formErrors.cardNumber ? "error" : ""
              }`}
              placeholder=" "
              maxLength={16}
            />
            <label htmlFor="cardNumber" className="floating-label">
              Card Number
            </label>
            {formErrors.cardNumber && (
              <p className="error-message">Card number must be 16 digits.</p>
            )}
          </div>
          <div className="form-row">
            <div className="form-group input-container">
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                className={`floating-input ${
                  formErrors.expiryDate ? "error" : ""
                }`}
                placeholder=" "
              />
              <label htmlFor="expiryDate" className="floating-label">
                Expiry Date
              </label>
              {formErrors.expiryDate && (
                <p className="error-message">
                  Expiry date must be in MM/YY format.
                </p>
              )}
            </div>
            <div className="form-group input-container">
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={handleCvvChange}
                className={`floating-input ${formErrors.cvv ? "error" : ""}`}
                placeholder=" "
              />
              <label htmlFor="cvv" className="floating-label">
                CVV
              </label>
              {formErrors.cvv && (
                <p className="error-message">CVV must be 3 digits.</p>
              )}
            </div>
          </div>
          <div className="form-group input-container">
            <input
              type="text"
              id="cardholderName"
              value={cardholderName}
              onChange={handleCardholderNameChange}
              className={`floating-input ${
                formErrors.cardholderName ? "error" : ""
              }`}
              placeholder=" "
            />
            <label htmlFor="cardholderName" className="floating-label">
              Cardholder Name
            </label>
            {formErrors.cardholderName && (
              <p className="error-message">
                Cardholder name must be at least 3 characters.
              </p>
            )}
          </div>
          <button type="submit" className="pay-button">
            <Icon icon="fluent-emoji-high-contrast:money-bag" />
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;

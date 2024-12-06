"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import "./styles/Reservation.scss";

const ReservationPage = () => {
  const searchParams = useSearchParams();
  const outboundFlight = searchParams.get("outboundFlight");
  const returnFlight = searchParams.get("returnFlight");
  const outboundFlightData = outboundFlight ? JSON.parse(outboundFlight) : null;
  const returnFlightData = returnFlight ? JSON.parse(returnFlight) : null;
  const [showPopup, setShowPopup] = useState(false);
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
    setShowPopup(true);
  };

  return (
    <div className="reservation-page">
      {showPopup && (
        <div className="reservation-popup">
          <div className="reservation-popup-content">
            <h2 className="reservation-popup-title">Payment Alert</h2>
            <p className="reservation-popup-message">
              This project is currently in under development. Payment processing
              and subsequent steps are not functional at this time. We value
              your feedback as we continue to improve!
            </p>
            <button
              className="reservation-popup-close"
              onClick={() => setShowPopup(false)}
            >
              Got it
            </button>
          </div>
        </div>
      )}
      <h1 className="reservation-title">Reservation Summary</h1>
      {outboundFlightData && (
        <div className="reservation-card">
          <div className="reservation-header">
            <h2 className="reservation-title">Outbound Flight</h2>
            <span className="reservation-price">
              ${outboundFlightData.totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="reservation-details">
            <p>
              <strong>{outboundFlightData.airline}</strong> -{" "}
              {outboundFlightData.flightNumber}
            </p>
            <p>
              From <strong>{outboundFlightData.from}</strong> to{" "}
              <strong>{outboundFlightData.to}</strong>
            </p>
            <p>
              Departure:{" "}
              <strong>
                {new Date(outboundFlightData.departureTime).toLocaleString()}
              </strong>
            </p>
            <p>
              Arrival:{" "}
              <strong>
                {new Date(outboundFlightData.arrivalTime).toLocaleString()}
              </strong>
            </p>
            <p>Class: {outboundFlightData.class}</p>
            <p>Passengers: {outboundFlightData.passengers}</p>
          </div>
        </div>
      )}
      {returnFlightData && (
        <div className="reservation-card">
          <div className="reservation-header">
            <h2 className="reservation-title">Return Flight</h2>
            <span className="reservation-price">
              ${returnFlightData.totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="reservation-details">
            <p>
              <strong>{returnFlightData.airline}</strong> -{" "}
              {returnFlightData.flightNumber}
            </p>
            <p>
              From <strong>{returnFlightData.from}</strong> to{" "}
              <strong>{returnFlightData.to}</strong>
            </p>
            <p>
              Departure:{" "}
              <strong>
                {new Date(returnFlightData.departureTime).toLocaleString()}
              </strong>
            </p>
            <p>
              Arrival:{" "}
              <strong>
                {new Date(returnFlightData.arrivalTime).toLocaleString()}
              </strong>
            </p>
            <p>Class: {returnFlightData.class}</p>
            <p>Passengers: {returnFlightData.passengers}</p>
          </div>
        </div>
      )}
      {!outboundFlightData && !returnFlightData && (
        <p className="reservation-no-data">No flight information available.</p>
      )}
      <div className="payment-section">
        <h2 className="payment-title">Credit Card Payment</h2>
        <div className="credit-card">
          <div className="card-front">
            <div className="chip"></div>
            <div className="card-number">
              {cardNumber || "**** **** **** ****"}
            </div>
            <div className="card-holder">{cardholderName || "Cardholder"}</div>
            <div className="expiration">{expiryDate || "MM/YY"}</div>
            <div className="cvv">{cvv || "***"}</div>
          </div>
        </div>
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              maxLength={16}
              value={cardNumber}
              onChange={handleCardNumberChange}
              className={formErrors.cardNumber ? "error" : ""}
            />
            {formErrors.cardNumber && (
              <p className="error-message">Card number must be 16 digits.</p>
            )}
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                className={formErrors.expiryDate ? "error" : ""}
              />
              {formErrors.expiryDate && (
                <p className="error-message">
                  Expiry date must be in MM/YY format.
                </p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                maxLength={3}
                value={cvv}
                onChange={handleCvvChange}
                className={formErrors.cvv ? "error" : ""}
              />
              {formErrors.cvv && (
                <p className="error-message">CVV must be 3 digits.</p>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="cardholderName">Cardholder Name</label>
            <input
              type="text"
              id="cardholderName"
              placeholder="John Doe"
              value={cardholderName}
              onChange={handleCardholderNameChange}
              className={formErrors.cardholderName ? "error" : ""}
            />
            {formErrors.cardholderName && (
              <p className="error-message">
                Cardholder name must be at least 3 characters.
              </p>
            )}
          </div>
          <button type="submit" className="pay-button">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationPage;

"use client";

import React, { useState } from "react";
import SuccessMessage from "./components/SuccessMessage";
import ErrorMessage from "./components/ErrorMessage";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Please enter your email address");
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
    } else {
      setIsSubmitted(true);
      setError("");
    }
  };

  return (
    <div className="footer-newsletter">
      {isSubmitted && (
        <SuccessMessage message="Thank you! You've subscribed to our newsletter." />
      )}
      <h3 className="title">Subscribe to Our Newsletter</h3>
      <p className="description">
        Enter your email address to receive updates and special offers.
      </p>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <button type="submit" className="submitButton">
          Subscribe
        </button>
      </form>
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default Newsletter;

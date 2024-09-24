"use client";

import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [tooltipContent, setTooltipContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setTooltipContent("Please enter your email address");
    } else {
      setIsSubmitted(true);
      setEmail("");
      setTooltipContent("Success!");
      setTimeout(() => {
        setTooltipContent("");
      }, 2000);
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <p>Thank you! You&apos;ve subscribed to our newsletter.</p>
      ) : (
        <>
          <h3>Subscribe to Our Newsletter</h3>
          <p>Enter your email address to receive updates and special offers.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              data-tooltip-id="newsletter-tooltip"
              data-tooltip-content={tooltipContent}
              data-tooltip-place="top"
            >
              Subscribe
            </button>
            <Tooltip id="newsletter-tooltip" place="top" />
          </form>
        </>
      )}
    </div>
  );
};

export default Newsletter;

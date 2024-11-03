"use client";

import { useState, useEffect } from "react";
import { alertData } from "@/data/alertData";
import { AlertItem } from "@/types/types";
import { Icon } from "@iconify/react";

const Alert: React.FC = () => {
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const filteredAlerts: AlertItem[] = alertData.filter(
    (alert) => alert.headerShow === 1
  );

  useEffect(() => {
    if (filteredAlerts.length > 0 && isVisible) {
      const interval = setInterval(() => {
        setCurrentAlertIndex(
          (prevIndex) => (prevIndex + 1) % filteredAlerts.length
        );
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isVisible, filteredAlerts.length]);

  const handlePrev = () => {
    setCurrentAlertIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredAlerts.length) % filteredAlerts.length
    );
  };

  const handleNext = () => {
    setCurrentAlertIndex(
      (prevIndex) => (prevIndex + 1) % filteredAlerts.length
    );
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || filteredAlerts.length === 0) return null;

  return (
    <div className="alert">
      <div className="container">
        <div className="alert-content">
          <div className="alert-item">
            <div className="alert-icon">
              <Icon icon="fluent:alert-on-16-filled" />
            </div>
            <div className="alert-details">
              <p className="alert-date">
                {filteredAlerts[currentAlertIndex].date}
              </p>
              <h4 className="alert-title">
                {filteredAlerts[currentAlertIndex].title}
              </h4>
              <p className="alert-description">
                {filteredAlerts[currentAlertIndex].content}
              </p>
            </div>
          </div>
          <div className="alert-navigation">
            <div className="navigation-buttons">
              {filteredAlerts.length > 1 && (
                <>
                  <button onClick={handlePrev} className="prev-button">
                    <Icon icon="mingcute:left-fill" />
                  </button>
                  <button onClick={handleNext} className="next-button">
                    <Icon icon="mingcute:right-fill" />
                  </button>
                </>
              )}
            </div>
            <div className="alert-button-group">
              <div className="alert-link">
                {filteredAlerts[currentAlertIndex].link && (
                  <a
                    href={filteredAlerts[currentAlertIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="more-button"
                  >
                    <p>
                      <span className="plus">+</span>
                      <span className="more">More</span>
                    </p>
                  </a>
                )}
              </div>
              <button onClick={handleClose} className="close-button">
                <Icon icon="mdi:cancel-bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;

import { useState, useEffect } from "react";
import { alertData } from "@/data/alertData";
import { AlertItem } from "@/types/types";
import { Icon } from "@iconify/react";

const AlertComponent: React.FC = () => {
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const filteredAlerts: AlertItem[] = alertData.filter(
    (alert) => alert.headerShow === 1
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (isVisible) {
        setCurrentAlertIndex(
          (prevIndex) => (prevIndex + 1) % filteredAlerts.length
        );
      }
    }, 5000);
    return () => clearInterval(interval);
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

  if (!isVisible) return null;

  return (
    <div className="alert-container">
      {filteredAlerts.length > 0 ? (
        <div className="alert-content">
          <Icon icon="fluent:alert-on-16-filled" />
          <h4>{filteredAlerts[currentAlertIndex].title}</h4>
          <p>{filteredAlerts[currentAlertIndex].content}</p>
          <p className="alert-date">{filteredAlerts[currentAlertIndex].date}</p>
          <button onClick={handleClose} className="close-button">
            ✖
          </button>
          <div className="navigation-buttons">
            {filteredAlerts.length > 1 && (
              <>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
              </>
            )}
          </div>
          {filteredAlerts[currentAlertIndex].link && (
            <a
              href={filteredAlerts[currentAlertIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="more-button"
            >
              More
            </a>
          )}
        </div>
      ) : (
        <div>No alerts available.</div>
      )}
    </div>
  );
};

export default AlertComponent;

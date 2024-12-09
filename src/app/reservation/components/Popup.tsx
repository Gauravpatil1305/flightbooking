import React from "react";

interface PopupProps {
  title: string;
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, message, onClose }) => {
  return (
    <div className="reservation-popup">
      <div className="reservation-popup-content">
        <h2 className="reservation-popup-title">{title}</h2>
        <p className="reservation-popup-message">{message}</p>
        <button className="reservation-popup-close" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
};

export default Popup;

import React from "react";

interface PNRCodeProps {
  PNRCodeInput: string;
  setPNRCodeInput: (value: string) => void;
}

const PNRCode: React.FC<PNRCodeProps> = ({ PNRCodeInput, setPNRCodeInput }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={PNRCodeInput}
        onChange={(e) => setPNRCodeInput(e.target.value)}
        placeholder=" "
        className="floating-input"
        id="PNRCodeInput"
      />
      <label htmlFor="PNRCodeInput" className="floating-label">
        Reservation (PNR) Number
      </label>
    </div>
  );
};

export default PNRCode;

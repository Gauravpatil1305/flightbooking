import React from "react";

interface FlightNumberProps {
  flightNumber: string;
  setFlightNumber: (value: string) => void;
}

const FlightNumber: React.FC<FlightNumberProps> = ({
  flightNumber,
  setFlightNumber,
}) => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
        placeholder=" "
        className="floating-input"
        id="flightNumber"
      />
      <label htmlFor="flightNumber" className="floating-label">
        Flight Number
      </label>
    </div>
  );
};

export default FlightNumber;

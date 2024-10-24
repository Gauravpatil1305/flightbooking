import React from "react";

interface PassengerCountProps {
  passengerCount: number;
  setPassengerCount: (value: number) => void;
}

const PassengerCount: React.FC<PassengerCountProps> = ({
  passengerCount,
  setPassengerCount,
}) => {
  return (
    <div className="input-container">
      <input
        type="number"
        value={passengerCount}
        min="1"
        onChange={(e) => setPassengerCount(Number(e.target.value))}
        placeholder=" "
        className="floating-input"
        id="passengerCount"
      />
      <label htmlFor="passengerCount" className="floating-label">
        Passenger Count
      </label>
    </div>
  );
};

export default PassengerCount;

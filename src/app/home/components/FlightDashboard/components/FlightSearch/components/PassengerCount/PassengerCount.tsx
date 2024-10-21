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
    <div>
      <label>
        Passenger Count:
        <input
          type="number"
          value={passengerCount}
          min="1"
          onChange={(e) => setPassengerCount(Number(e.target.value))}
        />
      </label>
    </div>
  );
};

export default PassengerCount;

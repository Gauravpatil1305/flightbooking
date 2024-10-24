import React from "react";

interface DepartureDateProps {
  departureDate: string;
  setDepartureDate: (value: string) => void;
}

const DepartureDate: React.FC<DepartureDateProps> = ({
  departureDate,
  setDepartureDate,
}) => {
  return (
    <div className="input-container">
      <input
        type="date"
        value={departureDate}
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => setDepartureDate(e.target.value)}
        placeholder=" "
        className="floating-input"
        id="departureDate"
      />
      <label htmlFor="departureDate" className="floating-label">
        Departure Date
      </label>
    </div>
  );
};

export default DepartureDate;

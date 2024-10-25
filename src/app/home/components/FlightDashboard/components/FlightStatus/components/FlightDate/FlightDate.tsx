import React from "react";

interface FlightDateProps {
  date: string;
  setDate: (value: string) => void;
}

const FlightDate: React.FC<FlightDateProps> = ({ date, setDate }) => {
  return (
    <div className="input-container">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="floating-input"
        id="flightDate"
        min={new Date().toISOString().split("T")[0]}
      />
      <label htmlFor="flightDate" className="floating-label">
        Date
      </label>
    </div>
  );
};

export default FlightDate;

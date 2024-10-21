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
    <div>
      <label>
        Departure Date:
        <input
          type="date"
          value={departureDate}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </label>
    </div>
  );
};

export default DepartureDate;

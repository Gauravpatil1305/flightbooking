import React from "react";

interface TripTypeProps {
  tripType: string;
  setTripType: (value: string) => void;
}

const TripType: React.FC<TripTypeProps> = ({ tripType, setTripType }) => {
  return (
    <div>
      <label>
        Trip Type:
        <select value={tripType} onChange={(e) => setTripType(e.target.value)}>
          <option value="roundtrip">Round Trip</option>
          <option value="oneway">One Way</option>
        </select>
      </label>
    </div>
  );
};

export default TripType;

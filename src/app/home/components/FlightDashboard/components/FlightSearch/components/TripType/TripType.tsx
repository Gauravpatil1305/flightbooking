import React from "react";

interface TripTypeProps {
  tripType: string;
  setTripType: (value: string) => void;
}

const TripType: React.FC<TripTypeProps> = ({ tripType, setTripType }) => {
  const isRoundTrip = tripType === "roundtrip";

  return (
    <div className="toggle-container">
      <div
        className={`toggle-bg ${isRoundTrip ? "toggle-left" : "toggle-right"}`}
      >
        <div className="toggle-text">
          {isRoundTrip ? "Round Trip" : "One Way"}
        </div>
      </div>
      <div className="toggle-options">
        <span
          className={`option option-trip ${isRoundTrip ? "active" : ""}`}
          onClick={() => setTripType("roundtrip")}
        >
          Round Trip
        </span>
        <span
          className={`option option-one ${!isRoundTrip ? "active" : ""}`}
          onClick={() => setTripType("oneway")}
        >
          One Way
        </span>
      </div>
    </div>
  );
};

export default TripType;

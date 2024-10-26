import React, { useEffect } from "react";

interface ArrivalTimeProps {
  arrivalTime: string;
  setArrivalTime: (value: string) => void;
}

const ArrivalTime: React.FC<ArrivalTimeProps> = ({
  arrivalTime,
  setArrivalTime,
}) => {
  useEffect(() => {
    if (!arrivalTime) {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5);
      setArrivalTime(currentTime);
    }
  }, [arrivalTime, setArrivalTime]);

  return (
    <div className="input-container">
      <input
        type="time"
        value={arrivalTime}
        onChange={(e) => setArrivalTime(e.target.value)}
        className="floating-input"
        id="arrivalTime"
      />
      <label htmlFor="arrivalTime" className="floating-label">
        Arrival Time
      </label>
    </div>
  );
};

export default ArrivalTime;

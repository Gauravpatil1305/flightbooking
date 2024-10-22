import React from "react";

interface ToCountryProps {
  toCountry: string;
  setToCountry: (value: string) => void;
}

const ToCountry: React.FC<ToCountryProps> = ({ toCountry, setToCountry }) => {
  return (
    <div>
      <input
        type="text"
        value={toCountry}
        onChange={(e) => setToCountry(e.target.value)}
        placeholder="To"
      />
    </div>
  );
};

export default ToCountry;

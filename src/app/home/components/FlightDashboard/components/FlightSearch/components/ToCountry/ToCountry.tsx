import React from "react";

interface ToCountryProps {
  toCountry: string;
  setToCountry: (value: string) => void;
}

const ToCountry: React.FC<ToCountryProps> = ({ toCountry, setToCountry }) => {
  return (
    <div>
      <label>
        To Country:
        <input
          type="text"
          value={toCountry}
          onChange={(e) => setToCountry(e.target.value)}
        />
      </label>
    </div>
  );
};

export default ToCountry;

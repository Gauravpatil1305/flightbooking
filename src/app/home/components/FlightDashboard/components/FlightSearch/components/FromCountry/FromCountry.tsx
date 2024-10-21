import React from "react";

interface FromCountryProps {
  fromCountry: string;
  setFromCountry: (value: string) => void;
}

const FromCountry: React.FC<FromCountryProps> = ({
  fromCountry,
  setFromCountry,
}) => {
  return (
    <div>
      <label>
        From Country:
        <input
          type="text"
          value={fromCountry}
          onChange={(e) => setFromCountry(e.target.value)}
        />
      </label>
    </div>
  );
};

export default FromCountry;

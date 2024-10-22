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
      <input
        type="text"
        value={fromCountry}
        onChange={(e) => setFromCountry(e.target.value)}
        placeholder="From"
      />
    </div>
  );
};

export default FromCountry;

import React from "react";

interface PNRSurnameProps {
  surname: string;
  setSurname: (value: string) => void;
}

const PNRSurname: React.FC<PNRSurnameProps> = ({ surname, setSurname }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder=" "
        className="floating-input"
        id="PNRSurnameInput"
      />
      <label htmlFor="PNRSurnameInput" className="floating-label">
        Surname
      </label>
    </div>
  );
};

export default PNRSurname;

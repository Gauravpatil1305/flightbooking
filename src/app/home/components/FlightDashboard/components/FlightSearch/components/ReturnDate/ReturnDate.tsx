import React from "react";

interface ReturnDateProps {
  returnDate: string;
  setReturnDate: (value: string) => void;
  departureDate: string;
}

const ReturnDate: React.FC<ReturnDateProps> = ({
  returnDate,
  setReturnDate,
  departureDate,
}) => {
  return (
    <div className="input-container">
      <input
        type="date"
        value={returnDate}
        min={departureDate}
        onChange={(e) => setReturnDate(e.target.value)}
        placeholder=" "
        className="floating-input"
        id="returnDate"
      />
      <label htmlFor="returnDate" className="floating-label">
        Return Date
      </label>
    </div>
  );
};

export default ReturnDate;

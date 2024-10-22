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
    <div>
      <label>
        Return Date:
        <input
          type="date"
          value={returnDate}
          min={departureDate}
          onChange={(e) => setReturnDate(e.target.value)}
          placeholder="Return Date"
        />
      </label>
    </div>
  );
};

export default ReturnDate;

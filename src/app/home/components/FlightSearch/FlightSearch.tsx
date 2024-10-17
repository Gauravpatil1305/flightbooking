"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const FlightSearch = () => {
  const router = useRouter();
  const [fromCountry, setFromCountry] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [tripType, setTripType] = useState("roundtrip");
  const [passengerCount, setPassengerCount] = useState(1);

  const handleSearch = () => {
    router.push(
      `/flights?fromCountry=${fromCountry}&toCountry=${toCountry}&departureDate=${departureDate}&returnDate=${returnDate}&tripType=${tripType}&passengerCount=${passengerCount}`
    );
  };

  return (
    <div>
      <h1>Search Flights</h1>
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
      <div>
        <label>
          Departure Date:
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Return Date:
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Trip Type:
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
          >
            <option value="roundtrip">Round Trip</option>
            <option value="oneway">One Way</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Passenger Count:
          <input
            type="number"
            value={passengerCount}
            onChange={(e) => setPassengerCount(Number(e.target.value))}
            min="1"
          />
        </label>
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default FlightSearch;

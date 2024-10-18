"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const FlightSearch = () => {
  const router = useRouter();
  const [fromCountry, setFromCountry] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [tripType, setTripType] = useState("roundtrip");
  const [passengerCount, setPassengerCount] = useState(1);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDepartureDate(today);
  }, []);

  const handleSearch = () => {
    const query = `/flights?fromCountry=${fromCountry}&toCountry=${toCountry}&departureDate=${departureDate}&returnDate=${returnDate}&tripType=${tripType}&passengerCount=${passengerCount}`;

    setSearchHistory((prev) => [query, ...prev.slice(0, 2)]);

    router.push(query);
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
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </label>
      </div>
      {tripType === "roundtrip" && (
        <div>
          <label>
            Return Date:
            <input
              type="date"
              value={returnDate}
              min={departureDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </label>
        </div>
      )}
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

      {searchHistory.length > 0 && (
        <div>
          <h2>Search History</h2>
          <ul>
            {searchHistory.map((query, index) => (
              <li key={index}>{query}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;

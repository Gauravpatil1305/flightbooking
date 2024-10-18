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

    const savedHistory = localStorage.getItem("searchHistory");
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleSearch = () => {
    const query = `/flights?fromCountry=${fromCountry}&toCountry=${toCountry}&departureDate=${departureDate}&returnDate=${returnDate}&tripType=${tripType}&passengerCount=${passengerCount}`;

    const newHistory = [query, ...searchHistory].slice(0, 3);
    setSearchHistory(newHistory);
    localStorage.setItem("searchHistory", JSON.stringify(newHistory));

    router.push(query);
  };

  const handleHistoryClick = (query: string) => {
    const params = new URLSearchParams(query.split("?")[1]);
    setFromCountry(params.get("fromCountry") || "");
    setToCountry(params.get("toCountry") || "");
    setDepartureDate(params.get("departureDate") || "");
    setReturnDate(params.get("returnDate") || "");
    setTripType(params.get("tripType") || "roundtrip");
    setPassengerCount(Number(params.get("passengerCount")) || 1);
  };

  const formatSearchQuery = (query: string) => {
    const params = new URLSearchParams(query.split("?")[1]);
    const from = params.get("fromCountry");
    const to = params.get("toCountry");
    const departure = new Date(
      params.get("departureDate")!
    ).toLocaleDateString();
    const returnDateParam = params.get("returnDate");
    const returnDate = returnDateParam
      ? new Date(returnDateParam).toLocaleDateString()
      : null;
    const passengerCount = params.get("passengerCount");

    return (
      <div>
        <span>{from}</span>
        <span>{to}</span>
        <span>{departure}</span>
        {returnDate && <span>{returnDate}</span>}
        <span>{passengerCount}</span>
      </div>
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
              <li key={index} onClick={() => handleHistoryClick(query)}>
                {formatSearchQuery(query)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;

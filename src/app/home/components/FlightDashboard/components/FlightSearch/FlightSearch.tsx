"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setSearchHistory } from "@/redux/slices/flightSlice";
import FromCountry from "./components/FromCountry/FromCountry";
import ToCountry from "./components/ToCountry/ToCountry";
import DepartureDate from "./components/DepartureDate/DepartureDate";
import ReturnDate from "./components/ReturnDate/ReturnDate";
import TripType from "./components/TripType/TripType";
import PassengerCount from "./components/PassengerCount/PassengerCount";
import SearchHistory from "./components/SearchHistory/SearchHistory";

interface RootState {
  flight: {
    searchHistory: string[];
  };
}

const FlightSearch = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const storedSearchHistory = useSelector(
    (state: RootState) => state.flight.searchHistory
  );
  const [fromCountry, setFromCountry] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [tripType, setTripType] = useState("roundtrip");
  const [passengerCount, setPassengerCount] = useState(1);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDepartureDate(today);

    if (storedSearchHistory.length === 0) {
      const savedHistory = localStorage.getItem("searchHistory");
      if (savedHistory) {
        dispatch(setSearchHistory(JSON.parse(savedHistory)));
      }
    }
  }, [storedSearchHistory, dispatch]);

  const handleSearch = () => {
    const query = `/flights?fromCountry=${fromCountry}&toCountry=${toCountry}&departureDate=${departureDate}&returnDate=${returnDate}&tripType=${tripType}&passengerCount=${passengerCount}`;

    const newHistory = [query, ...storedSearchHistory].slice(0, 3);
    dispatch(setSearchHistory(newHistory));
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
      <FromCountry fromCountry={fromCountry} setFromCountry={setFromCountry} />
      <ToCountry toCountry={toCountry} setToCountry={setToCountry} />
      <DepartureDate
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
      />
      {tripType === "roundtrip" && (
        <ReturnDate
          returnDate={returnDate}
          setReturnDate={setReturnDate}
          departureDate={departureDate}
        />
      )}
      <TripType tripType={tripType} setTripType={setTripType} />
      <PassengerCount
        passengerCount={passengerCount}
        setPassengerCount={setPassengerCount}
      />
      <button onClick={handleSearch}>Search</button>

      {storedSearchHistory.length > 0 && (
        <SearchHistory
          storedSearchHistory={storedSearchHistory}
          handleHistoryClick={handleHistoryClick}
          formatSearchQuery={formatSearchQuery}
        />
      )}
    </div>
  );
};

export default FlightSearch;

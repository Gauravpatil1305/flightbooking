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
import { Icon } from "@iconify/react";

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

    const newHistory = [query, ...storedSearchHistory].slice(0, 4);
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
      <div className="search-history-item-content">
        <div className="search-history-route">
          <span className="search-history-from">{from}</span>
          <Icon icon="mdi:airplane-takeoff" className="search-history-icon" />
          <span className="search-history-to">{to}</span>
        </div>
        <div className="search-history-details">
          <div className="search-history-date">
            <span className="search-history-departure">{departure}</span>
            <Icon
              icon="mdi:calendar-expand-horizontal"
              className="search-history-date-icon"
            />
            {returnDate && (
              <span className="search-history-return">{returnDate}</span>
            )}
          </div>
          <div className="search-history-passenger">
            <span className="search-history-passenger-content">
              {passengerCount} Passenger
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flight-search-wrapper">
      <div className="flight-search">
        <div className="trip-type-selector">
          <TripType tripType={tripType} setTripType={setTripType} />
        </div>
        <div className="flight-search-fields">
          <FromCountry
            fromCountry={fromCountry}
            setFromCountry={setFromCountry}
          />
          <ToCountry toCountry={toCountry} setToCountry={setToCountry} />
          <DepartureDate
            departureDate={departureDate}
            setDepartureDate={setDepartureDate}
          />
          {tripType === "roundtrip" ? (
            <ReturnDate
              returnDate={returnDate}
              setReturnDate={setReturnDate}
              departureDate={departureDate}
            />
          ) : (
            <div
              style={{
                opacity: 0.5,
                pointerEvents: "none",
              }}
            >
              <ReturnDate
                returnDate={returnDate}
                setReturnDate={setReturnDate}
                departureDate={departureDate}
              />
            </div>
          )}
          <PassengerCount
            passengerCount={passengerCount}
            setPassengerCount={setPassengerCount}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
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

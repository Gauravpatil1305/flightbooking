import React, { useState } from "react";
import ArrivalTime from "./components/ArrivalTime/ArrivalTime";
import DepartureTime from "./components/DepartureTime/DepartureTime";
import FromCountry from "./components/FromCountry/FromCountry";
import ToCountry from "./components/ToCountry/ToCountry";
import FlightNumber from "./components/FlightNumber/FlightNumber";
import FlightDate from "./components/FlightDate/FlightDate";

import { Icon } from "@iconify/react";

const FlightStatus: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("flightNo");
  const [toCountry, setToCountry] = useState<string>("");
  const [fromCountry, setFromCountry] = useState<string>("");
  const [arrivalTime, setArrivalTime] = useState<string>("");
  const [departureTime, setDepartureTime] = useState<string>("");
  const [flightNumber, setFlightNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flight-status-wrapper">
      <div className="flight-status">
        <div className="flight-status-content">
          <div className="flight-status-dropdown-wrapper">
            <div className="input-container">
              <select
                className="flight-status-dropdown"
                onChange={handleOptionChange}
                value={selectedOption}
              >
                <option value="arrival">Arrival</option>
                <option value="departure">Departure</option>
                <option value="flightNo">Flight No</option>
                <option value="route">Route</option>
              </select>
            </div>
          </div>
          {selectedOption === "arrival" && (
            <div className="flight-status-arrival">
              <ToCountry toCountry={toCountry} setToCountry={setToCountry} />
              <ArrivalTime
                arrivalTime={arrivalTime}
                setArrivalTime={setArrivalTime}
              />
              <FlightDate date={date} setDate={setDate} />
            </div>
          )}
          {selectedOption === "departure" && (
            <div className="flight-status-departure">
              <FromCountry
                fromCountry={fromCountry}
                setFromCountry={setFromCountry}
              />
              <DepartureTime
                departureTime={departureTime}
                setDepartureTime={setDepartureTime}
              />
              <FlightDate date={date} setDate={setDate} />
            </div>
          )}
          {selectedOption === "flightNo" && (
            <div className="flight-status-flightNo">
              <FlightNumber
                flightNumber={flightNumber}
                setFlightNumber={setFlightNumber}
              />
              <FlightDate date={date} setDate={setDate} />
            </div>
          )}
          {selectedOption === "route" && (
            <div className="flight-status-route">
              <FromCountry
                fromCountry={fromCountry}
                setFromCountry={setFromCountry}
              />
              <ToCountry toCountry={toCountry} setToCountry={setToCountry} />
              <FlightDate date={date} setDate={setDate} />
            </div>
          )}
          <button className="flight-status-button">
            <Icon icon="mdi:clock-edit-outline" />
            Check Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightStatus;

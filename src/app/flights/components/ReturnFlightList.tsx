import React from "react";
import { Flight } from "@/types/typesFlight";

interface ReturnFlightListProps {
  returnFlights: Flight[];
  selectedReturnFlight: Flight | null;
  handleSelectReturnFlight: (flight: Flight) => void;
  flightClasses: string[];
  handleSelectClass: (flightType: "return", selectedClass: string) => void;
  showReturnClasses: boolean;
}

const ReturnFlightList: React.FC<ReturnFlightListProps> = ({
  returnFlights,
  selectedReturnFlight,
  handleSelectReturnFlight,
  flightClasses,
  handleSelectClass,
  showReturnClasses,
}) => (
  <div className="return-wrapper">
    <h2>Return Flights</h2>
    {returnFlights.length > 0 ? (
      <ul>
        <li>
          <strong>Airline</strong> - <strong>Flight Number</strong> -{" "}
          <strong>From</strong> - <strong>To</strong> -{" "}
          <strong>Departure Time</strong> - <strong>Arrival Time</strong> -{" "}
          <strong>Price</strong> - <strong>Passengers</strong>
        </li>
        {returnFlights.map((flight, index) => (
          <li key={index} onClick={() => handleSelectReturnFlight(flight)}>
            {flight.airline} - {flight.flightNumber} - {flight.from} -{" "}
            {flight.to} - {new Date(flight.departureTime).toLocaleString()} -{" "}
            {new Date(flight.arrivalTime).toLocaleString()} - $
            {flight.price.toFixed(2)} - {flight.passengers} passengers
            {selectedReturnFlight === flight && showReturnClasses && (
              <div>
                <h4>Select Class:</h4>
                {flightClasses.map((cls) => (
                  <button
                    key={cls}
                    onClick={() => handleSelectClass("return", cls)}
                  >
                    {cls} - $
                    {(flight.price * flightClasses.indexOf(cls)).toFixed(2)}
                  </button>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    ) : (
      <p>No return flights found.</p>
    )}
  </div>
);

export default ReturnFlightList;

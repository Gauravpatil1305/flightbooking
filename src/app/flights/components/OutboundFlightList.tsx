import React from "react";
import { Flight } from "@/types/typesFlight";

interface OutboundFlightListProps {
  outboundFlights: Flight[];
  selectedOutboundFlight: Flight | null;
  handleSelectOutboundFlight: (flight: Flight) => void;
  flightClasses: string[];
  handleSelectClass: (flightType: "outbound", selectedClass: string) => void;
  showOutboundClasses: boolean;
}

const OutboundFlightList: React.FC<OutboundFlightListProps> = ({
  outboundFlights,
  selectedOutboundFlight,
  handleSelectOutboundFlight,
  flightClasses,
  handleSelectClass,
  showOutboundClasses,
}) => (
  <div className="departure-wrapper">
    <h2>Outbound Flights</h2>
    {outboundFlights.length > 0 ? (
      <ul>
        <li>
          <strong>Airline</strong> - <strong>Flight Number</strong> -{" "}
          <strong>From</strong> - <strong>To</strong> -{" "}
          <strong>Departure Time</strong> - <strong>Arrival Time</strong> -{" "}
          <strong>Price</strong> - <strong>Passengers</strong>
        </li>
        {outboundFlights.map((flight, index) => (
          <li key={index} onClick={() => handleSelectOutboundFlight(flight)}>
            {flight.airline} - {flight.flightNumber} - {flight.from} -{" "}
            {flight.to} - {new Date(flight.departureTime).toLocaleString()} -{" "}
            {new Date(flight.arrivalTime).toLocaleString()} - $
            {flight.price.toFixed(2)} - {flight.passengers} passengers
            {selectedOutboundFlight === flight && showOutboundClasses && (
              <div>
                <h4>Select Class:</h4>
                {flightClasses.map((cls) => (
                  <button
                    key={cls}
                    onClick={() => handleSelectClass("outbound", cls)}
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
      <p>No outbound flights found.</p>
    )}
  </div>
);

export default OutboundFlightList;

"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const Reservation = () => {
  const searchParams = useSearchParams();
  const outboundFlight = searchParams.get("outboundFlight");
  const returnFlight = searchParams.get("returnFlight");

  const outboundFlightData = outboundFlight ? JSON.parse(outboundFlight) : null;
  const returnFlightData = returnFlight ? JSON.parse(returnFlight) : null;

  return (
    <div>
      <h1>Reservation Summary</h1>

      {outboundFlightData && (
        <div>
          <h2>Outbound Flight</h2>
          <p>
            {outboundFlightData.airline} - {outboundFlightData.flightNumber}{" "}
            from {outboundFlightData.from} to {outboundFlightData.to}
          </p>
          <p>
            Departure:{" "}
            {new Date(outboundFlightData.departureTime).toLocaleString()}
          </p>
          <p>
            Arrival: {new Date(outboundFlightData.arrivalTime).toLocaleString()}
          </p>
          <p>Class: {outboundFlightData.class}</p>
          <p>Price: ${outboundFlightData.totalPrice.toFixed(2)}</p>
          <p>Passengers: {outboundFlightData.passengers}</p>
        </div>
      )}

      {returnFlightData && (
        <div>
          <h2>Return Flight</h2>
          <p>
            {returnFlightData.airline} - {returnFlightData.flightNumber} from{" "}
            {returnFlightData.from} to {returnFlightData.to}
          </p>
          <p>
            Departure:{" "}
            {new Date(returnFlightData.departureTime).toLocaleString()}
          </p>
          <p>
            Arrival: {new Date(returnFlightData.arrivalTime).toLocaleString()}
          </p>
          <p>Class: {returnFlightData.class}</p>
          <p>Price: ${returnFlightData.totalPrice.toFixed(2)}</p>
          <p>Passengers: {returnFlightData.passengers}</p>
        </div>
      )}

      {!outboundFlightData && !returnFlightData && (
        <p>No flight information available.</p>
      )}
    </div>
  );
};

export default Reservation;

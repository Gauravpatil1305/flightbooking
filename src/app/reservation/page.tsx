"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import "./styles/Reservation.scss";

const ReservationPage = () => {
  const searchParams = useSearchParams();
  const outboundFlight = searchParams.get("outboundFlight");
  const returnFlight = searchParams.get("returnFlight");

  const outboundFlightData = outboundFlight ? JSON.parse(outboundFlight) : null;
  const returnFlightData = returnFlight ? JSON.parse(returnFlight) : null;

  return (
    <div className="reservation-page">
      <h1 className="title">Reservation Summary</h1>

      {outboundFlightData && (
        <div className="reservation-card">
          <div className="header">
            <h2 className="title">Outbound Flight</h2>
            <span className="price">
              ${outboundFlightData.totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="details">
            <p>
              <strong>{outboundFlightData.airline}</strong> -{" "}
              {outboundFlightData.flightNumber}
            </p>
            <p>
              From <strong>{outboundFlightData.from}</strong> to{" "}
              <strong>{outboundFlightData.to}</strong>
            </p>
            <p>
              Departure:{" "}
              <strong>
                {new Date(outboundFlightData.departureTime).toLocaleString()}
              </strong>
            </p>
            <p>
              Arrival:{" "}
              <strong>
                {new Date(outboundFlightData.arrivalTime).toLocaleString()}
              </strong>
            </p>
            <p>Class: {outboundFlightData.class}</p>
            <p>Passengers: {outboundFlightData.passengers}</p>
          </div>
        </div>
      )}

      {returnFlightData && (
        <div className="reservation-card">
          <div className="header">
            <h2 className="title">Return Flight</h2>
            <span className="price">
              ${returnFlightData.totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="details">
            <p>
              <strong>{returnFlightData.airline}</strong> -{" "}
              {returnFlightData.flightNumber}
            </p>
            <p>
              From <strong>{returnFlightData.from}</strong> to{" "}
              <strong>{returnFlightData.to}</strong>
            </p>
            <p>
              Departure:{" "}
              <strong>
                {new Date(returnFlightData.departureTime).toLocaleString()}
              </strong>
            </p>
            <p>
              Arrival:{" "}
              <strong>
                {new Date(returnFlightData.arrivalTime).toLocaleString()}
              </strong>
            </p>
            <p>Class: {returnFlightData.class}</p>
            <p>Passengers: {returnFlightData.passengers}</p>
          </div>
        </div>
      )}
      {!outboundFlightData && !returnFlightData && (
        <p className="no-data">
          No flight information available.
        </p>
      )}
    </div>
  );
};

export default ReservationPage;

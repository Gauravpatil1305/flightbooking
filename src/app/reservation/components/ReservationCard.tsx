import React from "react";
import { FlightData } from "@/types/typesFlight";

interface ReservationCardProps {
  flightData: FlightData;
  title: string;
}

const ReservationCard: React.FC<ReservationCardProps> = ({
  flightData,
  title,
}) => {
  return (
    <div className="reservation-card">
      <div className="reservation-header">
        <h2 className="reservation-title">{title}</h2>
        <span className="reservation-price">
          ${flightData.totalPrice.toFixed(2)}
        </span>
      </div>
      <div className="reservation-details">
        <p>
          <strong>{flightData.airline}</strong> - {flightData.flightNumber}
        </p>
        <p>
          From <strong>{flightData.from}</strong> to{" "}
          <strong>{flightData.to}</strong>
        </p>
        <p>
          Departure:{" "}
          <strong>{new Date(flightData.departureTime).toLocaleString()}</strong>
        </p>
        <p>
          Arrival:{" "}
          <strong>{new Date(flightData.arrivalTime).toLocaleString()}</strong>
        </p>
        <p>Class: {flightData.class}</p>
        <p>Passengers: {flightData.passengers}</p>
      </div>
    </div>
  );
};

export default ReservationCard;

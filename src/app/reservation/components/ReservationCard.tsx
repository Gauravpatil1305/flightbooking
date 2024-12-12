import React from "react";
import { FlightData } from "@/types/typesFlight";
import { Icon } from "@iconify/react";

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
        <div className="reservation-title">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="reservation-details">
        <div className="reservation-row">
          <span className="reservation-label">
            <Icon icon="mdi:airplane" className="icon" />
          </span>
          <span className="reservation-value">{flightData.airline}</span>
        </div>
        <div className="reservation-row">
          <span className="reservation-label">
            <Icon icon="mdi:ticket-outline" className="icon" />
          </span>
          <span className="reservation-value">{flightData.flightNumber}</span>
        </div>
        <div className="reservation-row">
          <span className="reservation-label">
            <Icon icon="mdi:map-marker" className="icon" />
          </span>
          <span className="reservation-value">
            {flightData.from} - {flightData.to}
          </span>
        </div>
        <div className="reservation-row">
          <span className="reservation-label">
            <Icon icon="mdi:clock-time-four-outline" className="icon" />
          </span>
          <span className="reservation-value">
            {new Date(flightData.departureTime).toLocaleString()}
          </span>
        </div>
        <div className="reservation-row">
          <span className="reservation-label">
            <Icon icon="mdi:clock-time-four-outline" className="icon" />
          </span>
          <span className="reservation-value">
            {new Date(flightData.arrivalTime).toLocaleString()}
          </span>
        </div>
        <div className="reservation-row">
          <span className="reservation-label">
            <Icon icon="mdi:currency-usd" className="icon" />
          </span>
          <span className="reservation-value">
            {flightData.totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="reservation-row">
          <span className="reservation-label">
            <Icon icon="mdi:account-group" className="icon" />
          </span>
          <span className="reservation-value">
            {flightData.passengers} Passenger
          </span>
        </div>
        <div className="reservation-row">
          <span className="reservation-label">
            <Icon icon="mdi:seat-outline" className="icon" />
          </span>
          <span className="reservation-value">{flightData.class}</span>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;

import React from "react";
import { Flight } from "@/types/typesFlight";
import { Icon } from "@iconify/react";

interface FlightSummaryProps {
  selectedOutboundFlight: Flight | null;
  selectedReturnFlight: Flight | null;
  outboundClass: string | null;
  returnClass: string | null;
  totalPrice: number;
}

const FlightSummary: React.FC<FlightSummaryProps> = ({
  selectedOutboundFlight,
  selectedReturnFlight,
  outboundClass,
  returnClass,
  totalPrice,
}) => {
  const hasSelectedFlights =
    selectedOutboundFlight &&
    outboundClass &&
    selectedReturnFlight &&
    returnClass;

  return (
    <div className="summary-wrapper">
      <div className="summary-title">
        <h2>Flight Summary</h2>
      </div>
      <div className="summary-table">
        {hasSelectedFlights ? (
          <>
            {selectedOutboundFlight && outboundClass && (
              <div className="summary-row">
                <span className="summary-label">
                  <Icon icon="mdi:airplane-takeoff" className="icon" /> Departure
                  Flight:
                </span>
                <div className="summary-value">
                  <div className="summary-item">
                    <Icon icon="mdi:airplane" className="icon" />
                    Airline: {selectedOutboundFlight.airline}
                  </div>
                  <div className="summary-item">
                    <Icon icon="mdi:ticket-outline" className="icon" />
                    Flight Number: {selectedOutboundFlight.flightNumber}
                  </div>
                  <div className="summary-item">
                    <Icon icon="mdi:map-marker" className="icon" />
                    From: {selectedOutboundFlight.from} - To:{" "}
                    {selectedOutboundFlight.to}
                  </div>
                  <div className="summary-item">
                    <Icon icon="mdi:clock-time-four-outline" className="icon" />
                    Departure:{" "}
                    {new Date(
                      selectedOutboundFlight.departureTime
                    ).toLocaleString()}
                  </div>
                  <div className="summary-item">
                    <Icon icon="mdi:clock-time-four-outline" className="icon" />
                    Arrival:{" "}
                    {new Date(
                      selectedOutboundFlight.arrivalTime
                    ).toLocaleString()}
                  </div>
                  <div className="summary-item">
                    <Icon icon="mdi:currency-usd" className="icon" />
                    Price: ${selectedOutboundFlight.price.toFixed(2)}
                  </div>
                  <div className="summary-item">
                    <Icon icon="mdi:account-group" className="icon" />
                    Passengers: {selectedOutboundFlight.passengers}
                  </div>
                  <div className="summary-item">
                    <Icon icon="mdi:seat-outline" className="icon" />
                    Class: {outboundClass}
                  </div>
                </div>
              </div>
            )}
            {selectedReturnFlight && returnClass && (
              <div className="summary-row">
                <span className="summary-label">
                  <Icon icon="mdi:airplane-landing" className="icon" /> Arrival
                  Flight:
                </span>
                <div className="summary-value">
                  <div className="summary-item">
                    <Icon icon="mdi:airplane" className="icon" />
                    Airline: {selectedReturnFlight.airline}
                  </div>
                  <div className="summary-item">
                    <Icon icon="mdi:ticket-outline" className="icon" />
                    Flight Number: {selectedReturnFlight.flightNumber}
                  </div>
                  <div className="summary-item">
                    <Icon icon="mdi:map-marker" className="icon" />
                    From: {selectedReturnFlight.from} - To:{" "}
                    {selectedReturnFlight.to}
                  </div>
                  <div className="summary-item">
                    <Icon icon="mdi:clock-time-four-outline" className="icon" />
                    Departure:{" "}
                    {new Date(
                      selectedReturnFlight.departureTime
                    ).toLocaleString()}
                  </div>
                  <div className="summary-item">
                    <Icon icon="mdi:clock-time-four-outline" className="icon" />
                    Arrival:{" "}
                    {new Date(
                      selectedReturnFlight.arrivalTime
                    ).toLocaleString()}
                  </div>
                  <div className="summary-item">
                    <Icon icon="mdi:currency-usd" className="icon" />
                    Price: ${selectedReturnFlight.price.toFixed(2)}
                  </div>
                  <div className="summary-item">
                    <Icon icon="mdi:account-group" className="icon" />
                    Passengers: {selectedReturnFlight.passengers}
                  </div>
                  <div className="summary-item">
                    <Icon icon="mdi:seat-outline" className="icon" />
                    Class: {returnClass}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="no-selection">
            <span className="message">No flights selected yet.</span>
          </div>
        )}
      </div>
      <div className="summary-row total-price">
        <span className="summary-label">
          Total Price:
        </span>
        <span className="summary-value">${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default FlightSummary;

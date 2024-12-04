import React from "react";
import { Flight } from "@/types/typesFlight";

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
                <span className="summary-label">Departure Flight:</span>
                <span className="summary-value">
                  {selectedOutboundFlight.airline} | Flight{" "}
                  {selectedOutboundFlight.flightNumber} | From{" "}
                  {selectedOutboundFlight.from} to {selectedOutboundFlight.to} |{" "}
                  {new Date(
                    selectedOutboundFlight.departureTime
                  ).toLocaleString()}{" "}
                  -{" "}
                  {new Date(
                    selectedOutboundFlight.arrivalTime
                  ).toLocaleString()}{" "}
                  | ${selectedOutboundFlight.price.toFixed(2)} |{" "}
                  {selectedOutboundFlight.passengers} passengers | Class:{" "}
                  {outboundClass}
                </span>
              </div>
            )}
            {selectedReturnFlight && returnClass && (
              <div className="summary-row">
                <span className="summary-label">Arrival Flight:</span>
                <span className="summary-value">
                  {selectedReturnFlight.airline} | Flight{" "}
                  {selectedReturnFlight.flightNumber} | From{" "}
                  {selectedReturnFlight.from} to {selectedReturnFlight.to} |{" "}
                  {new Date(
                    selectedReturnFlight.departureTime
                  ).toLocaleString()}{" "}
                  -{" "}
                  {new Date(selectedReturnFlight.arrivalTime).toLocaleString()}{" "}
                  | ${selectedReturnFlight.price.toFixed(2)} |{" "}
                  {selectedReturnFlight.passengers} passengers | Class:{" "}
                  {returnClass}
                </span>
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
        <span className="summary-label">Total Price:</span>
        <span className="summary-value">${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default FlightSummary;

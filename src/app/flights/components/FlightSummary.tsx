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
}) => (
  <div className="summary-wrapper">
    <h2>Summary</h2>
    {selectedOutboundFlight && outboundClass && (
      <div>
        <h4>Selected Outbound Flight:</h4>
        <p>
          {selectedOutboundFlight.airline} -{" "}
          {selectedOutboundFlight.flightNumber} - {selectedOutboundFlight.from}{" "}
          - {selectedOutboundFlight.to} -{" "}
          {new Date(selectedOutboundFlight.departureTime).toLocaleString()} -{" "}
          {new Date(selectedOutboundFlight.arrivalTime).toLocaleString()} - $
          {selectedOutboundFlight.price.toFixed(2)} -{" "}
          {selectedOutboundFlight.passengers} passengers - Class:{" "}
          {outboundClass}
        </p>
      </div>
    )}
    {selectedReturnFlight && returnClass && (
      <div>
        <h4>Selected Return Flight:</h4>
        <p>
          {selectedReturnFlight.airline} - {selectedReturnFlight.flightNumber} -{" "}
          {selectedReturnFlight.from} - {selectedReturnFlight.to} -{" "}
          {new Date(selectedReturnFlight.departureTime).toLocaleString()} -{" "}
          {new Date(selectedReturnFlight.arrivalTime).toLocaleString()} - $
          {selectedReturnFlight.price.toFixed(2)} -{" "}
          {selectedReturnFlight.passengers} passengers - Class: {returnClass}
        </p>
      </div>
    )}
    <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
  </div>
);

export default FlightSummary;

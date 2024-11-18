import React, { useState } from "react";
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
}) => {
  const [isClassSelectionOpen, setClassSelectionOpen] = useState(false);

  const formatDateTime = (date: string) =>
    new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(date));

  const handleClassSelect = (cls: string) => {
    handleSelectClass("outbound", cls);
    setClassSelectionOpen(false);
  };

  const toggleClassSelection = (flight: Flight) => {
    handleSelectOutboundFlight(flight);
    setClassSelectionOpen(
      selectedOutboundFlight !== flight || !isClassSelectionOpen
    );
  };

  return (
    <div className="departure-wrapper">
      <h2 className="title">Departure Flights</h2>
      {outboundFlights.length > 0 ? (
        <div className="flight-table">
          <div className="flight-table-header">
            <div>Airline</div>
            <div>Flight Number</div>
            <div>From</div>
            <div>To</div>
            <div>Departure Time</div>
            <div>Arrival Time</div>
            <div>Price</div>
            <div>Passengers</div>
          </div>
          {outboundFlights.map((flight, index) => (
            <div
              key={index}
              className={`flight-table-row ${
                selectedOutboundFlight === flight ? "selected-flight" : ""
              }`}
              onClick={() => toggleClassSelection(flight)}
            >
              <div className="flight-row-detail">
                <div>{flight.airline}</div>
                <div>{flight.flightNumber}</div>
                <div>{flight.from}</div>
                <div>{flight.to}</div>
                <div>{formatDateTime(flight.departureTime)}</div>
                <div>{formatDateTime(flight.arrivalTime)}</div>
                <div>${flight.price.toFixed(2)}</div>
                <div>{flight.passengers} Passenger</div>
              </div>
              {selectedOutboundFlight === flight &&
                isClassSelectionOpen &&
                showOutboundClasses && (
                  <div className="class-selection">
                    <h4 className="class-title">Select Class:</h4>
                    {flightClasses.map((cls) => (
                      <button
                        key={cls}
                        className="class-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClassSelect(cls);
                        }}
                      >
                        {cls} - $
                        {(
                          flight.price +
                          50 * flightClasses.indexOf(cls)
                        ).toFixed(2)}
                      </button>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>
      ) : (
        <p className="no-flights">No outbound flights found.</p>
      )}
    </div>
  );
};

export default OutboundFlightList;

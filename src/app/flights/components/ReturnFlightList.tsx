import React, { useState } from "react";
import { Flight } from "@/types/typesFlight";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

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
}) => {
  const [isClassSelectionOpen, setClassSelectionOpen] = useState(false);

  const formatDateTime = (date: string) =>
    new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(date));

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const handleClassSelect = (cls: string) => {
    handleSelectClass("return", cls);
    setClassSelectionOpen(false);
  };

  const toggleClassSelection = (flight: Flight) => {
    handleSelectReturnFlight(flight);
    setClassSelectionOpen(
      selectedReturnFlight !== flight || !isClassSelectionOpen
    );
  };

  return (
    <div className="arrival-wrapper">
      <h2 className="title">Arrival Flights</h2>
      {returnFlights.length > 0 ? (
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
          {returnFlights.map((flight, index) => (
            <div
              key={index}
              className={`flight-table-row ${
                selectedReturnFlight === flight ? "selected-flight" : ""
              }`}
              onClick={() => toggleClassSelection(flight)}
            >
              <div className="flight-row-detail">
                <div
                  data-tooltip-id={`tooltip-airline-${index}`}
                  data-tooltip-content={flight.airline}
                >
                  {truncateText(flight.airline, 15)}
                </div>
                <Tooltip id={`tooltip-airline-${index}`} place="top" />
                <div>{flight.flightNumber}</div>
                <div>{flight.from}</div>
                <div>{flight.to}</div>
                <div>{formatDateTime(flight.departureTime)}</div>
                <div>{formatDateTime(flight.arrivalTime)}</div>
                <div>${flight.price.toFixed(2)}</div>
                <div>{flight.passengers} Passenger</div>
              </div>
              {selectedReturnFlight === flight &&
                isClassSelectionOpen &&
                showReturnClasses && (
                  <div className="class-selection">
                    <h4 className="class-title">Select Class</h4>
                    <div className="classes">
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
                  </div>
                )}
            </div>
          ))}
        </div>
      ) : (
        <p className="no-flights">No return flights found.</p>
      )}
    </div>
  );
};

export default ReturnFlightList;

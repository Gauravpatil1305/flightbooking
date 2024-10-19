"use client";

import { useState } from "react";
import FlightSearch from "./components/FlightSearch/FlightSearch";
import CheckIn from "./components/CheckIn/CheckIn";
import ManageMyBooking from "./components/ManageMyBooking/ManageMyBooking";
import FlightStatus from "./components/FlightStatus/FlightStatus";

const FlightDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("searchFlights");

  const renderTabContent = () => {
    switch (activeTab) {
      case "searchFlights":
        return <FlightSearch />;
      case "checkIn":
        return <CheckIn />;
      case "manageMyBooking":
        return <ManageMyBooking />;
      case "flightStatus":
        return <FlightStatus />;
      default:
        return <FlightSearch />;
    }
  };

  return (
    <div className="flight-dashboard">
      <div className="tabs">
        <button onClick={() => setActiveTab("searchFlights")}>
          Search Flights
        </button>
        <button onClick={() => setActiveTab("checkIn")}>Check-In</button>
        <button onClick={() => setActiveTab("manageMyBooking")}>
          Manage My Booking
        </button>
        <button onClick={() => setActiveTab("flightStatus")}>
          Flight Status
        </button>
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default FlightDashboard;

"use client";

import { useState } from "react";
import FlightSearch from "./components/FlightSearch/FlightSearch";
import CheckIn from "./components/CheckIn/CheckIn";
import ManageMyBooking from "./components/ManageMyBooking/ManageMyBooking";
import FlightStatus from "./components/FlightStatus/FlightStatus";
import { Icon } from "@iconify/react";

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
      <div className="container">
        <div className="content">
          <div className="tab-wrapper">
            <div className="tabs">
              <div
                className={`tab-title ${
                  activeTab === "searchFlights" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("searchFlights")}
              >
                <Icon icon="mdi:airplane-search" /> Search Flights
              </div>
              <div
                className={`tab-title ${
                  activeTab === "checkIn" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("checkIn")}
              >
                <Icon icon="mdi:ticket-confirmation" /> Check-In
              </div>
              <div
                className={`tab-title ${
                  activeTab === "manageMyBooking" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("manageMyBooking")}
              >
                <Icon icon="mdi:airplane-cog" /> Manage My Booking
              </div>
              <div
                className={`tab-title ${
                  activeTab === "flightStatus" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("flightStatus")}
              >
                <Icon icon="mdi:clock-fast" /> Flight Status
              </div>
            </div>
            <div className="tab-content">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDashboard;

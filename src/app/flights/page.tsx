"use client";

import React from "react";
import { useSelector } from "@/redux/store";
import { RootState } from "@/redux/store";
import { Flight } from "@/types/typesFlight";

const FlightsPage = () => {
  const flights = useSelector((state: RootState) => state.flights.results);
  const loading = useSelector((state: RootState) => state.flights.loading);
  const error = useSelector((state: RootState) => state.flights.error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Flight Results</h1>
      {flights.length === 0 ? (
        <p>No flights found.</p>
      ) : (
        <ul>
          {flights.map((flight: Flight, index: number) => (
            <li key={index}>
              <p>
                <strong>Flight:</strong> {flight.callsign}
              </p>
              <p>
                <strong>Airport:</strong> {flight.origin_country}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FlightsPage;

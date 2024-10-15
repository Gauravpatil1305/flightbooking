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
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  return (
    <div>
      <h1>Uçuş Sonuçları</h1>
      {flights.length === 0 ? (
        <p>Hiçbir uçuş bulunamadı.</p>
      ) : (
        <ul>
          {flights.map((flight: Flight, index: number) => (
            <li key={index}>
              <p>
                <strong>Uçuş:</strong> {flight.callsign}
              </p>
              <p>
                <strong>Havaalanı:</strong> {flight.origin_country}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FlightsPage;

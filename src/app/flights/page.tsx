"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { faker } from "@faker-js/faker";
import { Flight } from "@/types/typesFlight";

const FlightsPage = () => {
  const searchParams = useSearchParams();
  const [outboundFlights, setOutboundFlights] = useState<Flight[]>([]);
  const [returnFlights, setReturnFlights] = useState<Flight[]>([]);

  const fromCountry = searchParams.get("fromCountry") || "Unknown Origin";
  const toCountry = searchParams.get("toCountry") || "Unknown Destination";
  const tripType = searchParams.get("tripType");
  const departureDate = searchParams.get("departureDate");
  const returnDate = searchParams.get("returnDate");
  const passengerCount = Number(searchParams.get("passengerCount"));

  useEffect(() => {
    const generateFlights = (isReturn: boolean) => {
      const flightData: Flight[] = [];
      const numberOfFlights = 5;

      for (let i = 0; i < numberOfFlights; i++) {
        flightData.push({
          airline: faker.airline.airline().name,
          flightNumber: `${
            faker.airline.airline().iataCode
          }${faker.airline.flightNumber()}`,
          departureTime: isReturn
            ? new Date(returnDate!).toISOString()
            : new Date(departureDate!).toISOString(),
          arrivalTime: isReturn
            ? new Date(
                new Date(returnDate!).getTime() + 2 * 60 * 60 * 1000
              ).toISOString()
            : new Date(
                new Date(departureDate!).getTime() + 2 * 60 * 60 * 1000
              ).toISOString(),
          from: isReturn ? toCountry : fromCountry,
          to: isReturn ? fromCountry : toCountry,
          price: faker.commerce.price(),
          passengers: passengerCount,
        });
      }

      console.log("Generated Flights:", flightData);
      if (isReturn) {
        setReturnFlights(flightData);
      } else {
        setOutboundFlights(flightData);
      }
    };

    if (fromCountry && toCountry && departureDate) {
      generateFlights(false);
      if (tripType === "roundtrip" && returnDate) {
        generateFlights(true);
      }
    }
  }, [
    fromCountry,
    toCountry,
    tripType,
    departureDate,
    returnDate,
    passengerCount,
  ]);

  return (
    <div>
      <h1>Flight Results</h1>
      <p>
        Search results for flights from {fromCountry} to {toCountry}.
      </p>

      <h2>Outbound Flights</h2>
      {outboundFlights.length > 0 ? (
        <ul>
          <li>
            <strong>Airline</strong> - <strong>Flight Number</strong> -{" "}
            <strong>From</strong> - <strong>To</strong> -{" "}
            <strong>Departure Time</strong> - <strong>Arrival Time</strong> -{" "}
            <strong>Price</strong> - <strong>Passengers</strong>
          </li>
          {outboundFlights.map((flight, index) => (
            <li key={index}>
              {flight.airline} - {flight.flightNumber} - {flight.from} -{" "}
              {flight.to} - {new Date(flight.departureTime).toLocaleString()} -{" "}
              {new Date(flight.arrivalTime).toLocaleString()} - ${flight.price}{" "}
              - {flight.passengers} passengers
            </li>
          ))}
        </ul>
      ) : (
        <p>No outbound flights found.</p>
      )}

      {tripType === "roundtrip" && (
        <>
          <h2>Return Flights</h2>
          {returnFlights.length > 0 ? (
            <ul>
              <li>
                <strong>Airline</strong> - <strong>Flight Number</strong> -{" "}
                <strong>From</strong> - <strong>To</strong> -{" "}
                <strong>Departure Time</strong> - <strong>Arrival Time</strong>{" "}
                - <strong>Price</strong> - <strong>Passengers</strong>
              </li>
              {returnFlights.map((flight, index) => (
                <li key={index}>
                  {flight.airline} - {flight.flightNumber} - {flight.from} -{" "}
                  {flight.to} -{" "}
                  {new Date(flight.departureTime).toLocaleString()} -{" "}
                  {new Date(flight.arrivalTime).toLocaleString()} - $
                  {flight.price} - {flight.passengers} passengers
                </li>
              ))}
            </ul>
          ) : (
            <p>No return flights found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default FlightsPage;

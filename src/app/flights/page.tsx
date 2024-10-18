"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { faker } from "@faker-js/faker";
import { Flight } from "@/types/typesFlight";

const FlightsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [outboundFlights, setOutboundFlights] = useState<Flight[]>([]);
  const [returnFlights, setReturnFlights] = useState<Flight[]>([]);
  const [selectedOutboundFlight, setSelectedOutboundFlight] =
    useState<Flight | null>(null);
  const [selectedReturnFlight, setSelectedReturnFlight] =
    useState<Flight | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [outboundClass, setOutboundClass] = useState<string | null>(null);
  const [returnClass, setReturnClass] = useState<string | null>(null);
  const [showOutboundClasses, setShowOutboundClasses] = useState(false);
  const [showReturnClasses, setShowReturnClasses] = useState(false);
  const [outboundFlightPrice, setOutboundFlightPrice] = useState<number>(0);
  const [returnFlightPrice, setReturnFlightPrice] = useState<number>(0);

  const flightClasses = [
    "Economy Class",
    "Premium Class",
    "Business Class",
    "First Class",
  ];
  const classPriceMultiplier = [1, 1.5, 2, 3];

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
          price: Number(faker.commerce.price()),
          passengers: passengerCount,
        });
      }

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

  const handleSelectOutboundFlight = (flight: Flight) => {
    if (selectedOutboundFlight === flight) {
      setShowOutboundClasses((prev) => !prev);
    } else {
      setSelectedOutboundFlight(flight);
      setShowOutboundClasses(true);
      setOutboundClass(null);
      setOutboundFlightPrice(flight.price);
    }
    setShowReturnClasses(false);
  };

  const handleSelectReturnFlight = (flight: Flight) => {
    if (selectedReturnFlight === flight) {
      setShowReturnClasses((prev) => !prev);
    } else {
      setSelectedReturnFlight(flight);
      setShowReturnClasses(true);
      setReturnClass(null);
      setReturnFlightPrice(flight.price);
    }
    setShowOutboundClasses(false);
  };

  const handleSelectClass = (
    flightType: "outbound" | "return",
    selectedClass: string
  ) => {
    const classIndex = flightClasses.indexOf(selectedClass);

    const currentFlightPrice =
      flightType === "outbound"
        ? selectedOutboundFlight?.price
        : selectedReturnFlight?.price;

    if (flightType === "outbound" && selectedOutboundFlight) {
      if (outboundClass === selectedClass) return;

      if (outboundClass) {
        const oldClassIndex = flightClasses.indexOf(outboundClass);
        const oldPrice =
          currentFlightPrice! * classPriceMultiplier[oldClassIndex];
        setTotalPrice((prev) => prev - oldPrice);
      }

      const newPrice = currentFlightPrice! * classPriceMultiplier[classIndex];
      setTotalPrice((prev) => prev + newPrice);
      setOutboundClass(selectedClass);
    } else if (flightType === "return" && selectedReturnFlight) {
      if (returnClass === selectedClass) return;

      if (returnClass) {
        const oldClassIndex = flightClasses.indexOf(returnClass);
        const oldPrice =
          currentFlightPrice! * classPriceMultiplier[oldClassIndex];
        setTotalPrice((prev) => prev - oldPrice);
      }

      const newPrice = currentFlightPrice! * classPriceMultiplier[classIndex];
      setTotalPrice((prev) => prev + newPrice);
      setReturnClass(selectedClass);
    }
  };

  const handleContinue = () => {
    const outboundFlightDetails = {
      ...selectedOutboundFlight,
      class: outboundClass,
      totalPrice: outboundFlightPrice
        ? outboundFlightPrice *
          (outboundClass
            ? classPriceMultiplier[flightClasses.indexOf(outboundClass)]
            : 1)
        : 0,
    };

    const returnFlightDetails = selectedReturnFlight
      ? {
          ...selectedReturnFlight,
          class: returnClass,
          totalPrice: returnFlightPrice
            ? returnFlightPrice *
              (returnClass
                ? classPriceMultiplier[flightClasses.indexOf(returnClass)]
                : 1)
            : 0,
        }
      : null;

    const queryParams = new URLSearchParams({
      outboundFlight: JSON.stringify(outboundFlightDetails),
      returnFlight: returnFlightDetails
        ? JSON.stringify(returnFlightDetails)
        : "",
    });

    router.push(`/reservation?${queryParams.toString()}`);
  };

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
            <li key={index} onClick={() => handleSelectOutboundFlight(flight)}>
              {flight.airline} - {flight.flightNumber} - {flight.from} -{" "}
              {flight.to} - {new Date(flight.departureTime).toLocaleString()} -{" "}
              {new Date(flight.arrivalTime).toLocaleString()} - $
              {flight.price.toFixed(2)} - {flight.passengers} passengers
              {selectedOutboundFlight === flight && showOutboundClasses && (
                <div>
                  <h4>Select Class:</h4>
                  {flightClasses.map((cls) => (
                    <button
                      key={cls}
                      onClick={() => handleSelectClass("outbound", cls)}
                    >
                      {cls} - $
                      {(
                        flight.price *
                        classPriceMultiplier[flightClasses.indexOf(cls)]
                      ).toFixed(2)}
                    </button>
                  ))}
                </div>
              )}
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
                <li
                  key={index}
                  onClick={() => handleSelectReturnFlight(flight)}
                >
                  {flight.airline} - {flight.flightNumber} - {flight.from} -{" "}
                  {flight.to} -{" "}
                  {new Date(flight.departureTime).toLocaleString()} -{" "}
                  {new Date(flight.arrivalTime).toLocaleString()} - $
                  {flight.price.toFixed(2)} - {flight.passengers} passengers
                  {selectedReturnFlight === flight && showReturnClasses && (
                    <div>
                      <h4>Select Class:</h4>
                      {flightClasses.map((cls) => (
                        <button
                          key={cls}
                          onClick={() => handleSelectClass("return", cls)}
                        >
                          {cls} - $
                          {(
                            flight.price *
                            classPriceMultiplier[flightClasses.indexOf(cls)]
                          ).toFixed(2)}
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No return flights found.</p>
          )}
        </>
      )}

      <h2>Summary</h2>
      {selectedOutboundFlight && outboundClass && (
        <div>
          <h4>Selected Outbound Flight:</h4>
          <p>
            {selectedOutboundFlight.airline} -{" "}
            {selectedOutboundFlight.flightNumber} -{" "}
            {selectedOutboundFlight.from} - {selectedOutboundFlight.to} -{" "}
            {new Date(selectedOutboundFlight.departureTime).toLocaleString()} -{" "}
            {new Date(selectedOutboundFlight.arrivalTime).toLocaleString()} - $
            {selectedOutboundFlight.price.toFixed(2)} -{" "}
            {selectedOutboundFlight.passengers} passengers - Class:{" "}
            {outboundClass}
          </p>
        </div>
      )}
      {tripType === "roundtrip" && selectedReturnFlight && returnClass && (
        <div>
          <h4>Selected Return Flight:</h4>
          <p>
            {selectedReturnFlight.airline} - {selectedReturnFlight.flightNumber}{" "}
            - {selectedReturnFlight.from} - {selectedReturnFlight.to} -{" "}
            {new Date(selectedReturnFlight.departureTime).toLocaleString()} -{" "}
            {new Date(selectedReturnFlight.arrivalTime).toLocaleString()} - $
            {selectedReturnFlight.price.toFixed(2)} -{" "}
            {selectedReturnFlight.passengers} passengers - Class: {returnClass}
          </p>
        </div>
      )}

      <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
      <button onClick={handleContinue}>Continue to Reservation</button>
    </div>
  );
};

export default FlightsPage;

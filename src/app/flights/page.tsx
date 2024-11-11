"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { faker } from "@faker-js/faker";
import { Flight } from "@/types/typesFlight";
import OutboundFlightList from "./components/OutboundFlightList";
import ReturnFlightList from "./components/ReturnFlightList";
import FlightSummary from "./components/FlightSummary";
import { Icon } from "@iconify/react";
import "./styles/Flights.scss";

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
    <div className="flights">
      <div className="container">
        <div className="flights-wrapper">
          <div className="flights-headline">
            <div className="trip-type">
              <span>{tripType}</span>
            </div>
            <div className="flight-route">
              <span>{fromCountry}</span>
              <Icon icon="mdi:counterclockwise-arrows" />
              <span>{toCountry}</span>
            </div>
            <div className="flight-detail">
              <div className="date">
                <div className="departure">
                  <span className="title">Departure:</span>
                  <span className="content">{departureDate}</span>
                </div>
                <div className="arrival">
                  <span className="title">Arrival:</span>
                  <span className="content">{returnDate}</span>
                </div>
              </div>
              <div className="passenger">
                <span>{passengerCount} Passenger</span>
              </div>
            </div>
          </div>

          <OutboundFlightList
            outboundFlights={outboundFlights}
            selectedOutboundFlight={selectedOutboundFlight}
            handleSelectOutboundFlight={handleSelectOutboundFlight}
            flightClasses={flightClasses}
            handleSelectClass={handleSelectClass}
            showOutboundClasses={showOutboundClasses}
          />

          {tripType === "roundtrip" && (
            <ReturnFlightList
              returnFlights={returnFlights}
              selectedReturnFlight={selectedReturnFlight}
              handleSelectReturnFlight={handleSelectReturnFlight}
              flightClasses={flightClasses}
              handleSelectClass={handleSelectClass}
              showReturnClasses={showReturnClasses}
            />
          )}

          <FlightSummary
            selectedOutboundFlight={selectedOutboundFlight}
            selectedReturnFlight={selectedReturnFlight}
            outboundClass={outboundClass}
            returnClass={returnClass}
            totalPrice={totalPrice}
          />

          <button onClick={handleContinue}>Continue to Reservation</button>
        </div>
      </div>
    </div>
  );
};

export default FlightsPage;

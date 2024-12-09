"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import "./styles/Reservation.scss";
import ReservationCard from "./components/ReservationCard";
import PaymentForm from "./components/PaymentForm";
import Popup from "./components/Popup";
import { popupMessages } from "@/data/popupMessages";
import { FlightData } from "@/types/typesFlight";

const ReservationPage: React.FC = () => {
  const searchParams = useSearchParams();
  const outboundFlight = searchParams.get("outboundFlight");
  const returnFlight = searchParams.get("returnFlight");
  const outboundFlightData: FlightData | null = outboundFlight
    ? JSON.parse(outboundFlight)
    : null;
  const returnFlightData: FlightData | null = returnFlight
    ? JSON.parse(returnFlight)
    : null;

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="reservation">
      <div className="container">
        <div className="headline">
          <div className="title">Reservation</div>
          <div className="description">
            Review your selected flights, provide payment details, and complete
            your booking with ease.
          </div>
        </div>
        <div className="flights-wrapper">
          {outboundFlightData && (
            <ReservationCard
              flightData={outboundFlightData}
              title="Departure Flight"
            />
          )}
          {returnFlightData && (
            <ReservationCard
              flightData={returnFlightData}
              title="Arrival Flight"
            />
          )}
          {!outboundFlightData && !returnFlightData && (
            <p className="reservation-no-data">
              No flight information available.
            </p>
          )}
        </div>

        <PaymentForm onPayment={() => setShowPopup(true)} />
        {showPopup && (
          <Popup
            title={popupMessages.paymentAlert.title}
            message={popupMessages.paymentAlert.message}
            onClose={() => setShowPopup(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ReservationPage;

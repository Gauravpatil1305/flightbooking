"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFlights } from "@/redux/slices/flightSlice";
import { useRouter } from "next/navigation";
import type { AppDispatch } from "@/redux/store";

const FlightSearch = () => {
  const [airport, setAirport] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (airport.trim() === "") {
      alert("Please enter the airport code!");
      return;
    }

    try {
      await dispatch(fetchFlights(airport)).unwrap();
      router.push("/flights");
    } catch (error) {
      console.error("Flight search error:", error);
      alert("An error occurred while searching for flights. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Airport Code"
          value={airport}
          onChange={(e) => setAirport(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default FlightSearch;

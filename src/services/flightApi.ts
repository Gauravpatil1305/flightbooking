import { Flight, FlightSearch } from "@/types/typesFlight";

const BASE_URL = "https://opensky-network.org/api";

export const getFlights = async (airport: string) => {
  const response = await fetch(`${BASE_URL}/states/all`);

  if (!response.ok) {
    const errorData = await response.json();
    console.error(errorData);
    throw new Error("Uçuşlar alınamadı.");
  }

  const data: FlightSearch = await response.json();

  const filteredFlights = data.states.filter(
    (flight: Flight) => flight.origin_country === airport
  );

  return filteredFlights;
};

export interface Flight {
  airline: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  from: string;
  to: string;
  price: string;
  passengers: number;
}

export interface RawFlightData {
  icao24: string;
  callsign: string;
  origin_country: string;
  destination_country?: string | null;
  time_position?: number | null;
  last_contact?: number | null;
  longitude?: number | null;
  latitude?: number | null;
  baro_altitude?: number | null;
  vertical_rate?: number | null;
  speed?: number | null;
  heading?: number | null;
  squawk?: string | null;
  is_on_ground: boolean;
  timestamp?: number | null;
  aircraft_type?: "narrowbody" | "regional" | "widebody";
  geo_altitude?: number | null;
}

export interface FlightSearch {
  states: Flight[]; // Array of flight states
}

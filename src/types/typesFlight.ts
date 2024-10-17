export interface Flight {
  icao24: string; // The ICAO24 code of the flight
  callsign: string; // The flight call sign (with airline code and flight number)
  origin_country: string; // The country of origin for the flight (departure airport)
  destination_country: string; // The country of destination for the flight (destination airport)
  aircraft_type: "narrowbody" | "regional" | "widebody"; // The type of aircraft
  airplane: {
    name: string; // The name of the airplane model
    iataTypeCode: string; // IATA type code of the airplane
  };
  seat: string; // The seat number for the flight (random seat)
  record_locator: string; // The reservation or booking code
  origin: string | null; // The departure location of the flight (name of the airport)
  destination: string | null; // The destination of the flight (name of the airport)
  departure: number | null; // The departure time (Unix timestamp)
  arrival: number | null; // The arrival time (Unix timestamp)
  vertical_rate: number | null; // The vertical speed of the flight
  speed: number | null; // The speed of the flight
  heading: number | null; // The heading of the flight
  longitude: number | null; // The longitude of the flight
  latitude: number | null; // The latitude of the flight
  altitude: number | null; // The altitude of the flight
  geo_altitude: number | null; // The geographical altitude of the flight
  squawk: string | null; // The transponder code of the flight
  is_on_ground: boolean; // Whether the flight is on the ground
  timestamp: number; // The time when the flight data was received (Unix timestamp)
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

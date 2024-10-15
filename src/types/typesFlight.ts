export interface Flight {
  icao24: string; // The ICAO24 code of the flight
  callsign: string; // The flight call sign
  origin_country: string; // The country of origin for the flight
  aircraft_type: string; // The type of aircraft
  origin: string | null; // The departure location of the flight
  destination: string | null; // The destination of the flight
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

export interface FlightSearch {
  states: Flight[]; // Array of flight states
}

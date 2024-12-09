export interface Flight {
  airline: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  from: string;
  to: string;
  price: number;
  passengers: number;
}

export interface FlightData {
  airline: string;
  flightNumber: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  totalPrice: number;
  class: string;
  passengers: number;
}

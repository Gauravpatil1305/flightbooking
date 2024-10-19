import { createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";
import { Flight } from "@/types/typesFlight";

export const searchFlights = createAsyncThunk(
  "flights/searchFlights",
  async ({
    from,
    to,
    departureDate,
    returnDate,
    passengerCount,
  }: {
    from: string;
    to: string;
    departureDate: string;
    returnDate?: string;
    passengerCount: number;
  }) => {
    const numberOfFlights = 5;

    const generateFlights = (isReturn: boolean) => {
      const flightData: Flight[] = [];
      for (let i = 0; i < numberOfFlights; i++) {
        flightData.push({
          airline: faker.airline.airline().name,
          flightNumber: `${
            faker.airline.airline().iataCode
          }${faker.airline.flightNumber()}`,
          departureTime: isReturn
            ? new Date(returnDate!).toISOString()
            : new Date(departureDate).toISOString(),
          arrivalTime: isReturn
            ? new Date(
                new Date(returnDate!).getTime() + 2 * 60 * 60 * 1000
              ).toISOString()
            : new Date(
                new Date(departureDate).getTime() + 2 * 60 * 60 * 1000
              ).toISOString(),
          from: isReturn ? to : from,
          to: isReturn ? from : to,
          price: Number(faker.commerce.price()),
          passengers: passengerCount,
        });
      }
      return flightData;
    };

    const outboundFlights = generateFlights(false);
    const returnFlights = returnDate ? generateFlights(true) : [];

    return { outboundFlights, returnFlights };
  }
);

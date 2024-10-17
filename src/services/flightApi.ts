import { Flight } from "@/types/typesFlight";
import { faker } from "@faker-js/faker";

const generateFakeFlight = (): Flight => {
  const aircraftType = faker.airline.aircraftType();
  return {
    icao24: faker.string.uuid(),
    callsign: `${faker.airline.airline().iataCode}${faker.airline.flightNumber({
      addLeadingZeros: true,
    })}`,
    origin_country: faker.address.country(),
    destination_country: faker.address.country(),
    aircraft_type: aircraftType,
    airplane: faker.airline.airplane(),
    seat: faker.airline.seat({ aircraftType }),
    record_locator: faker.airline.recordLocator(),
    origin: faker.airline.airport().name,
    destination: faker.airline.airport().name,
    departure: Date.now(),
    arrival: Date.now() + 2 * 60 * 60 * 1000,
    vertical_rate: faker.number.int({ min: -1000, max: 1000 }),
    speed: faker.number.int({ min: 200, max: 900 }),
    heading: faker.number.int({ min: 0, max: 360 }),
    longitude: faker.number.float({ min: -180, max: 180 }),
    latitude: faker.number.float({ min: -90, max: 90 }),
    altitude: faker.number.int({ min: 0, max: 40000 }),
    geo_altitude: faker.number.int({ min: 0, max: 40000 }),
    squawk: faker.string.alphanumeric(4),
    is_on_ground: faker.datatype.boolean(),
    timestamp: Date.now(),
  };
};

export const getFlights = async (airport: string): Promise<Flight[]> => {
  const fakeFlights: Flight[] = Array.from({ length: 10 }, generateFakeFlight);
  return fakeFlights.filter((flight) => flight.origin === airport);
};

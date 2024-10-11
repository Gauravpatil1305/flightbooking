"use client";

import React from "react";
import { useSpring, animated } from "react-spring";
import { aboutUsData } from "@/data/aboutUsData";

const AboutUs: React.FC = () => {
  const { airportsFacilities, destinations, dailyFlights, professionals } =
    aboutUsData[0];

  const animatedAirportsFacilities = useSpring({
    from: { value: 0 },
    to: { value: airportsFacilities },
    config: { duration: 2000 },
  });
  const animatedDestinations = useSpring({
    from: { value: 0 },
    to: { value: destinations },
    config: { duration: 2000 },
  });
  const animatedDailyFlights = useSpring({
    from: { value: 0 },
    to: { value: dailyFlights },
    config: { duration: 2000 },
  });
  const animatedProfessionals = useSpring({
    from: { value: 0 },
    to: { value: professionals },
    config: { duration: 2000 },
  });

  return (
    <div className="about-us-container">
      <div className="about-us-background" />
      <div className="about-us-content">
        <div className="circle">
          <animated.div>
            {animatedAirportsFacilities.value.to((val) => Math.floor(val))}
          </animated.div>
          <span>Airports Facilities</span>
        </div>
        <div className="circle">
          <animated.div>
            {animatedDestinations.value.to((val) => Math.floor(val))}
          </animated.div>
          <span>Destinations</span>
        </div>
        <div className="circle">
          <animated.div>
            {animatedDailyFlights.value.to((val) => Math.floor(val))}
          </animated.div>
          <span>Daily Flights</span>
        </div>
        <div className="circle">
          <animated.div>
            {animatedProfessionals.value.to((val) => Math.floor(val))}
          </animated.div>
          <span>Professionals</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

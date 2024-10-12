"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { aboutUsData } from "@/data/aboutUsData";

const AboutUs: React.FC = () => {
  const {
    airportsServed,
    destinations,
    dailyFlights,
    professionals,
    fleetSize,
    loyaltyMembers,
    carbonEmissionsSaved,
    partnerships,
  } = aboutUsData[0];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animatedAirportsServed = useSpring({
    from: { value: 0 },
    to: { value: isVisible ? airportsServed : 0 },
    config: { duration: 2000 },
  });

  const animatedDestinations = useSpring({
    from: { value: 0 },
    to: { value: isVisible ? destinations : 0 },
    config: { duration: 2000 },
  });

  const animatedDailyFlights = useSpring({
    from: { value: 0 },
    to: { value: isVisible ? dailyFlights : 0 },
    config: { duration: 2000 },
  });

  const animatedProfessionals = useSpring({
    from: { value: 0 },
    to: { value: isVisible ? professionals : 0 },
    config: { duration: 2000 },
  });

  const animatedFleetSize = useSpring({
    from: { value: 0 },
    to: { value: isVisible ? fleetSize : 0 },
    config: { duration: 2000 },
  });

  const animatedLoyaltyMembers = useSpring({
    from: { value: 0 },
    to: { value: isVisible ? loyaltyMembers : 0 },
    config: { duration: 2000 },
  });

  const animatedCarbonEmissionsSaved = useSpring({
    from: { value: 0 },
    to: { value: isVisible ? carbonEmissionsSaved : 0 },
    config: { duration: 2000 },
  });

  const animatedPartnerships = useSpring({
    from: { value: 0 },
    to: { value: isVisible ? partnerships : 0 },
    config: { duration: 2000 },
  });

  return (
    <div className="about-us" ref={ref}>
      <div className="about-us-background" />
      <div className="about-us-content">
        <div className="circle">
          <animated.div>
            {animatedAirportsServed.value.to((val) => Math.floor(val))}
          </animated.div>
          <span>Airports Served</span>
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
        <div className="circle">
          <animated.div>
            {animatedFleetSize.value.to((val) => Math.floor(val))}
          </animated.div>
          <span>Fleet Size</span>
        </div>
        <div className="circle">
          <animated.div>
            {animatedLoyaltyMembers.value.to((val) => Math.floor(val))}
          </animated.div>
          <span>Loyalty Program Members</span>
        </div>
        <div className="circle">
          <animated.div>
            {animatedCarbonEmissionsSaved.value.to((val) => Math.floor(val))}
          </animated.div>
          <span>Carbon Emissions Saved (tons)</span>
        </div>
        <div className="circle">
          <animated.div>
            {animatedPartnerships.value.to((val) => Math.floor(val))}
          </animated.div>
          <span>Partnerships</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

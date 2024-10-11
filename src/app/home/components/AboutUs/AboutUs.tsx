"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { aboutUsData } from "@/data/aboutUsData";

const AboutUs: React.FC = () => {
  const { airportsFacilities, destinations, dailyFlights, professionals } =
    aboutUsData[0];

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

  const animatedAirportsFacilities = useSpring({
    from: { value: 0 },
    to: { value: isVisible ? airportsFacilities : 0 },
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

  return (
    <div className="about-us" ref={ref}>
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

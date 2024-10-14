"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { PopularDestinationsRegion } from "@/types/types";
import { popularDestinationsData } from "@/data/popularDestinationsData";

const PopularDestinations: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string>(
    popularDestinationsData[0].region
  );

  const handleTabClick = (region: string) => {
    setActiveRegion(region);
  };

  const renderDestinations = (regionData: PopularDestinationsRegion) => {
    return (
      <div className="countries">
        {regionData.destinations.map((destination) => (
          <div key={destination.country} className="countryCard">
            <Icon icon="mdi:location-on-outline" className="icon" />
            <span>{destination.country}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="popularDestinations">
      <div className="container">
        <div className="headline">
          <div className="title">Popular Destinations</div>
          <div className="description">
            Uncover the world&apos;s hidden gems and start your journey to
            extraordinary experiences.
          </div>
        </div>
        <div className="content">
          <div className="tabs">
            {popularDestinationsData.map((region) => (
              <button
                key={region.region}
                className={`tab ${
                  activeRegion === region.region ? "active" : ""
                }`}
                onClick={() => handleTabClick(region.region)}
              >
                {region.region}
              </button>
            ))}
          </div>
          <div className="destinationsContainer">
            {popularDestinationsData.map(
              (region) =>
                activeRegion === region.region && renderDestinations(region)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;

import React from "react";
import Image from "next/image";
import { cabinClassData } from "@/data/cabinClassData";

const CabinClass = () => {
  return (
    <div className="cabin-class">
      <div className="container">
        <div className="headline">
          <div className="title">Cabin Classes</div>
          <div className="description">
            Choose the class that matches your style and make every journey
            unforgettable.
          </div>
        </div>
        <div className="content">
          {cabinClassData.map((cabin) => (
            <div key={cabin.title} className="cabin-card">
              <div className="cabin-content">
                <h3>{cabin.title}</h3>
                <ul>
                  {cabin.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a href={cabin.link} key={cabin.title} className="more-button">More</a>
              </div>
              <div className="cabin-image">
                <Image
                  src={cabin.image}
                  alt={cabin.title}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CabinClass;

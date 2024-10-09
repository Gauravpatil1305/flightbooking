import React from "react";
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
            <a href={cabin.link} key={cabin.title} className="cabin-card">
              <div>{cabin.title}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CabinClass;

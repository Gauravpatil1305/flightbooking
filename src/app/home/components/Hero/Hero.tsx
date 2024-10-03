"use client"

import { useState } from "react";
import Image from "next/image";
import { heroWallpapers } from "@/data/heroWallpapers";
import { Icon } from "@iconify/react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroWallpapers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroWallpapers.length - 1 : prevIndex - 1
    );
  };

  const { imagePath, country, countryFlagIcon } = heroWallpapers[currentIndex];

  return (
    <div className="hero">
      <div className="imageWrapper">
        <Image src={imagePath} alt={country} fill />
        <div className="overlay">
          <h2>{country}</h2>
          <Icon icon={countryFlagIcon} className="flagIcon" />
        </div>
      </div>
      <button className="prev" onClick={prevSlide}>
        Prev
      </button>
      <button className="next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Hero;

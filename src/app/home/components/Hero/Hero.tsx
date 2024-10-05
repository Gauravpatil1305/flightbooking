"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { heroWallpapers } from "@/data/heroWallpapers";
import { Icon } from "@iconify/react";
import { HeroWallpaper } from "@/types/types";

const shuffleArray = (array: HeroWallpaper[]): HeroWallpaper[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [shuffledWallpapers, setShuffledWallpapers] =
    useState<HeroWallpaper[]>(heroWallpapers);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const shuffled = shuffleArray(heroWallpapers);
    setShuffledWallpapers(shuffled);
    const randomIndex = Math.floor(Math.random() * shuffled.length);
    setCurrentIndex(randomIndex);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledWallpapers.length);
  }, [shuffledWallpapers.length]);

  useEffect(() => {
    if (isPlaying) {
      slideIntervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [isPlaying, nextSlide]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shuffledWallpapers.length - 1 : prevIndex - 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const { country, countryFlagIcon } = shuffledWallpapers[currentIndex];

  return (
    <div className="hero">
      <div className="imageWrapper">
        {shuffledWallpapers.map((wallpaper, index) => (
          <Image
            key={wallpaper.id}
            src={wallpaper.imagePath}
            alt={wallpaper.country}
            fill
            priority={index === 0}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
        <div className="overlay">
          <h2>{country}</h2>
          <Icon icon={countryFlagIcon} className="flagIcon" />
        </div>
      </div>
      <div className="navigation-buttons">
        <button className="prev-button" onClick={prevSlide}>
          <Icon icon="mingcute:left-fill" />
        </button>
        <button className="next-button" onClick={nextSlide}>
          <Icon icon="mingcute:right-fill" />
        </button>
        <button className="playPause-button" onClick={togglePlayPause}>
          {isPlaying ? (
            <Icon icon="mingcute:pause-fill" />
          ) : (
            <Icon icon="mingcute:play-fill" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Hero;

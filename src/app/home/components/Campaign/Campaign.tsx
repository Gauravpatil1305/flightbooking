"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Campaign: React.FC = () => {
  return (
    <div className="campaign">
      <div className="container">
        <div className="headline">
          <div className="title">Campaigns</div>
          <div className="description">
            Discover amazing deals that make your travels unforgettable.
          </div>
        </div>
        <div className="content">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            className="campaignSwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Campaign;

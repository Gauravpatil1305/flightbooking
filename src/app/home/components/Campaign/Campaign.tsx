"use client";

import React from "react";
import Image from "next/image";
import { campaigns } from "@/data/campaignData";
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
            {campaigns.map((campaign) => (
              <SwiperSlide key={campaign.id}>
                <div className="campaign-slide">
                  <a href={campaign.url}>
                    <div className="image-container">
                      <Image
                        src={campaign.imageUrl}
                        alt={campaign.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    <div className="campaign-info">
                      <h3>{campaign.title}</h3>
                      <p>{campaign.description}</p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Campaign;

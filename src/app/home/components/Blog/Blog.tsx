"use client";

import React from "react";
import Image from "next/image";
import { blogs } from "@/data/blogData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Blog: React.FC = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="headline">
          <div className="title">Blog</div>
          <div className="description">
            Discover inspiring articles and tips to enhance your travel
            experiences.
          </div>
        </div>
        <div className="content">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            className="blogSwiper"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="blog-slide">
                  <a href={blog.url}>
                    <div className="image-container">
                      <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        fill
                        objectFit="cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    <div className="blog-info">
                      <h3>{blog.title}</h3>
                      <p>{blog.description}</p>
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

export default Blog;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";

const Carousel = ({ images, displayCount = 1 }) => {
  return (
    <Swiper
      slidesPerView={displayCount}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500, // 2.5 seconds
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="w-full"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <img
            src={img}
            alt={`Slide ${index}`}
            className="w-full max-w-xs rounded-lg shadow-lg object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

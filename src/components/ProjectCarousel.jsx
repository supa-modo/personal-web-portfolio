import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

const ProjectCarousel = ({ images, type }) => {
  // Settings for the carousel
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: type === "smartphone" ? 3 : 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
  };

  return (
    <div className="mx-auto carousel-container w-[75%]">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="">
            <img
              src={img}
              alt={`Project ${index + 1}`}
              className="w-[80%] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;

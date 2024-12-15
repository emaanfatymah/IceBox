import React from "react";
import { categoriesdata } from "../categories";
import Slider from "react-slick";

function ViewCategories() {
  var settings = {
    dots: false,
    autoplay: "true",
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <h4 className="m-4">SHOP BY CATEGORY</h4>
      </div>
      <Slider {...settings} className="m-4 transition cursor-pointer">
        {categoriesdata.map((category) => (
          <>
            <div
              className="card bg-dark text-white rounded-0 border-0 transition-card"
              key={category.id}
            >
              <img
                src={category.image}
                className="card-img rounded-0 opacity-75 transition-image"
                alt="Card background"
              />
            </div>
            <div className="mt-2 d-flex justify-content-center align-items-end">
              <h6 className="card-title fw-bold">{category.title}</h6>
            </div>
          </>
        ))}
      </Slider>
    </>
  );
}

export default ViewCategories;

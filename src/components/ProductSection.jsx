import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
// import { Settings } from "lucide-react";

const ProductSection = () => {
  const productData = [
    {
      title: "Product 1",
      description: "Product 1 description",
      image: user1,
    },
    {
      title: "Product 2",
      description: "Product 2 description",
      image: user2,
    },
    {
      title: "Product 3",
      description: "Product 3 description",
      image: user4,
    },
  ];

  const carouselSettings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
  };

  return (
    <div className="w-4/5 m-auto">
      <div className="mt-20 mb-12">
        <Slider {...carouselSettings} className="custom-slider">
          {productData.map((product) => (
            <div
              key={product.title}
              className="bg-white h-[450px] text-black rounded-xl"
            >
              <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                <img
                  src={product.image}
                  className="w-44 h-44 rounded-full"
                  alt={product.title}
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{product.title}</p>
                <p className="text-center">{product.description}</p>
                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSection;

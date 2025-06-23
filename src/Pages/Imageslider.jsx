import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageSlider = () => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  // API se data fetch
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=8")
      .then((res) => setSlides(res.data))
      .catch((err) => console.error("Error fetching API:", err));
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) {
    return (
      <div className="w-full h-[25rem] flex justify-center items-center text-xl text-gray-500">
        Loading slider...
      </div>
    );
  }

  return (
    <div className="w-[75rem] h-[25rem] mt-5 mx-auto overflow-hidden rounded-xl shadow-lg bg-black">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex w-[75rem] h-[25rem] flex-shrink-0">
            {/* Left Text Content */}
            <div className="w-[45rem] pl-24 pt-16">
              <div className="flex items-center mb-5">
                <img
                  src={slide.image}
                  alt="Logo"
                  className="h-10 w-20 object-contain bg-white rounded"
                />
                <span className="ml-5 text-white text-xl font-semibold">
                  {slide.title.slice(0, 20)}...
                </span>
              </div>
              <h1 className="text-white font-bold text-5xl mb-10 leading-tight">
                ₹ {Math.floor(slide.price * 80)} <br />
                {slide.category}
              </h1>
              <span className="underline underline-offset-4 cursor-pointer text-white text-lg">
                Shop Now →
              </span>
            </div>

            {/* Right Image */}
            <div className="w-[30rem] flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-[20rem] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

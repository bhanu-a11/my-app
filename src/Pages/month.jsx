import React, { useEffect, useState } from "react";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";

const Selling = () => {
  const productImages = [
    "/maine/joystick-image1.jpg",
    "/maine/mac-image.jpg",
    "/maine/Phone-image.png",
    "/maine/shoes-image.jpg",
    "/maine/watch-image.jpg",
    "/maine/chappal-image.jpg",
    "/maine/bike-image.jpg",
    "/maine/chappal.jpg",
    "/maine/Iphone-image.jpg",
    "/maine/jeans-image.jpg",
  ];

  const products = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: 999 + i * 100,
    rating: 3 + (i % 3),
    image: productImages[i] || "",
  }));

  // Countdown timer logic
  const calculateTimeLeft = () => {
    const target = new Date();
    target.setDate(target.getDate() + 1);
    target.setHours(0, 0, 0, 0);
    const now = new Date();
    const difference = target - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className=" mt-10 pb-10 pt-10 px-10 bg-white rounded-lg shadow-md">
        {/* Header */}
        <header className="flex-col sm:flex-col sm:items-center sm:justify-between">
          <img src="/Selling/Frame 620.png" alt="Categories" className="w-32 h-16 mb-4 sm:mb-0" />
          <div className="w-full flex justify-between items-center mt-5 sm:mt-0">
            <h1 className="text-3xl font-bold text-gray-800 mt-5">Best Selling Products</h1>
            <a
              href="/all-products"
              className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-5 rounded text-sm font-semibold transition"
            >
              View All
            </a>
          </div>
        </header>

        {/* Product Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Month's Deal</h2>
          <div className="flex overflow-x-auto h-80 gap-4 pb-2 no-scrollbar">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[230px] bg-white border rounded-lg shadow-sm relative p-3 hover:shadow-lg transition-all duration-200 pt-5"
              >
                {/* Icons (top-right) */}
                <div className="absolute top-2 right-2 flex gap-2 text-gray-600">
                  <FaHeart className="hover:text-red-500 cursor-pointer text-lg" />
                  <FaEye className="hover:text-blue-500 cursor-pointer text-lg" />
                </div>

                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 mt-5 object-cover rounded-md"
                />

                {/* Name */}
                <h3 className="text-md font-semibold mt-2">{product.name}</h3>

                {/* Price & Rating */}
                <div className="flex justify-between items-center mt-1">
                  <span className="text-green-600 font-bold">₹{product.price}</span>
                  <div className="flex items-center gap-[1px] text-yellow-500 text-sm">
                    {Array.from({ length: product.rating }, (_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>

                {/* Button */}
                <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1 px-3 rounded w-full">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-1 border-black mt-10" />

      {/* Music Promo Section with Countdown */}
      <div className="flex border-2 h-90  w-250 mt-20 gap-10 ml-80 mr-20 bg-black rounded-2xl p-10">
        {/* Left Side Content */}
        <div className="w-1/2">
          <p className="text-[#00FF66] text-2xl mb-2">Categories</p>
          <h1 className="text-white font-semibold text-5xl mb-8">
            Enhance Your <br /> Music Experience
          </h1>

          {/* Circle Countdown */}
          <div className="flex gap-3 mb-6">
            {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
              <div
                key={idx}
                className="w-16 h-16 rounded-full bg-white text-black flex flex-col justify-center items-center"
              >
                <span className="text-md font-bold">
                  {timeLeft[unit]?.toString().padStart(2, "0") || "00"}
                </span>
                <span className="text-xs uppercase">{unit}</span>
              </div>
            ))}
          </div>

          <button className="bg-[#00FF66] px-10 py-2 rounded-2xl">Buy Now</button>
        </div>

        {/* Right Side Image */}
        <div className="w-1/2 flex justify-end items-center">
          <img
            src="/Category/Frame 694.png"
            alt="Selling"
            className="w-full h-auto max-h-[300px] object-contain"
          />
        </div>
      </div>
   
    </>
  );
};

export default Selling;

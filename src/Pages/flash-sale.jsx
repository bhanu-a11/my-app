import React, { useEffect, useState } from "react";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";

const Todaysecond = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 11);
    targetDate.setHours(0, 0, 0, 0);
    const now = new Date();
    const difference = targetDate - now;

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
    discount: `${10 + i}%`,
    rating: 3 + (i % 3),
    image: productImages[i] || "",
  }));

  return (
    <>
      <div className=" mt-10 pb-10 pt-10 px-10 bg-white rounded-lg shadow-md">
        {/* Header */}
        <header className=" flex-col sm:flex-row sm:items-center sm:gap-10">
        <img src="/maine/Frame 625.png" alt="Today's" className="w-30 h-15"/>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Flash Sales</h1>
            <div className="flex gap-4 sm:gap-8 text-center text-white sm:ml-10 mt-2 sm:mt-0">
              {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
                <div key={label} className="bg-black px-4 py-2 rounded-md">
                  <h1 className="text-xs">{label}</h1>
                  <h2 className="text-xl font-semibold">
                    {timeLeft[label.toLowerCase()]?.toString().padStart(2, "0") || "00"}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Product Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Today Deals</h2>

          <div className="flex overflow-x-auto h-80 gap-4 pb-2 no-scrollbar">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[230px] bg-white border rounded-lg shadow-sm relative p-3 hover:shadow-lg transition-all duration-200 pt-5"
              >
                {/* Discount Label (left) */}
                <div className="absolute left-2 top-2 bg-red-600 text-white text-xs px-2 py-1 rounded shadow">
                  {product.discount} OFF
                </div>

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

          {/* View All Products Button */}
          <div className="flex justify-center mt-6">
            <a
              href="/all-products"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded text-sm font-semibold transition"
            >
              View All Products
            </a>
          </div>
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
     {/* Horizontal Line */}
      <hr className="border-1 border-black mt-10" />
    </>
  );
};

export default Todaysecond;

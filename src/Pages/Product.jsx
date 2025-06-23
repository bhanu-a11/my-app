import React from "react";
import {
  FaHome,
  FaArrowLeft,
  FaArrowRight,
  FaAngleDoubleRight,
  FaHeart,
  FaEye,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      image: "/Product/headphone.jpg",
      price: "₹1,499",
      rating: 4,
    },
    {
      id: 2,
      name: "Smart Watch",
      image: "/Product/watch.jpg",
      price: "₹2,999",
      rating: 5,
    },
    {
      id: 3,
      name: "Stylish Shoes",
      image: "/Product/shoes-image.jpg",
      price: "₹1,899",
      rating: 3,
    },
    {
      id: 4,
      name: "Gaming Mouse",
      image: "/Product/gaming mouse.jpg",
      price: "₹799",
      rating: 4,
    },
    {
      id: 5,
      name: "Sunglasses",
      image: "/Product/sunglasses.jpg",
      price: "₹499",
      rating: 4,
    },
    {
      id: 6,
      name: "Casual Backpack",
      image: "/Product/backpack.jpg",
      price: "₹1,299",
      rating: 5,
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      image: "/Product/speaker.jpg",
      price: "₹999",
      rating: 4,
    },
    {
      id: 8,
      name: "Fitness Band",
      image: "/Product/fitnessband.jpg",
      price: "₹1,199",
      rating: 3,
    },
  ];

  return (
    <>
      <div className=" mt-10 pb-10 pt-10 px-10 bg-white rounded-lg shadow-md">
        {/* Header */}
        <header className="flex-col sm:flex-col sm:items-center sm:justify-between">
          <img
            src="/Product/Frame 619.png"
            alt="Categories"
            className="w-32 h-16 mb-4 sm:mb-0"
          />
          <div className="w-full flex justify-between items-center mt-5 sm:mt-0">
            <h1 className="text-3xl font-bold text-gray-800 mt-5">
              Explore Our Products
            </h1>

            {/* Arrows */}
            <div className="flex items-center gap-4 p-3 bg-white rounded-md shadow-lg mt-5">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shadow-md hover:bg-blue-100 cursor-pointer">
                <FaArrowLeft className="text-gray-700 text-xl hover:text-blue-600" title="Left" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shadow-md hover:bg-blue-100 cursor-pointer">
                <FaArrowRight className="text-gray-700 text-xl hover:text-blue-600" title="Right" />
              </div>
            </div>
          </div>
        </header>

        {/* Products Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
  {products.map((item) => (
    <div
      key={item.id}
      className="bg-white rounded-sm border border-gray-200 hover:shadow-md transition-all duration-200 h-[340px] flex flex-col items-center p-2"
    >
      {/* Image container (like Flipkart) */}
      <div className="h-[200px] w-full flex items-center justify-center bg-white overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Title and icons */}
      <div className="w-full mt-3 px-1 flex flex-col gap-1">
        <h2 className="text-gray-800 text-sm font-medium truncate">{item.name}</h2>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-[12px] ${
                i < item.rating ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        <p className="text-base font-bold text-gray-900">₹{item.price}</p>

        {/* Action Icons */}
        <div className="flex gap-3 mt-1">
          <FaHeart className="text-gray-600 hover:text-red-500 cursor-pointer" />
          <FaEye className="text-gray-600 hover:text-blue-500 cursor-pointer" />
        
        </div>
      </div>
    </div>
  ))}
</div>



      
      <div className="flex justify-center mt-10">
  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
    View All Products
  </button>
</div>
      </div>
      
    </>
  );
};

export default Product;

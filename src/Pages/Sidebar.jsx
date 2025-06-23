
import React from "react";
import {
  FaTshirt,
  FaMale,
  FaLaptop,
  FaCouch,
  FaPills,
  FaFutbol,
  FaBaby,
  FaShoppingBasket,
  FaHeartbeat,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-125 bg-gray-900 text-white flex flex-col p-5  rounded-3xl">
      <h2 className="text-2xl font-bold mb-10 text-center border-b border-gray-600 pb-4">Inkary</h2>

      <ul className="space-y-5">
        <li className="flex items-center space-x-3 hover:text-blue-400 cursor-pointer">
          <FaTshirt /> <span>Woman’s Fashion</span>
        </li>
        <li className="flex items-center space-x-3 hover:text-blue-400 cursor-pointer">
          <FaMale /> <span>Men’s Fashion</span>
        </li>
        <li className="flex items-center space-x-3 hover:text-blue-400 cursor-pointer">
          <FaLaptop /> <span>Electronics</span>
        </li>
        <li className="flex items-center space-x-3 hover:text-blue-400 cursor-pointer">
          <FaCouch /> <span>Home & Lifestyle</span>
        </li>
        <li className="flex items-center space-x-3 hover:text-blue-400 cursor-pointer">
          <FaPills /> <span>Medicine</span>
        </li>
        <li className="flex items-center space-x-3 hover:text-blue-400 cursor-pointer">
          <FaFutbol /> <span>Sports & Outdoor</span>
        </li>
        <li className="flex items-center space-x-3 hover:text-blue-400 cursor-pointer">
          <FaBaby /> <span>Baby’s & Toys</span>
        </li>
        <li className="flex items-center space-x-3 hover:text-blue-400 cursor-pointer">
          <FaShoppingBasket /> <span>Groceries & Pets</span>
        </li>
        <li className="flex items-center space-x-3 hover:text-blue-400 cursor-pointer">
          <FaHeartbeat /> <span>Health & Beauty</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

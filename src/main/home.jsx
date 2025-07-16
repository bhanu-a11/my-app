import React, { useState} from "react";
import { Link } from "react-router-dom";0.
import { ChevronDown, Search } from "lucide-react";
import Sidebar from "../Pages/Sidebar";
import Imageslider from "../Pages/Imageslider";
import Todaysecond from "../Pages/flash-sale";
import Categories from "../Pages/categories";
import Selling from "../Pages/month";
import Product from "../Pages/Product";
import Featured from "../Pages/Arrival";
import Servies from "../Pages/Servies";
import BottomNavigation from "../Pages/Bottom Navigation-bar";


const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      {/* Top Sale Banner
      <div className=" bg-black text-white px-4 py-2 relative flex justify-between items-center h-20">
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center ">
          <h2 className="text-amber-100 text-sm sm:text-base">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="underline cursor-pointer">ShopNow</span>
          </h2>
        </div>

        <div
          className="flex items-center gap-1 text-amber-100 cursor-pointer ml-auto"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span>English</span>
          <ChevronDown size={16} />
          {showDropdown && (
            <div className="absolute top-full right-4 mt-2 w-32 bg-white text-black rounded shadow-md z-10">
              <ul className="text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">English</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Hindi</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">US</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Header & Navigation */}
      {/* <div className="main-container py-3 px-6 flex items-center justify-between">
        <header className="flex items-center gap-10 h-20">
          <ul className="flex items-center gap-10">
            <li className="text-4xl font-semi-bold text-[#000000] pl-25 pr-40">Exclusive</li>
            <li className=" cursor-pointer text-2xl"> Home     </li>
            <li className=" cursor-pointer text-2xl"> contact  </li>
            <li className=" cursor-pointer text-2xl"> About</li>
            <li className=" cursor-pointer text-2xl">Sign Up?</li>
          </ul>
        </header>

        <div className="border rounded px-1 py-1 w-[347px] bg-[#87CEEB1A] flex items-center">
          <input
            type="text"
            placeholder="       What are you looking for?"
            className=" outline-none bg-transparent rounded-2xl h-10 w-full  text-black placeholder:text-gray-600"
          />
          <Search className="text-black cursor-pointer " size={22} />
        </div>

        <div className="flex gap-5 mr-20">
          <img src="/maine/Heart.png" alt="heart" className="h-[35px] w-[40px]" />
          <img src="/maine/Cart1-image.png" alt="Cart1 with buy" className="h-[35px] w-[40px]" />
        <Link to="/account">
           <img
             src="/maine/user.png"
             alt="User Account"
             className="h-[35px] w-[40px] cursor-pointer"
           />
         </Link>
        </div>
      </div> */}

      {/* Horizontal Line */}
      <hr className="border-1 border-black " />

      {/* Sidebar  */}
      <div className="flex">
       
        <aside className="w-[20rem] border-r border-black p-4 bg-gray-100">
          <Sidebar/>
        </aside>
{/* Imageslider */}
        <div className="p-4 flex-1">
            <Imageslider/>
        </div>
      </div>
              <Todaysecond/>
    <Categories/>
    <Selling/>
    <Product/>
    <Featured/>
    <Servies/>
    </>
  );
};

export default HomePage;
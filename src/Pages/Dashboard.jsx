import React, { useState} from "react";
import { Link, Outlet } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      {/* Top Sale Banner */}
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
      <div className="main-container py-3 px-6 flex items-center justify-between">
        <header className="flex items-center gap-10 h-20">
  <ul className="flex items-center gap-10">
    <li className="text-4xl font-semibold text-[#000000] pl-24 pr-40">Exclusive</li>
    <li className="cursor-pointer text-2xl">
      <Link to="/home">Home</Link>
    </li>
    <li className="cursor-pointer text-2xl">
      <Link to="/contact">Contact</Link>
    </li>
    <li className="cursor-pointer text-2xl">
      <Link to="/about">About</Link>
    </li>
   <a href="/signup"> <li className="cursor-pointer text-2xl">Sign Up?</li></a>
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
          <img src="/maine/Cart1-image.png" alt="Cart1 with buy" className="h-[35px] w-[40px]"/>
          <Link to="/account">
           <img
             src="/maine/user.png"
             alt="User Account"
             className="h-[35px] w-[40px] cursor-pointer"
           />
         </Link>
        </div>
      </div>
      <hr className="border-1 border-black " />
          <div><Outlet /></div>

      


    


           <div className="bg-black text-white px-6 py-10 mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
                  
                  {/* Exclusive / Subscribe Section */}
                  <div className="space-y-3">
                    <h1 className="text-3xl font-bold">Exclusive</h1>
                    <p className="text-2xl font-semibold">Subscribe</p>
                    <p className="text-2xl font-semibold">Get 10% off your first order</p>
          
                    <div className="flex items-center border border-gray-600 rounded bg-black w-60">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 p-2 bg-black text-white placeholder-gray-400 focus:outline-none"
                      />
                      <button className="p-2">
                        <img src="/bottom-image/icon-send.png" alt="Send" className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
          
                  {/* Support Section */}
                  <div className="space-y-3">
                    <h1 className="text-3xl font-bold">Support</h1>
                    <p className="text-2xl font-semibold">111 Bijoy Sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
                    <p className="text-2xl font-semibold">exclusive@gmail.com</p>
                    <p className="text-2xl font-semibold">+88 382 473 4578</p>
                  </div>
          
                  {/* Account Section */}
                  <div className="space-y-3">
                    <h1 className="text-3xl font-bold">Account</h1>
                    <ul className="space-y-1 text-2xl font-semibold">
                      <li className="hover:text-blue-400 cursor-pointer">My Account</li>
                      <li className="hover:text-blue-400 cursor-pointer">Login / Register</li>
                      <li className="hover:text-blue-400 cursor-pointer">Cart</li>
                      <li className="hover:text-blue-400 cursor-pointer">Wishlist</li>
                      <li className="hover:text-blue-400 cursor-pointer">Shop</li>
                    </ul>
                  </div>
          
                  {/* Quick Links */}
                  <div className="space-y-3">
                    <h1 className="text-3xl font-bold">Quick Links</h1>
                    <ul className="space-y-1 text-2xl font-semibold">
                      <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
                      <li className="hover:text-blue-400 cursor-pointer">Terms of Use</li>
                      <li className="hover:text-blue-400 cursor-pointer">FAQ</li>
                      <li className="hover:text-blue-400 cursor-pointer">Contact</li>
                    </ul>
                  </div>
          
                  {/* App Download Section with Social Icons */}
                  <div className="space-y-3">
                    <h1 className="text-3xl font-bold">Download App</h1>
                    <p className="text-2xl font-semibold">Save $3 with App New User only</p>
          
                    {/* Scanner + Store Links */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        {/* Scanner */}
                        <div className="flex-shrink-0">
                          <img src="/bottom-image/Qr Code.png" alt="Scanner" className="w-30 h-24" />
                        </div>
          
                        {/* Store Buttons */}
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <img src="/bottom-image/googlePay.png" alt="Google Play" className="w-30 h-12" />
                            
                          </div>
                          <div className="flex items-center gap-2">
                            <img src="/bottom-image/AppStore.png" alt="Apple Store" className="w-32 h-12" />
                      
                          </div>
                        </div>
                      </div>
          
                      {/* Social Media Row */}
                      <div className="flex gap-10 mt-4">
                        <a href="#" className="text-gray-400 hover:text-blue-500 text-lg">
                          <FaFacebookF />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-pink-400 text-lg">
                          <FaInstagram />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-sky-400 text-lg">
                          <FaTwitter />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-300 text-lg">
                          <FaLinkedinIn />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

    </> 

  );
};

export default Dashboard;

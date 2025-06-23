import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const BottomNavigation = () => {
  return (
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
  );
};

export default BottomNavigation;

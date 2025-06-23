import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
const SignupPage =()=>{
    const [showDropdown,setShowDropdown]=useState(false);
    return (
        <>
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
       <div className="main-container py-3 px-6 flex items-center justify-between">
              <header className="flex items-center gap-10 h-20">
                <ul className="flex items-center gap-10">
                  <li className="text-4xl font-semi-bold text-[#000000] pl-25 pr-40">Exclusive</li>
                  <li className=" cursor-pointer text-2xl">Home</li>
                  <li className=" cursor-pointer text-2xl">Contact</li>
                  <li className=" cursor-pointer text-2xl">About</li>
                  <li className=" cursor-pointer text-2xl">Sign Up?</li>
                </ul>
              </header>
      
              <div className=" rounded px-1 py-1 w-[347px] bg-[#87CEEB1A] flex items-center mr-40">
                <input
                  type="text"
                  placeholder="       What are you looking for?"
                  className=" outline-none bg-transparent rounded-2xl h-10 w-full  text-black placeholder:text-gray-600 "
                />
                <Search className="text-black cursor-pointer " size={22} />
              </div>
      
              
            </div>
              <hr className=" border-black " />
              <div className="flex ">
                <div className=" mt-20 rounded-2xl">
                <img src="/signup/Side Image.png" alt="SignUp-image" className="w-250 rounded-2xl"/>
                </div>
                <div className="w-165 h-100 mt-50 ml-40 bg-white rounded-lg shadow-2xs">
  <h1 className="text-6xl font-semibold text-black mb-5">Create an Account</h1>
  <h2 className="text-4xl text-gray-600 mb-10">Enter your details below</h2>

  {/* Name Input */}
  <input
    type="text"
    placeholder="Name"
    className=" mb-10  outline-none bg-transparent text-black text-3xl shadow-sm border-b border-gray-300 focus:border-black"
  />

  {/* Email or Phone */}
  <input
    type="text"
    placeholder="Email or Phone"
    className=" mb-10 outline-none bg-transparent text-black text-3xl shadow-sm border-b border-gray-300 focus:border-black"
  />

  {/* Password */}
  <input
    type="password"
    placeholder="Password"
    className=" mb-10 outline-none bg-transparent text-black text-3xl shadow-sm border-b border-gray-300 focus:border-black"
  />

  {/* Buttons */}
  <button className="w-110 mb-3 bg-gray-900 text-white py-2 rounded-md text-3xl hover:opacity-90 transition">
    Create Account
  </button>

  <button className="w-110 flex  text-3xl items-center justify-center gap-3 border border-gray-400 py-2 rounded-md  hover:bg-gray-100 transition">
    <img src="/signup/Icon-Google.png" alt="Google" className="w-8 h-8" />
    Sign Up with Google
  </button>

<h1 className="mt-4 text-2xl text-gray-700 ml-15">
  Already have an account?{" "}
  <span className="text-blue-600 hover:underline cursor-pointer">
    Log in
  </span>
</h1>
</div>


              </div>
        </>
    )
}
 export default SignupPage;
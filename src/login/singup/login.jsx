import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
const LoginPage =()=>{
    const [showDropdown,setShowDropdown]=useState(false);
    return (
        <>
              <div className="flex ">
                <div className=" mt-20 rounded-2xl">
                <img src="/signup/Side Image.png" alt="SignUp-image" className="w-250 rounded-2xl"/>
                </div>
                <div className="w-165 h-100 mt-50 ml-40 bg-white rounded-lg shadow-2xs">
  <h1 className="text-6xl font-semibold text-black mb-5">Log in to Exclusive</h1>
  <h2 className="text-4xl text-gray-600 mb-10">Enter your details below</h2>

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
  <button className="w-110 mb-3 bg-red-900 text-white py-2 rounded-md text-3xl hover:opacity-90 transition">
    Log In
  </button>

  <button className="w-110 flex  text-3xl items-center justify-center gap-3  py-2 rounded-md  hover:bg-gray-100 transition">
Forget Password?
  </button>
</div>


              </div>
        </>
    )
}
 export default LoginPage;
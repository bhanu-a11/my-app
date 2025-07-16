import React, { useState} from "react";
import { ChevronDown, Search } from "lucide-react";
import Servies from "../Pages/Servies";
const About=()=>{
    const [showDropdown, setShowDropdown] = useState(false);
    return(
        <>
         <div className="flex justify-between mt-10 px-10">
        <div className="hover:text-amber-800"> Home / About</div>
        
      </div>
      <div className="flex pt-10 ">
<div className=" mt-20 w-200 ml-20  ">
    <h1 className="font-bold text-4xl mb-8 ">Our Story</h1>
    <p className="text-1xl mb-5">Launced in 2015, Exclusive is South Asia’s premier online shopping
     makterplace with an active presense in Bangladesh. Supported <br></br>
     by wide range of tailored marketing, data and service solutions,<br></br>
      Exclusive has 10,500 sallers and 300 brands and serves 3<br></br> 
      millioons customers across the region. </p>
      <p className=" text-1xl">Exclusive has more than 1 Million products to offer, growing at a<br></br>
       very fast. Exclusive offers a diverse assotment in categories<br></br>
        ranging  from consumer.</p>
</div>
<div className="ml-50">
    <img src="/about/about-women.jpg" className="w-200 h-120 "/>
</div>
      </div>
 <div className="flex gap-16 mt-20 justify-center">
 
  <div className="border-2 p-5 rounded-lg text-center w-60 shadow-sm">
    <img src="/about/Services (3).png" className="w-16 h-16 mx-auto mb-4" />
    <h1 className="text-2xl font-bold mb-1">10.5k</h1>
    <h2 className="text-lg font-semibold text-gray-700">Sellers active on our site</h2>
  </div>

  
  <div className="border-2 p-5 rounded-lg text-center w-60 shadow-sm">
    <img src="/about/Services (4).png" className="w-20 h-20 mx-auto mb-4" />
    <h1 className="text-2xl font-bold mb-1">33k</h1>
    <h2 className="text-lg font-semibold text-gray-700">Monthly Product Sale</h2>
  </div>

 
  <div className="border-2 p-5 rounded-lg text-center w-60 shadow-sm">
    <img src="/about/Services (5).png" className="w-20 h-20 mx-auto mb-4" />
    <h1 className="text-2xl font-bold mb-1">45k</h1>
    <h2 className="text-lg font-semibold text-gray-700">Customers active on our site</h2>
  </div>

 
  <div className="border-2 p-5 rounded-lg text-center w-60 shadow-sm">
    <img src="/about/Services (6).png" className="w-20 h-20 mx-auto mb-4" />
    <h1 className="text-2xl font-bold mb-1">25k</h1>
    <h2 className="text-lg font-semibold text-gray-700">Annual gross sale on our site</h2>
  </div>
</div>


<div className="flex flex-wrap justify-center gap-10 mt-20">
  {/* Team Member 1 */}
  <div className="border-2 p-5 rounded-lg text-center w-[370px] shadow-sm hover:shadow-lg transition duration-300">
    <img
      src="/about/Frame 889.png"
      className="w-full h-[300px] object-cover rounded-md mb-4"
      alt="Will Smith"
    />
    <h1 className="text-2xl font-bold mb-1">Will Smith</h1>
    <h2 className="text-lg font-semibold text-gray-700 mb-3">Product Designer</h2>

    {/* Social Icons Row */}
    <div className="flex justify-center gap-6 mt-2">
      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <i className="fab fa-twitter text-xl text-blue-500 hover:text-blue-700 transition"></i>
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noreferrer">
        <i className="fab fa-instagram text-xl text-pink-500 hover:text-pink-700 transition"></i>
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin text-xl text-blue-700 hover:text-blue-900 transition"></i>
      </a>
    </div>
  </div>

  {/* Team Member 2 */}
  <div className="border-2 p-5 rounded-lg text-center w-[370px] shadow-sm hover:shadow-lg transition duration-300">
    <img
      src="/about/Frame 875.png"
      className="w-full h-[300px] object-cover rounded-md mb-4"
      alt="Emma Watson"
    />
    <h1 className="text-2xl font-bold mb-1">Emma Watson</h1>
    <h2 className="text-lg font-semibold text-gray-700 mb-3">Managing Director</h2>

    <div className="flex justify-center gap-6 mt-2">
      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <i className="fab fa-twitter text-xl text-blue-500 hover:text-blue-700 transition"></i>
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noreferrer">
        <i className="fab fa-instagram text-xl text-pink-500 hover:text-pink-700 transition"></i>
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin text-xl text-blue-700 hover:text-blue-900 transition"></i>
      </a>
    </div>
  </div>

  {/* Team Member 3 */}
  <div className="border-2 p-5 rounded-lg text-center w-[370px] shadow-sm hover:shadow-lg transition duration-300">
    <img
      src="/about/Frame 874.png"
      className="w-full h-[300px] object-cover rounded-md mb-4"
      alt="Tom Cruise"
    />
    <h1 className="text-2xl font-bold mb-1">Tom Cruise</h1>
    <h2 className="text-lg font-semibold text-gray-700 mb-3">Founder & Chairman</h2>

    <div className="flex justify-center gap-6 mt-2">
      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <i className="fab fa-twitter text-xl text-blue-500 hover:text-blue-700 transition"></i>
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noreferrer">
        <i className="fab fa-instagram text-xl text-pink-500 hover:text-pink-700 transition"></i>
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin text-xl text-blue-700 hover:text-blue-900 transition"></i>
      </a>
    </div>
  </div>
</div>

<Servies/>

        </>
    )
}
export default About;
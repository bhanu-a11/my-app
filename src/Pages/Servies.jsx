import React from "react";
const Servies =()=>{
return (
    <>
    <div className=" flex gap-50 mt-20">
        <div className=" ml-60">
          <img src="/services/Services.png" className="w-20 h-20 ml-20 mb-5"/>
          <h1 className="text-2xl font-bold mb-2 ">FREE AND FAST DELIVERY </h1>
          <h2 className="text-1xl semi-bold">Free Delivery for all orders over $140</h2>  
        </div>
        <div >
          <img src="/services/Services-audio.png"className="w-20 h-20 ml-20 mb-5"/>
          <h1 className="text-2xl font-bold mb-2 ">24/7 CUSTMORE SERVICE </h1>
          <h2 className="text-1xl semi-bold ">Friendly 24/7 customer support</h2>     
        </div>
        <div >
            <img src="/services/Services-money.png"className="w-20 h-20 ml-20 mb-5"/>
          <h1 className="text-2xl font-bold mb-2 ">MONEY BACK GUARANTEE </h1>
          <h2 className="text-1xl semi-bold ml-2">We return money within 7days</h2>  
        </div>
    </div>
    
    </>
)
}
export default Servies;
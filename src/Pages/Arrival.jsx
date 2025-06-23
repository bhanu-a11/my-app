import React from "react";
 const Featured =()=>{
    return(
        <>
         <div className=" mt-10 pb-10 pt-10 px-10 bg-white rounded-lg shadow-md">
                {/* Header */}
                <header className="flex-col sm:flex-col sm:items-center sm:justify-between">
                  <img
                    src="/featured/Frame 622.png"
                    alt="Categories"
                    className="w-32 h-16 mb-4 sm:mb-0"
                  />
                  <div className="w-full flex justify-between items-center mt-5 sm:mt-0">
                    <h1 className="text-3xl semi-bold text-gray-800 mt-5 mb-10">
                     New Arrival
                    </h1>
                  </div>
                </header>
                <div className="  w-full h-180 flex rounded-2xl">
                  <div className=" w-200 h-180 bg-black rounded-2xl">
                    <img src="/featured/ps5.png" className="w-160 h-180 ml-15"/>
                   <div className="ml-10  mt-[-180px]">
                   <h1 className=" text-white semi-bold text-2xl mb-2">Play Station 5</h1>
                   <h2 className="text-white mb-7 text-1xl" >Black and white version of the PS5<br></br> coming out of sale</h2>
                   <h3 className="underline text-white mb-2">Shop Now</h3>
                   </div>
                  </div>
<div className=" w-245 h-170 ml-10  rounded-2xl">
  <div className=" w-245 h-80 mb-5 bg-black  rounded-2xl">
     <img src="/featured/women.png" className="w-245 h-80  rounded-2xl"/>
     <div className="ml-10  mt-[-180px]">
 <h1 className=" text-white semi-bold text-3xl mb-2">Women's Collection</h1>
                   <h2 className="text-white mb-7 text-1xl" >Featured woman collections that <br></br> give you another vide.</h2>
                   <h3 className="underline text-white mb-2">Shop Now</h3>
     </div>
  </div>
  <div className="flex">
  <div className=" w-130 h-95 mr-10 bg-black  rounded-2xl">
    <img src="/featured/Frame 707.png" className="w-100 h-95 ml-15"/>
    <div className="ml-10  mt-[-130px]">
     <h1 className=" text-white semi-bold text-4xl mb-2">Speakers</h1>
                   <h2 className="text-white mb-7 text-1xl" >Amazon wireless speakers</h2>
                   <h3 className="underline text-white mb-2">Shop Now</h3> 
    </div>
  </div>
  <div className=" w-100 h-95 bg-black ml-10 rounded-2xl ">
    <img src="/featured/perfume.png" className="w-100 h-95"/>
     <div className="ml-10  mt-[-130px]">
     <h1 className=" text-white semi-bold text-4xl mb-2">Perfume</h1>
                   <h2 className="text-white mb-7 text-1xl" >GUCCI INTENSE OUD EDP
</h2>
                   <h3 className="underline text-white mb-2">Shop Now</h3> 
    </div>
  </div>
  </div>

</div>
<div></div>
                </div>
        </div>
        </>
    )
 }
 export default Featured;
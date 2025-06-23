import React from "react";

const Categories = () => {
  // Sample category data
  const categories = [
    { name: "Mobiles", image: "/Category/Category-CellPhone.png" },
    { name: "Computers", image: "/Category/Category-Computer.png" },
    { name: "Smartwatch", image: "/Category/Category-SmartWatch.png" },
    { name: "Camera", image: "/Category/Category-Camera.png" },
    { name: "HeadPhones", image: "/Category/Category-Headphone.png" },
    { name: "Gaming", image: "/Category/Category-Gamepad.png" },
  ];

  return (
<>
<div className=" mt-10 pb-10 pt-10 px-10 bg-white rounded-lg shadow-md">
      {/* Header */}
      <header className="flex-col sm:flex-row sm:items-center sm:gap-10">
        <img src="Category/Frame 623.png" alt="Categories" className="w-32 h-16" />
        <h1 className="text-3xl font-bold text-gray-800 mt-5">
          Browse By Category
        </h1>
      </header>

      {/* Category Cards */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 p-4 hover:shadow-lg cursor-pointer transition-all duration-200 rounded-md border-2"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-24 h-24 object-contain mb-2"
            />
            <span className="text-sm font-medium text-gray-700">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
         {/* Horizontal Line */}
      <hr className="border-1 border-black mt-10" />
    
    </>
  );
};

export default Categories;

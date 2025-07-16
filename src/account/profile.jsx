import React from "react";

const Myprofile = () => {
  return (
    <div className="bg-[#f9f9f9] w-150 flex items-center justify-center ml-60">
      <div className="w-full max-w-4xl p-10 border border-gray-300 rounded-xl shadow-xl bg-white">
        <h1 className="text-3xl font-semibold text-red-700 mb-10 text-center">Edit Your Profile</h1>

        <form className="space-y-8">
          {/* Row 1: First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-medium mb-1">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full px-4 py-2 border rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full px-4 py-2 border rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
          </div>

          {/* Row 2: Email & Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full px-4 py-2 border rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
          </div>

          {/* Row 3: Password Section (Full Width) */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password Changes</label>
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full px-4 py-2 border rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full px-4 py-2 border rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full px-4 py-2 border rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4 ">
              <button
    type="button"
    className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-8   mr-10 rounded-lg shadow-md hover:shadow-xl transition duration-300"
    onClick={() => window.history.back()} // Or you can clear form
  >
    Cancel
  </button>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Myprofile;

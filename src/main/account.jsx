import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";
import Myprofile from "../account/profile";
import AddressBook from "../account/adress";
import Payment from "../account/payment";
import Myreturns from "../account/myreturn";
import Mycancellation from "../account/cancellation";
import BottomNavigation from "../Pages/Bottom Navigation-bar";



const AccountPage = () => {
  const [selectedSection, setSelectedSection] = useState("profile");

  const renderSection = () => {
    switch (selectedSection) {
      case "profile":
        return < Myprofile/>;
      case "address":
        return <AddressBook />;
      case "payment":
        return <Payment/>;
      case "returns":
        return <Myreturns />;
      case "cancellation":
        return < Mycancellation/>;
      default:
        return null;
    }
  };

  return (
    <>
  

      {/* Breadcrumb and welcome text */}
      <div className="flex justify-between mt-10 px-10">
        <div className="hover:text-amber-800"> Home / Contact</div>
        <div>Welcome! <span className="text-red-700">Md Rimel</span></div>
      </div>

      {/* Main Layout */}
      <div className="flex px-10 gap-10 mt-10">
        {/* Left Menu */}
        <div className="border w-64 p-4 rounded shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="text-lg pb-2">Manage My Account</th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              <tr>
                <td onClick={() => setSelectedSection("profile")} className="pl-2 py-2 text-gray-700 hover:text-red-700 cursor-pointer">My Profile</td>
              </tr>
              <tr>
                <td onClick={() => setSelectedSection("address")} className="pl-2 py-2 text-gray-700 hover:text-red-700 cursor-pointer">Address Book</td>
              </tr>
              <tr>
                <td onClick={() => setSelectedSection("payment")} className="pl-2 py-2 text-gray-700 hover:text-red-700 cursor-pointer">My Payment Options</td>
              </tr>
              <tr>  
                <th className="pt-4 pb-2">My Orders</th>
              </tr>
              <tr>
                <td onClick={() => setSelectedSection("returns")} className="pl-2 py-2 text-gray-700 hover:text-red-700 cursor-pointer">My Returns</td>
              </tr>
              <tr>
                <td onClick={() => setSelectedSection("cancellation")} className="pl-2 py-2 text-gray-700 hover:text-red-700 cursor-pointer">My Cancellations</td>
              </tr>
              <tr>
                <th className="pt-4 pb-2">My Wishlist</th>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Side Section Display */}
        <div className="flex-1">
          {renderSection()}
        </div>
      </div>
      
    </>
  );
};

export default AccountPage;

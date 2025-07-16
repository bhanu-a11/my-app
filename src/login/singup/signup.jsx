import React, { useState } from "react";
import { Link } from "react-router";

const SignupPage = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleSubmmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", data.name);
    localStorage.setItem("email", data.email);
    localStorage.setItem("phone", data.phone);
    localStorage.setItem("password", data.password);
  };

  return (
    <div className="flex">
      <div className="mt-20 rounded-2xl">
        <img
          src="/signup/Side Image.png"
          alt="SignUp-image"
          className="w-250 rounded-2xl"
        />
      </div>
      <div className="w-165 h-100 mt-50 ml-40 bg-white rounded-lg shadow-2xs">
        <h1 className="text-6xl font-semibold text-black mb-5">
          Create an Account
        </h1>
        <h2 className="text-4xl text-gray-600 mb-10">Enter your details below</h2>

        <form onSubmit={handleSubmmit}>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Name"
            className="mb-10 outline-none bg-transparent text-black text-3xl shadow-sm border-b border-gray-300 focus:border-black"
          />

          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email or Phone"
            className="mb-10 outline-none bg-transparent text-black text-3xl shadow-sm border-b border-gray-300 focus:border-black"
          />

          <input
            type="text"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="mb-10 outline-none bg-transparent text-black text-3xl shadow-sm border-b border-gray-300 focus:border-black"
          />

          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Password"
            className="mb-10 outline-none bg-transparent text-black text-3xl shadow-sm border-b border-gray-300 focus:border-black"
          />

          <button
            type="submit"
            className="w-110 mb-3 bg-gray-900 text-white py-2 rounded-md text-3xl hover:opacity-90 transition"
          >
            Create Account
          </button>

          <button className="w-110 flex text-3xl items-center justify-center gap-3 border border-gray-400 py-2 rounded-md hover:bg-gray-100 transition">
            <img
              src="/signup/Icon-Google.png"
              alt="Google"
              className="w-8 h-8"
            />
            Sign Up with Google
          </button>

          <h1 className="mt-4 text-2xl text-gray-700 ml-15">
            Already have an account?{" "}
            <Link    to="/login" className="text-blue-600 hover:underline cursor-pointer">
    Log in
  </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

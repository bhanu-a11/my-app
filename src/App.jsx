import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import HomePage from "./main/home";
import AccountPage from "./main/account";
import About from "./main/about";
import ContactPage from "./main/contact";
import SignupPage from "./login/singup/signup";
import LoginPage from "./login/singup/login";


const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Dashboard />}>
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
       </Route>

       



      </Routes>
    </Router>
  );
};

export default App;

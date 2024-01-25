import React from "react";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import "./style.css";
import Profile from "./NavProfile/Profile";
import Tests from "./Tests/Tests";

function Header() {
  return (
    <header className="fixed w-full h-16 bg-white shadow-sm z-50">
      <div className="w-full max-w-[1440px] mx-auto h-full flex items-center z-100 px-[50px] justify-between max-sm:px-2">
        <div className="flex items-center h-full z-100">
          <Logo />
          <Navbar />
        </div>
        <div className="flex">
          <Tests />
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;

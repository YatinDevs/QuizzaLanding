import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../../lazyLoadImage/Img";

import { BiHomeSmile } from "react-icons/bi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="">
      <nav className="nav-links bg-white relative flex h-full items-center gap-6 font-semibold text-slate-500 mx-5 max-lg:gap-0 max-lg:fixed max-lg:bottom-0 max-lg:h-16 max-lg:w-full max-lg:left-0 max-lg:mx-0 max-lg:px-5  max-lg:justify-between max-lg:shadowup z-30 ">
        <NavLink to={"/flights"} className="nav-item">
          <BiHomeSmile className="nav-service-logo " />
          <span>Home</span>
        </NavLink>
        <NavLink to={"/hotels"} className="nav-item">
          <PiTelegramLogoLight className="nav-service-logo " />
          <span>Telegram</span>
        </NavLink>
        <NavLink to={"/trains"} className="nav-item">
          <FcAbout className="nav-service-logo " />
          <span>About Us</span>
        </NavLink>
        <NavLink to={"/buses"} className="nav-item">
          <FaGithub className="nav-service-logo " />
          <span>Github</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;

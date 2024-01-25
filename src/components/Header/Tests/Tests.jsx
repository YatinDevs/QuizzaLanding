import React from "react";
import { NavLink } from "react-router-dom";
import { PiBagBold } from "react-icons/pi";
import { PiExam } from "react-icons/pi";

function Trips() {
  return (
    <NavLink
      to={"/mysupport/trips"}
      className="flex items-center shrink-0 max-sm:flex-col max-sm:justify-center "
    >
      <PiExam className="logo-trip logos-nav w-9 h-9 mr-1" />

      <div className="text mr-5 max-sm:mr-0">
        <div className="font-semibold text-xs text-orange-600 ">
          Previous Tests
        </div>
        <div className="font-semibold text-sm text-slate-600 max-sm:hidden">
          Manage Tests
        </div>
      </div>
    </NavLink>
  );
}

export default Trips;

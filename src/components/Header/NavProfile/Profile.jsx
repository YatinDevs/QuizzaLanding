import React from "react";
import { RxAvatar } from "react-icons/rx";

function Profile() {
  return (
    <>
      <div className=" z-100 flex-col sm:flex-row border border-solid border-orange-500 rounded-lg flex truncate flex-auto items-center  w-[168px] h-11 px-[10px] gap-2 m-3  cursor-pointer max-sm:w-fit">
        <img
          src="https://edge.ixigo.com/st/nivas/_next/static/media/userFilled.12154510.svg"
          className=" inline-block w-3 h-3 sm:h-6 sm:w-6 mt-1 nav-service-logo text-orange-500 rounded-full bg-blue-100"
        />
        <span className="text-orange-500 font-medium text-xs text-ellipsis">
          LOGIN/SIGNUP
        </span>
      </div>
    </>
  );
}

export default Profile;

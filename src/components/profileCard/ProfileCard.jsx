import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profilephot.jpg";

const ProfileCard = () => {
  return (
    <div className="ProfileCard w-[450px] max-md:w-[300px] shadow-lg">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Yatin Chaudhari </span>
        <span>Junior Frontend Developer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>300</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>250k</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>

      <span>My Profile</span>
    </div>
  );
};

export default ProfileCard;

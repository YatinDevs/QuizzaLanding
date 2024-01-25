import React, { useEffect, useState } from "react";
import axios from "axios";
import { Test1, Test2, Test3, Test4, Test5 } from "../../../assets/index";
import Carousel from "../../../components/Carousel/Carousel2";
import ProfileCard from "../../../components/profileCard/ProfileCard";

function FeaturedDevs() {
  const [data, setData] = useState([
    <ProfileCard />,
    <ProfileCard />,
    <ProfileCard />,
    <ProfileCard />,
    <ProfileCard />,
  ]);

  return (
    <div className="bg-white-50 py-2  ">
      <div className="bg-white py-2">
        <h1 className="text-center text-xl font-semibold my-2 ">
          Developers Contributed
        </h1>
        <Carousel data={data} />
      </div>
    </div>
  );
}

export default FeaturedDevs;

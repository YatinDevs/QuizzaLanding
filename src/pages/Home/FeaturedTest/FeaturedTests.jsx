import React, { useEffect, useState } from "react";
import Carousel from "../../../components/Carousel/Carousel";
import axios from "axios";
import { Test1, Test2, Test3, Test4, Test5 } from "../../../assets/index";
const testimages = [
  Test1,
  Test2,
  Test3,
  Test4,
  Test5,
  Test1,
  Test2,
  Test3,
  Test4,
  Test5,
];
function FeaturedTests() {
  const [data, setData] = useState([]);

  return (
    <div className="bg-white-50 py-2 shadow-2xl ">
      <div className="bg-white py-2">
        <h1 className="text-center text-xl font-semibold my-2 ">
          Today's Featured Tests
        </h1>
        <Carousel data={testimages} />
      </div>
    </div>
  );
}

export default FeaturedTests;

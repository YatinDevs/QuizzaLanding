import React, { useRef, useState } from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

import "./style.css";

function Carousel({ data, loading, endpoint, title }) {
  // console.log(data);
  const carouselContainer = useRef();

  const navigation = (direction) => {
    const container = carouselContainer.current;

    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - (container.offsetWidth - 200)
        : container.scrollLeft + (container.offsetWidth - 200);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    let count = 0;
    count = count + 1;
    return (
      <div className="w-[300px] h-[300px] shrink-0 border-none max-md:w-[270px] max-md:h-[250px] bg-white rounded-2xl">
        {count}
      </div>
    );
  };

  return (
    <div className="relative w-full my-6 ">
      <ContentWrapper className="relative">
        <IoMdArrowBack
          className="carouselLeftNav arrow text-2xl text-black bg-white p-4 w-14 h-14 rounded-full absolute -translate-y-2/4 cursor-pointer z-[2] hidden top-[44%] md:block transition-all hover:scale-110 left-6 shadow-even"
          onClick={() => navigation("left")}
        />
        <IoMdArrowForward
          className="carouselRightNav arrow text-2xl text-black bg-white p-4 w-14 h-14 rounded-full absolute -translate-y-2/4 cursor-pointer z-[2] hidden top-[44%] md:block transition-all hover:scale-110 right-6 shadow-even"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div
            className="carouselItems flex gap-2.5 sm:gap-5 py-2 mx-auto overflow-x-scroll overflow-y-hidden "
            ref={carouselContainer}
          >
            {data?.map((details) => {
              return (
                <div
                  className="w-[350px] shadow-lg  h-[400px] shrink-0 border-none max-md:w-[270px] max-md:h-[350px] bg-white-200 rounded-2xl"
                  key={details}
                >
                  <div>
                    <img
                      src={details}
                      className="rounded-2xl  w-[350px] h-[250px]  max-md:w-[270px] max-md:h-[180px]"
                    />
                  </div>
                  <div>
                    <h3 className="text-center font-semibold p-2  rounded-xl">
                      CDAC CCAT MOCK
                    </h3>
                    <p className="p-2 text-center">
                      Your Information or description goes here.
                    </p>
                    <div className="flex justify-center">
                      <button className="bg-blue-500 m-2 p-2 text-white rounded-xl">
                        {" "}
                        Solve Now
                      </button>
                      <button className="bg-blue-500 m-2 p-2 text-white rounded-xl">
                        Add to Favorite
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
}

export default Carousel;

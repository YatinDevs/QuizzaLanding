import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

function RegisterBanner() {
  return (
    <div>
      <ContentWrapper>
        <div className="flex flex-col px-2 py-5  sm:p-10 sm:m-5 text-2xl bg-blue-200 rounded-lg">
          <button className="sm:p-4 sm:m-2 bg-blue-500 text-white rounded-2xl font-semibold p-2 text-md sm:text-4xl text-center">
            Register Now{" "}
            <span className="hidden sm:inline-block"> for Latests Mock</span>
          </button>
          <p className="text-2xl py-4 sm:text-5xl text-center sm:p-5 font-extrabold text-white drop-shadow-xl">
            Register Now and Enroll for Top Rated Quizzes and Mock Sessions.
          </p>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default RegisterBanner;

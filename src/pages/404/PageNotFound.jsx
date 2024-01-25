import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import "./style.css";

const PageNotFound = () => {
  return (
    <div className="pageNotFound h-[700px] pt-[200px]">
      <ContentWrapper className="flex flex-col text-center h-[700px] bg-purple-200">
        <span className="bigText text-9xl font-medium">404</span>
        <span className="smallText text-5xl">Page not found!</span>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;

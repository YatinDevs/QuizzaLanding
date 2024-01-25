import React from "react";
import "./style.css";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

function HeroBanner() {
  return (
    <>
      <div className="heroBanner">
        <div className="backdrop-img">
          <Img
            src="https://images.ixigo.com/image/upload/banner/83963788ee686e58841a2f820364e169-rypoa.webp"
            className="w-full object-cover object-center h-full"
          />
        </div>
        <div className="opacityLayer"></div>
      </div>
      <ContentWrapper>
        <div className="discountBanner flex items-center justify-center">
          <Img src="" alt="" />
        </div>
      </ContentWrapper>
    </>
  );
}

export default HeroBanner;

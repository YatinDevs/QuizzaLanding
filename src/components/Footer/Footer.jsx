import React from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import "./style.css";
function Footers() {
  return (
    <div className="footer">
      <ContentWrapper>
        <div className="footer-info  m-2  flex gap-4 flex-wrap justify-center items-center">
          <div className="footer-info1">
            <h3 className="infoheading">COMPANY</h3>
            <div className="">
              <p className="infos">Lorem ipsum dolor sit.</p>
              <p className="infos">Lorem ipsum dolor sit amet.</p>
              <p className="infos">Lorem ipsum dolor sit amet.</p>
              <p className="infos">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="footer-info2 p-2 m-1">
            <h3 className="infoheading">LATEST MOCK TESTS</h3>
            <div className="">
              <p className="infos">Lorem ipsum dolor sit.</p>
              <p className="infos">Lorem ipsum dolor sit amet.</p>
              <p className="infos">Lorem ipsum dolor sit amet.</p>
              <p className="infos">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="footer-info3">
            <h3 className="infoheading">POPULAR GOALS</h3>
            <div className="">
              <p className="infos">Lorem ipsum dolor sit.</p>
              <p className="infos">Lorem ipsum dolor sit amet.</p>
              <p className="infos">Lorem ipsum dolor sit amet.</p>
              <p className="infos">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="footer-info4">
            <h3 className="infoheading">PRODUCTS</h3>
            <div className="">
              <p className="infos">Lorem ipsum dolor sit.</p>
              <p className="infos">Lorem ipsum dolor sit amet.</p>
              <p className="infos">Lorem ipsum dolor sit amet.</p>
              <p className="infos">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>

        <div className="footer-bottom-bar">
          <div className="company-copyright m-4 p-2">
            <p>© 2024 QuizzaHut. All rights reserved.</p>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Footers;

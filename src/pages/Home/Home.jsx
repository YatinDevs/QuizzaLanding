import React from "react";
import FeaturedTests from "./FeaturedTest/FeaturedTests";
import HeroBanner from "./HeroBanner/HeroBanner";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <div className="homepage">
      <Hero />
      <FeaturedTests />
    </div>
  );
}

export default Home;

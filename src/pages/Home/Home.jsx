import React from "react";
import FeaturedTests from "./FeaturedTest/FeaturedTests";
import HeroBanner from "./HeroBanner/HeroBanner";
import Hero from "../../components/Hero/Hero";
import FeaturedDevs from "./FeaturedDevs/FeaturedDevs";
import ProfileCard from "../../components/profileCard/ProfileCard";

function Home() {
  return (
    <div className="homepage">
      <Hero />
      <FeaturedTests />
      <FeaturedDevs />
    </div>
  );
}

export default Home;

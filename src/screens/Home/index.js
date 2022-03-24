import React from "react";
import Hero from "./Hero";
// import Hero from "./hero1";
import Selection from "./Selection";
import Popular from "./Popular";
import HotBid from "../../components/HotBid";
import Collections from "./Collections";
import Discover from "./Discover";
import Description from "./Description";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Selection /> */}
      <HotBid classSection="section" />
      <Popular />
      <Collections />
      <Discover />
      <Description />
    </>
  );
};

export default Home;

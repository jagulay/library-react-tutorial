import React from "react";
import Landing from "../components/landing";
import Highlights from "../components/highlights";
import Featured from "../components/Featured";
import Discounted from "../components/Discounted";
import Explore from "../components/explore";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;

import React from "react";
import "./mystyles.scss";
import Header from "../components/sections/headerone/headerone";
import Sone from "../components/sections/sone/sone";
import Stwo from "../components/sections/stwo/stwo";
import Sthree from "../components/sections/sthree/sthree";

const IndexPage = () => {
  return (
    <div className="layout">
      <Header />
      <Sone />
      <Stwo />
      <Sthree />
    </div>
  );
};
export default IndexPage;

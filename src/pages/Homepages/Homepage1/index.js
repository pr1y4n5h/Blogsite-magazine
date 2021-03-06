import React from "react";
import "../../../pages/mystyles.scss";
import Header from "./headerone/headerone";
import Sec1 from "./sec1/sec1";
import Sec2 from "./sec2/sec2";
import Sec3 from "./sec3/sec3";
import Sec4 from "./sec4/sec4";
import Sec5 from "./sec5/sec5";
import Sec6 from "./sec6/sec6";

const Homepage1 = () => {
  return (
    <div className="layout">
      <Header />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6 />
    </div>
  );
};
export default Homepage1;

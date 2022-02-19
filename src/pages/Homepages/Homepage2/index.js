import React from "react";
import "../../../pages/mystyles.scss";
import Header1 from "./headerone/headerone";
import Sec1 from "./sec1/sec1";
import Sec2 from "./sec2/sec2";
import Sec3 from "./sec3/sec3";
import Sec4 from "./sec4/sec4";
import Sec5 from "./sec5/sec5";

const Homepage2 = () => {
  return (
    <div className="layout">
      <Header1 />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
    </div>
  );
};
export default Homepage2;

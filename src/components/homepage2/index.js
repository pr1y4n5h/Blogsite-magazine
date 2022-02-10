import React from "react";
import "../../pages/mystyles.scss";
import Header from "./headerone/headerone";
import Sec1 from "./sec1/sec1";
import Sec2 from "./sec2/sec2";
import Sec3 from "./sec3/sec3";
import Sec4 from "./sec4/sec4";
import Sec5 from "./sec5/sec5";
import Sec6 from "./sec6/sec6";
import Sec7 from "./sec7/sec7";
import Sec8 from "./sec8/sec8";
import Sec9 from "./sec9/sec9";
// import Sec3 from "./sec3/sec3";

const Homepage2 = () => {
  return (
    <div className="layout">
      <Header />
      <Sec7 />
      <Sec3 />
      <Sec2 />
      <Sec1 />
      <Sec5 />
      <Sec9 />
      <Sec8 />
      <Sec4 />
      <Sec6 />
    </div>
  );
};
export default Homepage2;

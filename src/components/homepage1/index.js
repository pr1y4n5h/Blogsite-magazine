import React from "react";
import "../../pages/mystyles.scss";
import Header from "./headerone/headerone";
import Sec1 from "./sec1/sec1";
import Sec2 from "./sec2/sec2";
import Sec3 from "./sec3/sec3";

const Homepage1 = () => {
  return (
    <div className="layout">
      <Header />
      <Sec1 />
      <Sec2 />
      <Sec3 />
    </div>
  );
};
export default Homepage1;




  
// .product-details-image {
//   width: 500px;
//   display: flex;
//   justify-content: center;
//   position: relative;
// }

// .product-details-image img {
//   max-width: 100%;
//   display: block;
//   margin: 1rem 1rem;
//   object-fit: cover;
//   box-shadow: 2px 2px 5px var(--dark-color);
// }


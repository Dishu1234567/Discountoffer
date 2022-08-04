import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Lay from "./pages/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shirts from "./pages/shirts";
import Jewel from "./pages/jewel";
const Land = () => {
  return (
    <>
      <div id="a">
        <h1> ABC company offer </h1>
      </div>
      <div id="b">
        <article>
          Our ABC clothing company is offering discounts upto 60% on various
          Dresses Jwelery and other branded accessories
        </article>
      </div>
      <section>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Lay />} />
            <Route path="shirts" element={<Shirts />} />
            <Route path="jewel" element={<Jewel />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  );
};
const A = ReactDOM.createRoot(document.getElementById("root"));
A.render(<Land />);

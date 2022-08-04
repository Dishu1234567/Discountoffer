import { Link, Outlet } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./fashion.css";
const Lay = () => {
  return (
    <>
      <nav>
        <ul class="start">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shirts">Shirts</Link>
          </li>
          <li>
            <Link to="pants">Pants</Link>
          </li>
          <li>
            <Link to="jewel">Jewelery</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Lay;

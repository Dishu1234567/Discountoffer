import React from "react";
import ReactDOM from "react-dom";
import "./fashion.css";

const Shirts = () => {
  return (
    <>
      <h2>Buy Shirts at 50% off</h2>
      <p>Here are the links to the following Shirts</p>
      <div class="container">
        <a
          href="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80"
          class="item"
        >
          Shirt-A
        </a>
        <a
          href="https://storage.sg.content-cdn.io/cdn-cgi/image/width=600,height=800,quality=90,format=auto,fit=cover,g=top/in-resources/22a79ec5-e694-4d7a-ac5a-85c8fa45b7f1/Images/ProductImages/Source/ITMSH02448GREENLS_IT_02.jpg"
          class="item"
        >
          Shirt-B
        </a>
      </div>
    </>
  );
};
export default Shirts;

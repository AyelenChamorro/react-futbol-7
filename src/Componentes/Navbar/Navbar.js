import React from "react";
import "../Navbar/Navbar.scss";

function Navbar() {
  return (
    <div className="navbar d-flex justify-content-end">
      <ul className="navbar-menu d-flex justify-content-around ">
        <li>
          <a>F7 NIGTH</a>{" "}
        </li>
        <li>
          {" "}
          <a>F7 SABADOS</a>
        </li>
        <li>
          {" "}
          <a className="la-liga">LA LIGA</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" className="logo">
          CockTail World
        </Link>
        <ul className="nav-links">
          <li>
            {" "}
            <Link to="/" className="link">
              Home
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about" className="link">
              About
            </Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

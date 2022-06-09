import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header bg-sky-600 uppercase text-sm">
      <div className=" flex  justify-between container mx-auto  py-5 text-white">
        <div className="logo">
          {" "}
          <Link to="/" className=" text-xl">Abdur rahman</Link>
        </div>
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skill">Skill</Link>
          <Link to="/services">Services</Link>
          <Link to="/project">Project</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

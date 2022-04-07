import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ marginBottom: "10%" }}>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top "
        id="mainNav"
        style={{ backgroundColor: "#212529" }}
      >
        <div className="container">
          <div className="logo">
            <Link to="/">Siremar</Link>
          </div>
          {/* <a className="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/login">Login / </Link>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

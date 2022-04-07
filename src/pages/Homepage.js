/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import React from "react";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <header className="masthead">
      <Navbar />
      <div className="container">
        <div className="masthead-subheading">This is Siremar</div>
        <div className="masthead-heading text-uppercase">
          {" "}
          margarita A place to live happily
        </div>
        <a className="btn btn-primary btn-xl text-uppercase" href="#services">
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Homepage;

/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import React from "react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="page-section" id="about">
      <Navbar />
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">Margarita </h3>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/1.jpg"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2009-2011</h4>
                <h4 className="subheading">Our Humble Beginnings</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Margarita is a lovely South American island that is part of
                  Venezuela. The budget for this island is provided by the
                  central government.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/2.jpg"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>March 2011</h4>
                <h4 className="subheading">We Are Move Home</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  We offer the best services of registering us Margarita's
                  residences in South america. Once you register with us you
                  will be issued with an ID card which you can be sing to access
                  discounts in various services like flights, schools,
                  businesses,ferries and events
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/3.jpg"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Servies</h4>
                <h4 className="subheading">Transition to Full Service</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  We offer the best We offer the best services of registering us
                  Margarita's residences in South america.There are flights
                  ,schools,hositals all these can be used by the residents of
                  Margarita and to access discounts and events
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/4.jpg"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>July 2020</h4>
                <h4 className="subheading">Phase Two Expansion</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  {" "}
                  There are many facilities in the Margarita .We are also
                  exanding this to provide many other facilities !
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;

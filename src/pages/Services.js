/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import React from "react";
import Navbar from "../components/Navbar";

function Services() {
  return (
    <div>
      <Navbar />
      <div className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">
              Our services vary from helping the government come up with a
              budget based on the population to helping the residents get access
              to the money given by the government.
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary w-1"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">CREATE YOUR RESIDENT ACCOUNT</h4>
              <p className="text-muted">
                To create your residents account you an sig up with us and put
                your details. Once your details are processed you will get a
                residential Id which will help you in accessing various
                discounts.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary w-1"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">GET DISCOUNTS FOR A HEALTHY LIVING</h4>
              <p className="text-muted">
                Later getting the ID you get discounts in services like flights,
                schools, businesses,ferries and events
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary w-1"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">
                GET INFORMATION ABOUT FLIGHT AND BUSINESS DISCOUNTS
              </h4>
              <p className="text-muted">
                When you have the Id and go to any government associated
                business a dicount on what you are purchasing is drawn from the
                government budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

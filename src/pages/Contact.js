/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);

  const isValidEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  useEffect(() => {
    document.title = "Contact Us";
    if (
      name.length > 0 &&
      isValidEmail(email) &&
      phone.length > 0 &&
      message.length > 0
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  });

  return (
    <div className="page-section" id="contact">
      <Navbar />
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">
            MAGARITA the dream place.
          </h3>
        </div>

        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Your Name *"
                  data-sb-validations="required"
                  onChange={(e) => setName(e.target.value)}
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  A name is required.
                </div>
              </div>
              <div className="form-group mb-3">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Your Email *"
                  data-sb-validations="required,email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:required"
                >
                  An email is required.
                </div>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:email"
                >
                  Email is not valid.
                </div>
              </div>
              <div className="form-group mb-md-0">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone *"
                  data-sb-validations="required"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="phone:required"
                >
                  A phone number is required.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                <textarea
                  className="form-control"
                  placeholder="Your Message *"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>
            </div>
          </div>

          <div className={`${isValid ? "d-none" : ""}`}>
            <div className="text-center text-danger mb-3">
              Enter all fields!
            </div>
          </div>

          <div className="text-center">
            <button
              className={`btn btn-primary btn-xl text-uppercase ${
                isValid ? "" : "disabled"
              }`}
              onClick={() => {
                alert("Form submitted successfully!");
              }}
            >
              Send Message to admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

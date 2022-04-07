/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { hostName, contactSvc } from "./../constants/ApiEndPoints";

function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);

  const isValidEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const handleNameChange = (event) => {
    if (event.target.value.length === 0) {
      event.target.classList.add("btn-outline-danger");
    } else {
      event.target.classList.remove("btn-outline-danger");
    }
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      console.log(event.target.value);
      event.target.classList.add("btn-outline-danger");
    } else {
      event.target.classList.remove("btn-outline-danger");
    }
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    if (event.target.value.length === 0) {
      event.target.classList.add("btn-outline-danger");
    } else {
      event.target.classList.remove("btn-outline-danger");
    }
    setPhone(event.target.value);
  };
  const handleMessageChange = (event) => {
    if (event.target.value.length === 0) {
      event.target.classList.add("btn-outline-danger");
    } else {
      event.target.classList.remove("btn-outline-danger");
    }
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    const contactUrl = hostName + contactSvc;
    fetch(contactUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `your-name=${name}&your-email=${email}&your-phone=${phone}&your-message=${message}`,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        if (data.status === "mail_sent") {
          alert("Message sent successfully");
        } else {
          alert("Error While Sending Message");
        }
      });
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
                  onChange={handleNameChange}
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
                  onChange={handleEmailChange}
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
                  onChange={handlePhoneChange}
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
                  onChange={handleMessageChange}
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

          <div className="text-center"></div>
        </form>
        <button
          className={`btn btn-primary btn-xl text-uppercase ${
            isValid ? "" : "disabled"
          }`}
          onClick={() => handleSubmit()}
        >
          Send Message to admin
        </button>
      </div>
    </div>
  );
}

export default Contact;

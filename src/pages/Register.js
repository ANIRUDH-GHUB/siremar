/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { hostName, loginSvc, registerSvc } from "../constants/ApiEndPoints";
import { userRole } from "../constants/CommonConstants";
import "./Register.css";

function Register() {
  const [user, setUser] = React.useState();
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [email, setEmail] = React.useState();
  const [dob, setDob] = React.useState();
  const [address, setAddress] = React.useState();
  const [password, setPassword] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();
  const [token, setToken] = React.useState(localStorage.getItem("admin_token"));

  const navigate = useNavigate();
  const handleUserChange = (event) => {
    setUser(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const isValidEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
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

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (token === "EMPTY") {
      alert("Error Resitering New User");
      return;
    }
    const userObj = {
      username: user,
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      acf: {
        dob: dob,
        address: address,
      },
    };
    console.log(userObj);
    const registerUrl = hostName + registerSvc;
    fetch(registerUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("User created successfully");

        navigate("/login");
      });
  };

  return (
    <div className="h-100 gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: "185px" }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">
                        We are The Siremar Team
                      </h4>
                    </div>

                    <form>
                      <p>Please Register to your account</p>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example11">
                          Username
                        </label>
                        <input
                          type="text"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Username"
                          onChange={(e) => setUser(e.target.value)}
                          value={user}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example11">
                          Firstame
                        </label>
                        <input
                          type="text"
                          id="form2Example12"
                          className="form-control"
                          placeholder="Firstname"
                          onChange={(e) => setFirstName(e.target.value)}
                          value={firstName}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example11">
                          Lastname
                        </label>
                        <input
                          type="text"
                          id="form2Example13"
                          className="form-control"
                          placeholder="Lastname"
                          onChange={(e) => setLastName(e.target.value)}
                          value={lastName}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example11">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          id="form2Example14"
                          className="form-control"
                          placeholder="Date of Birth"
                          onChange={(e) => setDob(e.target.value)}
                          value={dob}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example11">
                          Address
                        </label>
                        <input
                          type="text"
                          id="form2Example15"
                          className="form-control"
                          placeholder="Address"
                          onChange={(e) => setAddress(e.target.value)}
                          value={address}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example11">
                          Email
                        </label>
                        <input
                          type="email"
                          id="form2Example16"
                          className="form-control"
                          placeholder="email address"
                          onChange={handleEmailChange}
                          value={email}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example22">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Password"
                          onChange={handlePasswordChange}
                          value={password}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example22">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="form2Example23"
                          className="form-control"
                          placeholder="Confirm Password"
                          onChange={handleConfirmPasswordChange}
                          value={confirmPassword}
                        />
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          id="submitButton"
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          onClick={() => handleSubmit()}
                        >
                          Register
                        </button>
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Already have an account?</p>
                        <Link to="/login">
                          <button
                            type="submit"
                            className="btn btn-outline-danger"
                          >
                            Login
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      {" "}
                      Welcome to Siremar when you register with us you get the
                      best of everything. You get discounts on flights,
                      schools,businesses etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

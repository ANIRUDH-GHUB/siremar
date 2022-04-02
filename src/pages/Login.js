/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { hostName, loginSvc } from "../constants/ApiEndPoints";
import { page, userRole } from "../constants/CommonConstants";
import "./Login.css";

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isValid, setIsValid] = React.useState(true);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (role) => {
    setIsLoading(true);
    const loginUrl = hostName + loginSvc;
    const payload = {
      username: username,
      password: password,
    };
    fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.token && res.user_role.includes(userRole[role])) {
          console.log(res.token, res.user_role);
          console.log(page[role], userRole[role]);
          localStorage.setItem("user_role", userRole[role]);
          localStorage.setItem("token", res.token);
          navigate(page[role]);
        }
        setIsValid(false);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsValid(false);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const cachedRole = localStorage.getItem("user_role");
    if (cachedRole === userRole.admin) {
      navigate(page.admin);
    } else if (cachedRole === userRole.inspector) {
      navigate(page.inspector);
    } else if (cachedRole === userRole.resident) {
      navigate(page.resident);
    }
  }, []);

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
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example11">
                          Username
                        </label>
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Phone number or email address"
                          onChange={handleUsernameChange}
                          value={username}
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
                          onChange={handlePasswordChange}
                          value={password}
                        />
                      </div>

                      {isValid ? null : (
                        <div className="alert alert-danger" role="alert">
                          <p>Invalid Credentials</p>
                        </div>
                      )}

                      <div className="text-center pt-1 mb-5 pb-1">
                        <div>
                          <button
                            className={`btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 ${
                              isLoading ? "disabled" : ""
                            }`}
                            type="button"
                            onClick={() => handleLogin("admin")}
                          >
                            Log in as Admin
                          </button>
                        </div>
                        <br />
                        <div>
                          <button
                            className={`btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 ${
                              isLoading ? "disabled" : ""
                            }`}
                            type="button"
                            onClick={() => handleLogin("admin")}
                          >
                            Log in as Inspector
                          </button>
                        </div>
                        <br />
                        <div>
                          <button
                            className={`btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 ${
                              isLoading ? "disabled" : ""
                            }`}
                            type="button"
                            onClick={() => handleLogin("resident")}
                          >
                            Log in as Resident
                          </button>
                        </div>
                        <br />
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <Link to="/register">
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Register
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
                      We offer the best services of registering us Margarita's
                      residences in South america. Once you register with us you
                      will be issued with an ID card which you can be sing to
                      access discounts in various services like flights,
                      schools, businesses,ferries and events
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

export default Login;

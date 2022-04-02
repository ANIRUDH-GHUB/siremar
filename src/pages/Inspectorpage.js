/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import React from "react";
import Navbar2 from "../components/Navbar2";

function Inspectorpage() {
  return (
    <div class="sb-nav-fixed">
      <Navbar2 />

      <div style={{ padding: "100px" }}>
        <div class="text-center">
          <strong>
            <h1
              class="section-heading text-uppercase mb-3"
              style={{ padding: "80px" }}
            >
              INSPECTOR PORTAL
            </h1>
          </strong>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="row align-items-stretch mb-5">
              <strong>
                <p>
                  Manage <span> Residents</span>{" "}
                </p>
              </strong>
              <div class="col-md-6">
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter Input*"
                    data-sb-validations="required"
                  />
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    data-sb-validations="required,email"
                  />
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div class="invalid-feedback" data-sb-feedback="email:email">
                    Email is not valid.
                  </div>
                </div>
                <div class="form-group mb-3">
                  <select class="form-select" id="inputGroupSelect02">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="col-sm-8">
                  <div class="form-group form-group-textarea mb-md-0">
                    <textarea
                      class="form-control"
                      id="message"
                      cols="4"
                      rows="5"
                      placeholder="Your Message *"
                      data-sb-validations="required"
                    ></textarea>
                    <div
                      class="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      A message is required.
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button
                  class="btn btn-primary btn-xl text-uppercase disabled"
                  id="submitButton"
                  type="submit"
                >
                  Save Button
                </button>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="row align-items-stretch mb-5">
              <strong>
                <p>
                  Register <span>Flights</span>{" "}
                </p>
              </strong>
              <div class="col-md-6">
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter Input*"
                    data-sb-validations="required"
                  />
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    data-sb-validations="required,email"
                  />
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div class="invalid-feedback" data-sb-feedback="email:email">
                    Email is not valid.
                  </div>
                </div>
                <div class="form-group mb-3">
                  <select class="form-select" id="inputGroupSelect02">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="col-sm-8">
                  <div class="form-group form-group-textarea mb-md-0">
                    <textarea
                      class="form-control"
                      cols="4"
                      rows="5"
                      id="message"
                      placeholder="Your Message *"
                      data-sb-validations="required"
                    ></textarea>
                    <div
                      class="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      A message is required.
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button
                  class="btn btn-primary btn-xl text-uppercase disabled"
                  id="submitButton"
                  type="submit"
                >
                  Save Button
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="row align-items-stretch mb-5">
              <strong>
                <p>
                  Manage <span>MoveOuts</span>{" "}
                </p>
              </strong>
              <div class="col-md-6">
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter Input*"
                    data-sb-validations="required"
                  />
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    data-sb-validations="required,email"
                  />
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div class="invalid-feedback" data-sb-feedback="email:email">
                    Email is not valid.
                  </div>
                </div>
                <div class="form-group mb-3">
                  <select class="form-select" id="inputGroupSelect02">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="col-sm-8">
                  <div class="form-group form-group-textarea mb-md-0">
                    <textarea
                      class="form-control"
                      cols="4"
                      rows="5"
                      id="message"
                      placeholder="Your Message *"
                      data-sb-validations="required"
                    ></textarea>
                    <div
                      class="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      A message is required.
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button
                  class="btn btn-primary btn-xl text-uppercase disabled"
                  id="submitButton"
                  type="submit"
                >
                  Save Button
                </button>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="row align-items-stretch mb-5">
              <strong>
                <p>
                  Inpects <span>Residents</span>{" "}
                </p>
              </strong>
              <div class="col-md-6">
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter Input*"
                    data-sb-validations="required"
                  />
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    data-sb-validations="required,email"
                  />
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div class="invalid-feedback" data-sb-feedback="email:email">
                    Email is not valid.
                  </div>
                </div>
                <div class="form-group mb-3">
                  <select class="form-select" id="inputGroupSelect02">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="col-sm-8">
                  <div class="form-group form-group-textarea mb-md-0">
                    <textarea
                      class="form-control"
                      cols="4"
                      rows="5"
                      id="message"
                      placeholder="Your Message *"
                      data-sb-validations="required"
                    ></textarea>
                    <div
                      class="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      A message is required.
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button
                  class="btn btn-primary btn-xl text-uppercase disabled"
                  id="submitButton"
                  type="submit"
                >
                  Save Button
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="row align-items-stretch mb-5">
              <strong>
                <p>
                  Inpects <span>Business</span>{" "}
                </p>
              </strong>
              <div class="col-md-6">
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter Input*"
                    data-sb-validations="required"
                  />
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    data-sb-validations="required,email"
                  />
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div class="invalid-feedback" data-sb-feedback="email:email">
                    Email is not valid.
                  </div>
                </div>
                <div class="form-group mb-3">
                  <select class="form-select" id="inputGroupSelect02">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="col-sm-8">
                  <div class="form-group form-group-textarea mb-md-0">
                    <textarea
                      class="form-control"
                      cols="4"
                      rows="5"
                      id="message"
                      placeholder="type here  *"
                      data-sb-validations="required"
                    ></textarea>
                    <div
                      class="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      A message is required.
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button
                  class="btn btn-primary btn-xl text-uppercase disabled"
                  id="submitButton"
                  type="submit"
                >
                  Save Button
                </button>
              </div>
            </div>

            <div class="col-md-6">
              <div class="col-sm-8">
                <div class="form-group form-group-textarea mb-md-0">
                  <p> CHAT</p>
                  <textarea
                    class="form-control"
                    cols="4"
                    rows="5"
                    id="message"
                    placeholder="chat here with Resident *"
                    data-sb-validations="required"
                  ></textarea>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    chat here.
                  </div>
                </div>
              </div>
            </div>
            <div class="text">
              <button
                class="btn btn-primary btn-xl text-uppercase disabled"
                id="submitButton"
                type="submit"
              >
                SEND{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inspectorpage;

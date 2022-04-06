/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import React, { useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import { hostName, schoolSvc } from "../constants/ApiEndPoints";

function Residentpage() {
  const [schools, setSchools] = React.useState([]);
  const [registeredSchools, setRegisteredSchools] = React.useState([]);
  const [selectedSchoolId, setSelectedSchoolId] = React.useState(null);

  const schoolsUrl = hostName + schoolSvc;

  useEffect(() => {
    fetch(schoolsUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSchools(data);
        fetchAllRegisteredSchools(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const checkIfUserIsRegistered = (register) => {
    const userList = register.split(",");
    return userList.includes(localStorage.getItem("user_id"));
  };

  const handleSchoolOption = (e) => {
    setSelectedSchoolId(e.target.value);
  };

  const fetchSchoolById = (id) => {
    return schools.find((school) => school.id === parseInt(id));
  };

  const fetchAllRegisteredSchools = (schools) => {
    const registeredSchools = [];
    schools.forEach((school) => {
      if (checkIfUserIsRegistered(school.acf.register)) {
        registeredSchools.push(school);
      }
    });
    console.log("registeredSchools", registeredSchools);
    setRegisteredSchools(registeredSchools);
  };

  const registerUserforSchool = (school) => {
    if (!checkIfUserIsRegistered(school.acf.register)) {
      console.log(school);
      fetch(schoolsUrl + `/${selectedSchoolId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("admin_token"),
        },
        body: JSON.stringify({
          acf: {
            register:
              school?.acf.register + "," + localStorage.getItem("user_id"),
          },
        }),
      });
    } else {
      alert("You are already registered for this school");
    }
  };

  return (
    <div class="sb-nav-fixed">
      <Navbar2 />

      <div class=" mb-md-0" style={{ padding: "100px" }}>
        <div class="text-center">
          <strong>
            <h1
              class="section-heading text-uppercase mb-3"
              style={{ padding: "80px" }}
            >
              hello resident
            </h1>
          </strong>
          <div class="row mb-5">
            <div class="col-sm-4">
              <strong>
                <p>
                  FLIGHT <span> DISCONTS </span>{" "}
                </p>
              </strong>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Flight</th>
                    <th scope="col">Date</th>
                    <th scope="col">Destination</th>
                    <th scope="col">Time</th>
                    <th scope="col">Disconts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>FL 305</td>
                    <td>02/04/21</td>
                    <td>Dallas</td>
                    <td>02:00pm</td>
                    <td> 20% </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>AB 786</td>
                    <td>13/11/21</td>
                    <td>New York</td>
                    <td>06:00pm</td>
                    <td> 20% </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>GH 612</td>
                    <td>21/11/21</td>
                    <td>Chicago</td>
                    <td>09:30pm</td>
                    <td> 20% </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>UW 892</td>
                    <td>13/11/21</td>
                    <td>Seattle</td>
                    <td>03:30pm</td>
                    <td> 20% </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>OB 901</td>
                    <td>02/04/21</td>
                    <td>San Francisco</td>
                    <td>10:30am</td>
                    <td> 20% </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-sm-4">
              <strong>
                <p>
                  Registered <span> Schools </span>{" "}
                </p>
              </strong>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Flight</th>
                    <th scope="col">Date</th>
                    <th scope="col">Destination</th>
                    <th scope="col">Time</th>
                    <th scope="col">Disconts</th>
                  </tr>
                </thead>
                <tbody>
                  {registeredSchools.map((school, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{school.title.rendered}</td>
                      <td>{school.acf.city}</td>
                      <td>{school.acf.state}</td>
                      <td>{school.acf.zip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-sm-5" style={{ paddingRight: "100px" }}>
            <form>
              <label>
                Choose Date :
                <input
                  type="date"
                  name="bday"
                  required
                  pattern="\d{4}-\d{2}-\d{2}"
                />
                <span class="validity"></span>
              </label>
            </form>
          </div>

          <br></br>
          <br></br>

          <div class="row">
            <div class="col-sm-6">
              <div class="row align-items-stretch mb-5">
                <strong>
                  <p>
                    School <span>Registration</span>{" "}
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
                    <div
                      class="invalid-feedback"
                      data-sb-feedback="email:email"
                    >
                      Email is not valid.
                    </div>
                  </div>
                  <div class="form-group mb-3">
                    <select
                      class="form-select"
                      id="inputGroupSelect02"
                      onChange={handleSchoolOption}
                    >
                      <option selected>Choose School...</option>
                      {schools.map((school) => (
                        <option value={school.id}>
                          {school.title.rendered}
                        </option>
                      ))}
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
                    class="btn btn-primary btn-xl text-uppercase"
                    id="submitButton"
                    type="submit"
                    onClick={() =>
                      registerUserforSchool(fetchSchoolById(selectedSchoolId))
                    }
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="row align-items-stretch mb-5">
                  <strong>
                    <p>
                      See<span>Business</span>{" "}
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
                      <div
                        class="invalid-feedback"
                        data-sb-feedback="email:email"
                      >
                        Email is not valid.
                      </div>
                    </div>
                    <div class="form-group mb-3">
                      <select class="form-select" id="inputGroupSelect02">
                        <option selected>Search for Business...</option>
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
                      REGISTER
                    </button>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="row align-items-stretch mb-5">
                      <strong>
                        <p>
                          See <span>Events</span>{" "}
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
                          <div
                            class="invalid-feedback"
                            data-sb-feedback="email:email"
                          >
                            Email is not valid.
                          </div>
                        </div>
                        <div class="form-group mb-3">
                          <select class="form-select" id="inputGroupSelect02">
                            <option selected>Search for Business...</option>
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
                          REGISTER
                        </button>
                      </div>
                    </div>
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
                        placeholder="chat here with Inspector *"
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
      </div>
    </div>
  );
}

export default Residentpage;

/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import React, { useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import {
  hostName,
  schoolSvc,
  businessSvc,
  eventSvc,
  flightSvc,
} from "../constants/ApiEndPoints";

function Residentpage() {
  const [schools, setSchools] = React.useState([]);
  const [registeredSchools, setRegisteredSchools] = React.useState([]);
  const [selectedSchoolId, setSelectedSchoolId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [events, setEvents] = React.useState([]);
  const [business, setBusiness] = React.useState([]);
  const [registeredEvents, setRegisteredEvents] = React.useState([]);
  const [registeredBusiness, setRegisteredBusiness] = React.useState([]);
  const [bussId, setBussId] = React.useState(null);
  const [selectedEventId, setSelectedEventId] = React.useState(null);
  const [flights, setFlights] = React.useState([]);

  const schoolsUrl = hostName + schoolSvc;
  const bussUrl = hostName + businessSvc;
  const eventUrl = hostName + eventSvc;
  const flightUrl = hostName + flightSvc;

  useEffect(() => {
    fetch(schoolsUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSchools(data);
        fetchAllRegisteredSchools(data);
      })
      .catch((err) => console.log(err));

    fetch(bussUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBusiness(data);
        fetchAllRegisteredBusiness(data);
      })
      .catch((err) => console.log(err));

    fetch(eventUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
        fetchAllRegisteredEvents(data);
      })
      .catch((err) => console.log(err));

    fetch(flightUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("Flights " + data);
        setFlights(data);
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

  const fetchBusinesssById = (id) => {
    return business.find((bus) => bus.id === parseInt(id));
  };
  const fetchEventById = (id) => {
    return events.find((event) => event.id === parseInt(id));
  };

  const fetchAllRegisteredEvents = (events) => {
    const registeredEvents = [];
    events.forEach((event) => {
      if (checkIfUserIsRegistered(event.acf.register)) {
        registeredEvents.push(event);
      }
    });
    console.log("registeredSchools", registeredSchools);
    setRegisteredEvents(registeredEvents);
  };
  const fetchAllRegisteredBusiness = (business) => {
    const registeredBussiness = [];
    business.forEach((bus) => {
      if (checkIfUserIsRegistered(bus.acf.register)) {
        registeredBussiness.push(bus);
      }
    });
    setRegisteredBusiness(registeredBussiness);
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
  const registerUserforEvent = (event) => {
    if (!checkIfUserIsRegistered(event.acf.register)) {
      console.log(event);
      fetch(eventUrl + `/${selectedEventId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("admin_token"),
        },
        body: JSON.stringify({
          acf: {
            register:
              event?.acf.register + "," + localStorage.getItem("user_id"),
          },
        }),
      });
    } else {
      alert("You are already registered for this Event");
    }
  };
  const registerUserforBusiness = (bus) => {
    console.log("business");
    if (!checkIfUserIsRegistered(bus.acf.register)) {
      console.log(bus);
      fetch(bussUrl + `/${bussId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("admin_token"),
        },
        body: JSON.stringify({
          acf: {
            register: bus?.acf.register + "," + localStorage.getItem("user_id"),
          },
        }),
      });
    } else {
      alert("You are already registered for this business");
    }
  };

  return (
    <div class="sb-nav-fixed">
      <Navbar2 />

      <div class="container-fluid mb-md-0">
        <div class="text-center">
          <strong>
            <h1 class="section-heading text-uppercase mb-3">hello resident</h1>
          </strong>
          <div class="row mb-5">
            <div class="col-md-8 m-auto">
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
                  {flights.map((flight, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{flight.title.rendered}</td>
                      <td>{flight.acf.date}</td>
                      <td>{flight.acf.destination}</td>
                      <td>{flight.acf.time}</td>
                      <td>12%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-md-8 m-auto">
              <strong>
                <p>
                  Registered <span> Schools </span>{" "}
                </p>
              </strong>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">School</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">zip</th>
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

          <br></br>
          <br></br>
          <div class="row mb-5">
            <div class="col-md-8 m-auto">
              <strong>
                <p>
                  Registered <span> Businesses </span>{" "}
                </p>
              </strong>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Business</th>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {registeredBusiness.map((bus, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{bus.title.rendered}</td>
                      <td>{bus.acf.date}</td>
                      <td>{bus.acf.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <br></br>
          <br></br>
          <div class="row mb-5">
            <div class="col-md-8 m-auto">
              <strong>
                <p>
                  Registered <span> Events </span>{" "}
                </p>
              </strong>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Event</th>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                    <th scope="col">Time</th>
                    <th scope="col">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {registeredEvents.map((event, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{event.title.rendered}</td>
                      <td>{event.acf.date}</td>
                      <td>{event.acf.description}</td>
                      <td>{event.acf.time}</td>
                      <td>{event.acf.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div class="row">
            <div class="col-md-8 m-auto">
              <div class="row align-items-stretch mb-5">
                <strong>
                  <p>
                    <span>Events Registration</span>{" "}
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
                      onChange={(e) => setSelectedEventId(e.target.value)}
                    >
                      {events.map((event) => (
                        <option value={event.id}>{event.title.rendered}</option>
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
                <div class="text-start">
                  <button
                    class="btn btn-primary btn-xl text-uppercase"
                    id="submitButton"
                    type="submit"
                    onClick={() =>
                      registerUserforEvent(fetchEventById(selectedEventId))
                    }
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-8 m-auto">
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
                <div class="text-start">
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
              <div class="col-md-8 m-auto">
                <div class="row align-items-stretch mb-5">
                  <strong>
                    <p>
                      <span>Business Registration</span>{" "}
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
                        onChange={(e) => setBussId(e.target.value)}
                      >
                        <option selected>Choose Business...</option>
                        {business.map((bus) => (
                          <option value={bus.id}>{bus.title.rendered}</option>
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
                  <div class="text-start">
                    <button
                      class="btn btn-primary btn-xl text-uppercase"
                      id="submitButton"
                      type="submit"
                      onClick={() =>
                        registerUserforBusiness(fetchBusinesssById(bussId))
                      }
                    >
                      REGISTER
                    </button>
                  </div>
                </div>

                <div class="row"></div>
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

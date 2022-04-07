/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import moveBlockInContentState from "draft-js/lib/moveBlockInContentState";
import React, { useEffect } from "react";
import moment from "moment";
import Navbar2 from "../components/Navbar2";
import {
  hostName,
  usersSvc,
  registerSvc,
  flightSvc,
  schoolSvc,
  businessSvc,
  eventSvc,
} from "../constants/ApiEndPoints";

function Inspectorpage() {
  const [users, setUsers] = React.useState([]);
  const [selectedUserId, setSelectedUserId] = React.useState(null);
  const [moveout, setMoveout] = React.useState();
  const [title, setTitle] = React.useState();
  const [destination, setDestination] = React.useState();
  const [date, setDate] = React.useState();
  const [time, setTime] = React.useState();
  const [school, setSchool] = React.useState();
  const [state, setState] = React.useState();
  const [city, setCity] = React.useState();
  const [zip, setZip] = React.useState();
  const [bussinessDate, setBussinessDate] = React.useState();
  const [description, setDescription] = React.useState();
  const [business, setBussiness] = React.useState();
  const [event, setEvent] = React.useState();
  const [eventdescription, setEventDescription] = React.useState();
  const [eventDate, setEventDate] = React.useState();
  const [eventTime, setEventTime] = React.useState();
  const [location, setLocation] = React.useState();

  useEffect(() => {
    const userUrl = hostName + usersSvc;
    fetch(userUrl).then((response) =>
      response.json().then((data) => {
        console.log(data);
        setUsers(data);
      })
    );
  }, []);
  const registerEvent = () => {
    const eventUrl = hostName + eventSvc;
    const eventObj = {
      title: event,
      acf: {
        description: eventdescription,
        date: eventDate,
        time: eventTime,
        location: location,
      },
      status: "publish",
    };
    fetch(eventUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(eventObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Event Created");
      })
      .catch((error) => alert("Error Registering Event"));
  };
  const reegisterSchool = () => {
    console.log("clicked");
    const schoolUrl = hostName + schoolSvc;
    const schoolObj = {
      title: school,
      acf: {
        city: city,
        state: state,
        zip: zip,
      },
      status: "publish",
    };
    fetch(schoolUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(schoolObj),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("School Created");
        console.log(data);
      })
      .catch((error) => alert("Error Registering School"));
  };
  const reegisterBusiness = () => {
    console.log("clicked");
    const bussinessUrl = hostName + businessSvc;
    const businessObj = {
      title: business,
      acf: {
        date: bussinessDate,
        description: description,
      },
      status: "publish",
    };
    fetch(bussinessUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(businessObj),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Business Created");
        console.log(data);
      })
      .catch((error) => alert("Error Registering Business"));
  };

  const registerFlights = () => {
    const flightUrl = hostName + flightSvc;
    const flight = {
      title: title,
      acf: {
        destination: destination,
        time: time,
        date: date,
      },
      status: "publish",
    };
    fetch(flightUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(flight),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Flight Created");
        console.log(data);
      })
      .catch((error) => alert("Error Registering Flight"));
  };
  const handleUserChange = (e) => {
    console.log(e.target.value);
    setSelectedUserId(e.target.value);
  };

  const fetchUserById = (id) => {
    return users.find((user) => user.id === parseInt(id));
  };
  const handleMoveOut = () => {
    const user = fetchUserById(selectedUserId);
    console.log(user);
    const endDate = moment(moveout, "DD-MM-YYYY");
    const startDate = moment(user.move_in, "DD-MM-YYYY");
    const userUrl = hostName + registerSvc + "/" + selectedUserId;
    if (moment(endDate).isAfter(startDate)) {
      fetch(userUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("admin_token"),
        },
        body: JSON.stringify({
          acf: {
            move_out: moveout,
          },
        }),
      }).then((res) => {
        if (res.ok) {
          alert("User Updated Successfully");
        } else {
          alert("Error while updating user");
        }
      });
    } else {
      alert("Move out date should be after move in date");
    }
  };

  return (
    <div className="sb-nav-fixed">
      <Navbar2 />

      <div className="container-fluid">
        <div className="text-center">
          <strong>
            <h1 className="section-heading text-uppercase mb-3">
              INSPECTOR PORTAL
            </h1>
          </strong>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="row align-items-stretch mb-5">
              <strong>
                <p>
                  Register <span>Flights</span>{" "}
                </p>
              </strong>
              <div className="col-lg-8 m-auto">
                <div className="form-group mb-3 ">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter Flight Name"
                    data-sb-validations="required"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div className="form-group mb-3 ">
                  <input
                    className="form-control"
                    id="email"
                    type="text"
                    placeholder="Enter Flight time"
                    data-sb-validations="required,email"
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
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
                <div className="form-group mb-3 ">
                  <input
                    className="form-control"
                    id="name"
                    type="date"
                    placeholder="Enter Flight Date"
                    onChange={(e) => setDate(e.target.value)}
                    data-sb-validations="required"
                    value={date}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div className="form-group mb-3 ">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter Flight Destination"
                    data-sb-validations="required"
                    onChange={(e) => setDestination(e.target.value)}
                    value={destination}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>

                <div className="text-center">
                  <button
                    className="btn btn-primary btn-xl text-uppercase "
                    id="submitButton"
                    type="submit"
                    onClick={() => registerFlights()}
                  >
                    Save Flight
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row align-items-stretch mb-5">
              <strong>
                <p>
                  Manage <span>MoveOuts</span>{" "}
                </p>
              </strong>
              <div className="col-lg-8 m-auto">
                <div className="form-group mb-3 ">
                  <label classNameName="form-label" for="form2Example11">
                    Move Out Date:
                  </label>
                  <input
                    className="form-control"
                    id="name"
                    type="date"
                    placeholder="Enter MoveOut date"
                    data-sb-validations="required"
                    onChange={(e) => setMoveout(e.target.value)}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A Date is required.
                  </div>
                </div>
                <div className="form-group mb-3">
                  <select
                    className="form-select"
                    id="inputGroupSelect02"
                    onChange={handleUserChange}
                  >
                    <option selected>Choose User...</option>
                    {users.map((user) => (
                      <option value={user.id}>{user.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group form-group-textarea mb-3">
                  <textarea
                    className="form-control"
                    cols="4"
                    rows="5"
                    id="message"
                    placeholder="Reason to move out"
                    data-sb-validations="required"
                  ></textarea>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    Reason to move out
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  id="submitButton"
                  type="submit"
                  onClick={() => handleMoveOut()}
                >
                  Save Button
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="row align-items-stretch mb-5">
              <strong>
                <p>
                  Register <span>Schools</span>{" "}
                </p>
              </strong>
              <div className="col-lg-8 m-auto">
                <div className="form-group mb-3 ">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter SchoolName"
                    data-sb-validations="required"
                    onChange={(e) => setSchool(e.target.value)}
                    value={school}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div className="form-group mb-3 ">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Enter School State"
                    data-sb-validations="required,email"
                    onChange={(e) => setState(e.target.value)}
                    value={state}
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
                <div className="form-group mb-3 ">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Enter School  City"
                    data-sb-validations="required,email"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
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
                <div className="form-group mb-3 ">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Enter School zip"
                    data-sb-validations="required,email"
                    onChange={(e) => setZip(e.target.value)}
                    value={zip}
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
              </div>

              <div className="text-center">
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  id="submitButton"
                  type="submit"
                  onClick={() => reegisterSchool()}
                >
                  Register School
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="row align-items-stretch mb-5">
              <strong>
                <p>
                  Register <span>Business</span>{" "}
                </p>
              </strong>
              <div className="col-lg-8 m-auto">
                <div className="form-group mb-3 ">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter Bussiness Name"
                    data-sb-validations="required"
                    onChange={(e) => setBussiness(e.target.value)}
                    value={business}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div className="form-group mb-3 ">
                  <input
                    className="form-control"
                    id="email"
                    type="date"
                    placeholder="Enter  Date"
                    data-sb-validations="required,email"
                    onChange={(e) => setBussinessDate(e.target.value)}
                    value={bussinessDate}
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

                <div className="form-group mb-3 ">
                  <input
                    className="form-control"
                    id="email"
                    type="text"
                    placeholder="Enter Description"
                    data-sb-validations="required,email"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
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
              </div>

              <div className="text-center">
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  id="submitButton"
                  type="submit"
                  onClick={() => reegisterBusiness()}
                >
                  Register Businesss
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="row align-items-stretch mb-5">
              <strong>
                <p>
                  Register <span>Events</span>{" "}
                </p>
              </strong>
              <div className="col-lg-8 m-auto">
                <div className="form-group mb-3 ">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter Event Name"
                    data-sb-validations="required"
                    onChange={(e) => setEvent(e.target.value)}
                    value={event}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div className="form-group mb-3 ">
                  <input
                    className="form-control"
                    id="email"
                    type="date"
                    placeholder="Enter Event Date"
                    data-sb-validations="required,email"
                    onChange={(e) => setEventDate(e.target.value)}
                    value={bussinessDate}
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

                <div className="form-group mb-3 ">
                  <input
                    className="form-control"
                    id="email"
                    type="text"
                    placeholder="Enter Event Description"
                    data-sb-validations="required,email"
                    onChange={(e) => setEventDescription(e.target.value)}
                    value={eventdescription}
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
                <div className="form-group mb-3 ">
                  <input
                    className="form-control"
                    id="email"
                    type="text"
                    placeholder="Enter Event time"
                    data-sb-validations="required,email"
                    onChange={(e) => setEventTime(e.target.value)}
                    value={eventTime}
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
                <div className="form-group mb-3 ">
                  <input
                    className="form-control"
                    id="email"
                    type="text"
                    placeholder="Enter Event location"
                    data-sb-validations="required,email"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
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
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  id="submitButton"
                  type="submit"
                  onClick={() => registerEvent()}
                >
                  Register Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inspectorpage;

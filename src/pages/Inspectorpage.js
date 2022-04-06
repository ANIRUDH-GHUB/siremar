/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import moveBlockInContentState from "draft-js/lib/moveBlockInContentState";
import React, { useEffect } from "react";
import moment from 'moment';
import Navbar2 from "../components/Navbar2";
import { hostName, usersSvc,registerSvc, flightSvc, schoolSvc, businessSvc, eventSvc } from "../constants/ApiEndPoints";


function Inspectorpage() {
const [users, setUsers] = React.useState([]);
const [selectedUserId, setSelectedUserId] = React.useState(null);
const [moveout, setMoveout] = React.useState();
const [title, setTitle] = React.useState();
const [destination, setDestination] = React.useState();
const [date, setDate] = React.useState();
const [time, setTime] = React.useState();
const[school, setSchool] = React.useState();
const[state, setState] = React.useState();
const[city, setCity] = React.useState();
const[zip, setZip] = React.useState();
const[bussinessDate,  setBussinessDate] = React.useState();
const[description, setDescription] = React.useState();
const[business,setBussiness]  = React.useState();
const[event, setEvent] = React.useState();
const[eventdescription, setEventDescription] = React.useState();
const[eventDate, setEventDate] = React.useState();
const[eventTime, setEventTime] = React.useState();
const[location, setLocation] = React.useState();

  useEffect(() => {
    const userUrl = hostName + usersSvc;
       fetch(userUrl)
       .then(response => response.json()
       .then(data => {console.log(data)
         setUsers(data)
      }))
  },[])
const registerEvent = () =>{
  const eventUrl = hostName + eventSvc;
  const eventObj = {
    title: event,
    acf:{
      description: eventdescription, 
      date: eventDate,
      time: eventTime,
      location: location
    },
    status: "publish",
  }
  fetch(eventUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization : "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify(eventObj)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
}
  const reegisterSchool = () => {
    console.log("clicked");
    const schoolUrl = hostName + schoolSvc;
    const schoolObj={
        title:school,
        acf:{
          city:city,
          state:state,
          zip: zip,
        },
        status: "publish",
      }
        fetch(schoolUrl,{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
          },
          body: JSON.stringify(schoolObj)
        })
        .then(response => response.json())
       .then(data => {
      console.log(data)
    })
        
    }
    const reegisterBusiness = () => {
      console.log("clicked");
      const bussinessUrl = hostName + businessSvc;
      const businessObj={
          title:business,
          acf:{
            date:bussinessDate,
            description:description,
          },
          status: "publish",
        }
          fetch(bussinessUrl,{
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(businessObj)
          })
          .then(response => response.json())
         .then(data => {
        console.log(data)
      })
    }

  const registerFlights = () => {
    const flightUrl = hostName + flightSvc;
    const flight = { 
      title: title,
      acf:{
      destination: destination,
      time: time,
      date: date,
      },
      status: "publish",
      }     
    fetch(flightUrl, {    
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify(flight)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }
  const handleUserChange =(e)=>{
    console.log(e.target.value);
    setSelectedUserId(e.target.value);
  }

  const fetchUserById = (id) => {
    return users.find((user) => user.id === parseInt(id));
  };
  const handleMoveOut =()=>{
    const user = fetchUserById(selectedUserId);
    console.log(user);
     const endDate = moment(moveout, "DD-MM-YYYY");
     const startDate = moment(user.move_in, "DD-MM-YYYY");
      const userUrl = hostName + registerSvc + "/" + selectedUserId;
      if(moment(endDate).isAfter(startDate)){
      fetch(userUrl,{
        method:'PUT',
        headers:{
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("admin_token"),
        },
        body:JSON.stringify({
          acf: {
            move_out: moveout
          },
        })
      });
    }
  }

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
                    placeholder="Enter Flight Name"
                    data-sb-validations="required"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
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
                    type="text"
                    placeholder="Enter Flight time"
                    data-sb-validations="required,email"
                    onChange = {(e) => setTime(e.target.value)}
                    value={time}
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
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="name"
                    type="date"
                    placeholder="Enter Flight Date"
                    onChange={(e) => setDate(e.target.value)}
                    data-sb-validations="required"
                    value={date}
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
                    id="name"
                    type="text"
                    placeholder="Enter Flight Destination"
                    data-sb-validations="required"
                    onChange={(e) => setDestination(e.target.value)}
                    value={destination}
                  />
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>

              <div class="text-center">
                <button
                  class="btn btn-primary btn-xl text-uppercase "
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
                <label className="form-label" for="form2Example11">
                          Move Out Date:
                        </label>
                  <input
                    class="form-control"
                    id="name"
                    type="date"
                    placeholder="Enter MoveOut date"
                    data-sb-validations="required"
                    onChange={(e) => setMoveout(e.target.value)}
                  />
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A Date is required.
                  </div>
                </div>
                <div class="form-group mb-3">
                  <select class="form-select" id="inputGroupSelect02"
                    onChange={handleUserChange}
                  >
                  <option selected>Choose User...</option>
                     { users.map(user => (
                        <option value={user.id}>
                          {user.name}
                          </option>
                      ))
                      }
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
                      placeholder="Reason to move out"
                      data-sb-validations="required"
                    ></textarea>
                    <div
                      class="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      Reason to move out
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button
                  class="btn btn-primary btn-xl text-uppercase"
                  id="submitButton"
                  type="submit"
                  onClick={()=>handleMoveOut()}
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
                  Register <span>Schools</span>{" "}
                </p>
              </strong>
              <div class="col-md-6">
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter SchoolName"
                    data-sb-validations="required"
                    onChange={(e) => setSchool(e.target.value)}
                    value={school}
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
                    placeholder="Enter School State"
                    data-sb-validations="required,email"
                    onChange={(e) => setState(e.target.value)}
                    value={state}
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
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="Enter School  City"
                    data-sb-validations="required,email"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
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
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="Enter School zip"
                    data-sb-validations="required,email"
                    onChange={(e) => setZip(e.target.value)}
                    value={zip}
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
               
              </div>
            
              <div class="text-center">
                <button
                  class="btn btn-primary btn-xl text-uppercase"
                  id="submitButton"
                  type="submit"
                  onClick={()=>reegisterSchool()}
                >
                  Register School
                </button>
              </div>
            </div>
          </div>


          <div class="col-sm-6">
            <div class="row align-items-stretch mb-5">
              <strong>
                <p>
                  Register <span>Business</span>{" "}
                </p>
              </strong>
              <div class="col-md-6">
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter Bussiness Name"
                    data-sb-validations="required"
                    onChange={(e) => setBussiness(e.target.value)}
                    value={business}
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
                    type="date"
                    placeholder="Enter  Date"
                    data-sb-validations="required,email"
                    onChange={(e) => setBussinessDate(e.target.value)}
                    value={bussinessDate}
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
                
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="email"
                    type="text"
                    placeholder="Enter Description"
                    data-sb-validations="required,email"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
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
                   
               
              </div>
            
              <div class="text-center">
                <button
                  class="btn btn-primary btn-xl text-uppercase"
                  id="submitButton"
                  type="submit"
                  onClick={()=>reegisterBusiness()}
                >
                  Register Businesss
                </button>
              </div>
            </div>
          </div>


          <div class="col-sm-6">
            <div class="row align-items-stretch mb-5">
              <strong>
                <p>
                  Register <span>Events</span>{" "}
                </p>
              </strong>
              <div class="col-md-6">
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter Event Name"
                    data-sb-validations="required"
                    onChange={ (e) => setEvent(e.target.value)}
                    value={event}
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
                    type="date"
                    placeholder="Enter Event Date"
                    data-sb-validations="required,email"
                    onChange={(e) => setEventDate(e.target.value)}
                    value={bussinessDate}
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
                
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="email"
                    type="text"
                    placeholder="Enter Event Description"
                    data-sb-validations="required,email"
                    onChange={(e) => setEventDescription(e.target.value)}  
                    value={eventdescription}
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
                <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="email"
                    type="text"
                    placeholder="Enter Event time"
                    data-sb-validations="required,email"
                    onChange = {(e) => setEventTime(e.target.value)}
                    value={eventTime}
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
                 <div class="form-group mb-3 ">
                  <input
                    class="form-control"
                    id="email"
                    type="text"
                    placeholder="Enter Event location"
                    data-sb-validations="required,email"
                    onChange = {(e) => setLocation(e.target.value)}
                    value={location}
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
              </div>
              <div class="text-center">
                <button
                  class="btn btn-primary btn-xl text-uppercase"
                  id="submitButton"
                  type="submit"
                  onClick={()=>registerEvent()}
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

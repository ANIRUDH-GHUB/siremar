/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Barchart from "../components/Barchart";
import Navbar2 from "../components/Navbar2";
import Loading from "../components/Loading";
import { hostName, schoolSvc, usersSvc } from "../constants/ApiEndPoints";
import Sidenav from "../components/Sidenav";

function Adminpage() {
  const [residents, setResidents] = React.useState([]);
  const [inspectors, setInspectors] = React.useState([]);
  const [schools, setSchools] = React.useState([]);
  const [businesses, setBusinesses] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const usersUrl = hostName + usersSvc;
    const schoolsUrl = hostName + schoolSvc;

    fetch(usersUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => {
        setIsLoading(false);
        setResidents(response.filter((user) => user.role === "subscriber"));
        setInspectors(response.filter((user) => user.role === "editor"));
      })
      .catch((error) => console.log(error.message));
    setIsLoading(true);
    fetch(schoolsUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => {
        setIsLoading(false);
        setSchools(response);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="sb-nav-fixed">
      <Navbar2 />
      <div id="layoutSidenav">
        <Sidenav />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Dashboard</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
              <div className="row mb-4">
                <div className="col-xl-3 col-md-6">
                  <Loading height={80} isLoading={isLoading}>
                    <div className="card bg-primary text-white mb-4">
                      <div className="card-body">
                        <h5>Manage Residents</h5>
                        <small
                          style={{ fontSize: "12px", paddingLeft: "100px" }}
                        >
                          {residents.length}
                        </small>
                      </div>
                    </div>
                  </Loading>
                </div>
                <div className="col-xl-3 col-md-6">
                  <Loading height={80} isLoading={isLoading}>
                    <div className="card bg-warning text-white mb-4">
                      <div className="card-body">
                        <h5>Manage Inspectors</h5>
                        <small
                          style={{ fontSize: "12px", paddingLeft: "100px" }}
                        >
                          {inspectors.length}
                        </small>
                      </div>
                    </div>
                  </Loading>
                </div>
                <div className="col-xl-3 col-md-6">
                  <Loading height={80} isLoading={isLoading}>
                    <div className="card bg-success text-white mb-4">
                      <div className="card-body">
                        <h5> Manage Business </h5>
                        <small
                          style={{ fontSize: "12px", paddingLeft: "100px" }}
                        >
                          1560
                        </small>
                      </div>
                    </div>
                  </Loading>
                </div>
                <div className="col-xl-3 col-md-6">
                  <Loading height={80} isLoading={isLoading}>
                    <div className="card bg-danger text-white mb-4">
                      <div className="card-body">
                        <h5>Manage Schools</h5>
                        <small
                          style={{ fontSize: "12px", paddingLeft: "100px" }}
                        >
                          {schools.length}
                        </small>
                      </div>
                    </div>
                  </Loading>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 offset-3">
                  <Barchart />
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 mt-3">
                  <h3>
                    {" "}
                    Residents <span> </span>{" "}
                  </h3>
                  <table className="table  table-bordered table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">MailID</th>
                      </tr>
                    </thead>
                    <tbody>
                      {isLoading ? (
                        <tr>
                          <td colSpan="1">
                            <Skeleton count={4} />
                          </td>
                          <td colSpan="1">
                            <Skeleton count={4} />
                          </td>
                          <td colSpan="1">
                            <Skeleton count={4} />
                          </td>
                          <td colSpan="1">
                            <Skeleton count={4} />
                          </td>
                        </tr>
                      ) : (
                        <>
                          {residents.map((res, index) => (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{res.name}</td>
                              <td>last</td>
                              <td>{res.email}</td>
                            </tr>
                          ))}
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="col-xl-6 mt-3">
                  <h3>
                    list of <span> counties </span>{" "}
                  </h3>
                  <table className="table  table-bordered table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col"> Name </th>
                        <th scope="col">ID</th>
                        <th scope="col"> Range </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Andrews</td>
                        <td>1</td>
                        <td>46738</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Angelina</td>
                        <td>2</td>
                        <td>786378</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Achar </td>
                        <td>3</td>
                        <td>785687</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-6">
                  <div className="col-sm-8">
                    <div className="form-group form-group-textarea mb-md-0">
                      <p> CHAT</p>
                      <textarea
                        className="form-control"
                        cols="4"
                        rows="5"
                        id="message"
                        placeholder="chat here with Resident *"
                        data-sb-validations="required"
                      ></textarea>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="message:required"
                      >
                        chat here.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text">
                  <button
                    className="btn btn-primary btn-xl text-uppercase disabled"
                    id="submitButton"
                    type="submit"
                  >
                    SEND{" "}
                  </button>
                </div>
              </div>
            </div>
          </main>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4"></div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Adminpage;

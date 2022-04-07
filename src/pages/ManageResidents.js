import React, { useEffect } from "react";
import Loading from "../components/Loading";
import Navbar2 from "../components/Navbar2";
import { hostName, registerSvc, usersSvc } from "../constants/ApiEndPoints";
import { FaPen, FaTrash } from "react-icons/fa";
import "./ManageResidents.css";
import moment from "moment";
import { Link } from "react-router-dom";
import { set } from "draft-js/lib/EditorState";

function ManageResidents() {
  const [residents, setResidents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState();
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [role, setRole] = React.useState();
  const [email, setEmail] = React.useState();
  const [dob, setDob] = React.useState();
  const [address, setAddress] = React.useState();
  const [password, setPassword] = React.useState();
  const [id, setId] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();
  const [openEditor, setOpenEditor] = React.useState(false);
  const [token, setToken] = React.useState(localStorage.getItem("admin_token"));
  const residentsUrl = hostName + usersSvc + "/subscriber";

  useEffect(() => {
    fetch(residentsUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => {
        setIsLoading(false);
        setResidents(response);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const handleSubmit = () => {
    setIsLoading(true);
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (token === "EMPTY") {
      alert("Error Resitering New User");
      return;
    }
    const userObj = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      roles: role,
      acf: {
        dob: dob,
        address: address,
      },
    };
    console.log(userObj);
    const registerUrl = hostName + registerSvc + `/${id}`;
    fetch(registerUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("User updated successfully");
        setOpenEditor(false);
        setIsLoading(false);

        // navigate("/login");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  const editHandler = (resident) => {
    console.log(resident);
    setOpenEditor(true);
    setId(resident.id);
    setUser(resident.name);
    setFirstName(resident.first_name);
    setLastName(resident.last_name);
    setEmail(resident.email);
    setDob(resident.dob);
    setAddress(resident.address);
    setPassword("");
    setConfirmPassword("");
  };

  const deleteHandler = (resident) => {
    let text = "Press a button!\nEither OK or Cancel.";
    if (window.confirm(text) == true) {
      const deleteUrl =
        hostName + registerSvc + `/${resident.id}?reassign=1&force=true`;
      fetch(deleteUrl, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("User deleted successfully");
          setResidents(residents.filter((r) => r.id !== resident.id));
        });
    }
  };
  return (
    <div>
      <Navbar2 />

      <div className="container">
        <div className="row">
          {openEditor ? (
            <form>
              <p>Enter New User Details</p>

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
                  Role
                </label>
                <select
                  className="form-select"
                  id="inputGroupSelect02"
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option selected>Choose Role...</option>
                  <option value="subscriber">Resident</option>
                  <option value="editor">Inspector</option>
                </select>
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
              </div>

              <div className="text-center pt-1 mb-5 pb-1">
                <button
                  id="submitButton"
                  className={`btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 ${
                    isLoading ? "disabled" : ""
                  }`}
                  type="button"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Update
                </button>
              </div>
            </form>
          ) : null}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <div className="table-responsive">
                <table className="table user-list">
                  <thead>
                    <tr>
                      <th>
                        <span>User</span>
                      </th>
                      <th>
                        <span>Firstname</span>
                      </th>
                      <th>
                        <span>Lastname</span>
                      </th>
                      <th>
                        <span>Move In</span>
                      </th>
                      <th>
                        <span>Move Out</span>
                      </th>
                      <th>
                        <span>Email</span>
                      </th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading
                      ? null
                      : residents.map((resident, index) => (
                          <tr>
                            <td>
                              <img
                                src={`https://bootdey.com/img/Content/avatar/avatar${
                                  (index % 5) + 1
                                }.png`}
                                alt=""
                              />
                              <a href="#" className="user-link">
                                {resident.first_name} {resident.last_name}
                              </a>
                              <span className="user-subhead">
                                {resident.role}
                              </span>
                            </td>
                            <td>{resident.first_name}</td>
                            <td>{resident.last_name}</td>
                            <td>
                              {moment(resident.move_in).format("MMMM Do YYYY")}
                            </td>
                            <td>
                              {moment(resident.move_out).format("MMMM Do YYYY")}
                            </td>

                            <td>
                              <a href="#">{resident.email}</a>
                            </td>
                            <td className="edit-icons">
                              <a
                                href="#"
                                className="table-link"
                                onClick={() => editHandler(resident)}
                              >
                                <FaPen />
                              </a>
                              <a
                                href="#"
                                className="table-link danger"
                                onClick={() => deleteHandler(resident)}
                              >
                                <FaTrash />
                              </a>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageResidents;

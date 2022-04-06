import React, { useEffect } from "react";
import Loading from "../components/Loading";
import Navbar2 from "../components/Navbar2";
import { hostName, schoolSvc } from "../constants/ApiEndPoints";
import { FaPen, FaTrash } from "react-icons/fa";
import "./ManageResidents.css";
import { Link } from "react-router-dom";
import { set } from "draft-js/lib/EditorState";

function ManageEvents() {
  const [schools, setSchools] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [title, setTitle] = React.useState();
  const [city, setCity] = React.useState();
  const [state, setState] = React.useState();
  const [zip, setZip] = React.useState();

  const [id, setId] = React.useState();
  const [openEditor, setOpenEditor] = React.useState(false);
  const [token, setToken] = React.useState(localStorage.getItem("admin_token"));
  const schoolsUrl = hostName + schoolSvc;

  useEffect(() => {
    fetch(schoolsUrl)
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
    const schoolObj = {
      title: title,
      acf: {
        city: city,
        state: state,
        zip: zip,
      },
    };
    console.log(schoolObj);
    const registerUrl = hostName + schoolSvc + `/${id}`;
    fetch(registerUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(schoolObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("User updated successfully");
        setIsLoading(false);

        // navigate("/login");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  const editHandler = (school) => {
    console.log(school);
    setOpenEditor(true);
    setId(school.id);
  };

  const deleteHandler = (school) => {
    let text = "Press a button!\nEither OK or Cancel.";
    if (window.confirm(text) == true) {
      const deleteUrl =
        hostName + schoolSvc + `/${school.id}?reassign=1&force=true`;
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
          setSchools(schools.filter((r) => r.id !== school.id));
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
              <p>Enter School Details</p>

              <div className="form-outline mb-4">
                <label className="form-label" for="form2Example11">
                  Title
                </label>
                <input
                  type="text"
                  id="form2Example11"
                  className="form-control"
                  placeholder="Username"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form2Example11">
                  City
                </label>
                <input
                  type="text"
                  id="form2Example12"
                  className="form-control"
                  placeholder="Firstname"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form2Example11">
                  State
                </label>
                <input
                  type="text"
                  id="form2Example13"
                  className="form-control"
                  placeholder="Lastname"
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form2Example11">
                  ZIP
                </label>
                <input
                  type="date"
                  id="form2Example14"
                  className="form-control"
                  placeholder="Date of Birth"
                  onChange={(e) => setZip(e.target.value)}
                  value={zip}
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
                        <span>Featured Image</span>
                      </th>
                      <th>
                        <span>Title</span>
                      </th>
                      <th>
                        <span>City</span>
                      </th>
                      <th>
                        <span>State</span>
                      </th>
                      <th>
                        <span>Zip</span>
                      </th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading
                      ? null
                      : schools.map((school, index) => (
                          <tr>
                            <td>
                              <img
                                src={`https://bootdey.com/img/Content/avatar/avatar${
                                  (index % 5) + 1
                                }.png`}
                                alt=""
                              />
                              {/* <a href="#" className="user-link">
                                {school.first_name} {school.last_name}
                              </a> */}
                              {/* <span className="user-subhead">Admin</span> */}
                            </td>
                            <td>{school.title.rendered}</td>
                            <td>{school.acf.city}</td>
                            <td>{school.acf.state}</td>

                            <td>{school.zip}</td>
                            <td className="edit-icons">
                              <a
                                href="#"
                                className="table-link"
                                onClick={() => editHandler(school)}
                              >
                                <FaPen />
                              </a>
                              <a
                                href="#"
                                className="table-link danger"
                                onClick={() => deleteHandler(school)}
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

export default ManageEvents;

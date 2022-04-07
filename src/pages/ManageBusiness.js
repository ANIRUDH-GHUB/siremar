import React, { useEffect } from "react";
import Loading from "../components/Loading";
import Navbar2 from "../components/Navbar2";
import {
  businessSvc,
  hostName,
  registerSvc,
  usersSvc,
} from "../constants/ApiEndPoints";
import { FaPen, FaTrash } from "react-icons/fa";
import "./ManageResidents.css";
import { Link } from "react-router-dom";
import { set } from "draft-js/lib/EditorState";

function ManageBusiness() {
  const [businessess, setBusinessess] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [title, setTitle] = React.useState();
  const [description, setDescription] = React.useState();
  const [date, setDate] = React.useState();
  const [image, setImage] = React.useState();
  const [register, setRegister] = React.useState();
  const [id, setId] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();
  const [openEditor, setOpenEditor] = React.useState(false);
  const [token, setToken] = React.useState(localStorage.getItem("admin_token"));
  const businessessUrl = hostName + businessSvc;

  useEffect(() => {
    fetch(businessessUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
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
        setBusinessess(response);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const handleSubmit = () => {
    setIsLoading(true);
    if (token === "EMPTY") {
      alert("Error Resitering New User");
      return;
    }
    const businessObj = {
      title: title,

      acf: {
        daate: date,
        description: description,
        image: image,
        register: register,
      },
    };
    console.log(businessObj);
    const registerUrl = hostName + businessSvc + `/${id}`;
    fetch(registerUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(businessObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOpenEditor(false);
        alert("Business updated successfully");
        setIsLoading(false);

        // navigate("/login");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  const editHandler = (business) => {
    console.log(business);
    setOpenEditor(true);
    setId(business.id);
    setTitle(business.title.rendered);
    setDescription(business.acf.description);
    setDate(business.acf.date);
    setImage(business.acf.image);
  };

  const deleteHandler = (business) => {
    let text = "Press a button!\nEither OK or Cancel.";
    if (window.confirm(text) == true) {
      const deleteUrl =
        hostName + businessSvc + `/${business.id}?reassign=1&force=true`;
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
          setBusinessess(businessess.filter((r) => r.id !== business.id));
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
              <p>Enter Business Details</p>

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
                  Description
                </label>
                <input
                  type="text"
                  id="form2Example12"
                  className="form-control"
                  placeholder="Firstname"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form2Example11">
                  Date
                </label>
                <input
                  type="date"
                  id="form2Example14"
                  className="form-control"
                  placeholder="Date of Birth"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form2Example11">
                  Image
                </label>
                <input
                  type="email"
                  id="form2Example16"
                  className="form-control"
                  placeholder="email address"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
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
                        <span>Description</span>
                      </th>
                      <th>
                        <span>Date</span>
                      </th>

                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading
                      ? null
                      : businessess.map((business, index) => (
                          <tr>
                            <td>
                              <img
                                src={`https://bootdey.com/img/Content/avatar/avatar${
                                  (index % 5) + 1
                                }.png`}
                                alt=""
                              />
                              {/* <a href="#" className="user-link">
                                {business.first_name} {business.last_name}
                              </a> */}
                              {/* <span className="user-subhead">Admin</span> */}
                            </td>
                            <td>{business.title.rendered}</td>
                            <td>{business.acf.description}</td>
                            <td>{business.acf.date}</td>

                            <td className="edit-icons">
                              <a
                                href="#"
                                className="table-link"
                                onClick={() => editHandler(business)}
                              >
                                <FaPen />
                              </a>
                              <a
                                href="#"
                                className="table-link danger"
                                onClick={() => deleteHandler(business)}
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

export default ManageBusiness;

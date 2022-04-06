import React, { useEffect } from "react";
import Loading from "../components/Loading";
import Navbar2 from "../components/Navbar2";
import { hostName, usersSvc } from "../constants/ApiEndPoints";
import "./ManageResidents.css";

function ManageResidents() {
  const [residents, setResidents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
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
        // console.log(response);
        setIsLoading(false);
        setResidents(response);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div>
      <Navbar2 />

      <div className="container">
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
                        <span>Role</span>
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
                              {/* <span className="user-subhead">Admin</span> */}
                            </td>
                            <td>{resident.role}</td>

                            <td>
                              <a href="#">{resident.email}</a>
                            </td>
                            <td style={{ width: "20%" }}>
                              <a href="#" className="table-link">
                                <span className="fa-stack">
                                  <i className="fa fa-square fa-stack-2x"></i>
                                  <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                </span>
                              </a>
                              <a href="#" className="table-link">
                                <span className="fa-stack">
                                  <i className="fa fa-square fa-stack-2x"></i>
                                  <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                </span>
                              </a>
                              <a href="#" className="table-link danger">
                                <span className="fa-stack">
                                  <i className="fa fa-square fa-stack-2x"></i>
                                  <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                </span>
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

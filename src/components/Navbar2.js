import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar2() {
  const username = localStorage.getItem("username");
  const user_role = localStorage.getItem("user_role");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("user_role");
    navigate("/login");
  };

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <Link className="navbar-brand ps-3" to="/">
        Siremar Admin
      </Link>

      <button
        className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        href="#!"
      >
        <i className="fas fa-bars"></i>
      </button>

      <ul className="navbar-nav  ms-auto me-3 me-lg-4">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home{" "}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="/adminpage"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {user_role}
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/">
              Action
            </Link>
            <Link className="dropdown-item" to="/">
              Another action
            </Link>
            <div className="dropdown-divider"></div>
            <div className="dropdown-item" onClick={() => handleLogout()}>
              Log out
            </div>
          </div>
        </li>
      </ul>

      <form className="d-none d-md-inline-block form-inline ms-md me-0 me-md-3 my-2 my-md-0">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search for..."
            aria-describedby="btnNavbarSearch"
          />
          <button
            className="btn btn-primary"
            id="btnNavbarSearch"
            type="button"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </nav>
  );
}

export default Navbar2;

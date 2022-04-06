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
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <Link class="navbar-brand ps-3" to="/">
        Siremar Admin
      </Link>

      <button
        class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        href="#!"
      >
        <i class="fas fa-bars"></i>
      </button>

      <ul class="navbar-nav  ms-auto me-3 me-lg-4">
        <li class="nav-item active">
          <Link class="nav-link" to="/">
            Home{" "}
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">
            About
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/services">
            Services
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">
            Contact
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/blog" class="nav-link">
            Blog
          </Link>
        </li>
        <li class="nav-item dropdown">
          <Link
            class="nav-link dropdown-toggle"
            to="/adminpage"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {user_role}
          </Link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link class="dropdown-item" to="/">
              Action
            </Link>
            <Link class="dropdown-item" to="/">
              Another action
            </Link>
            <div class="dropdown-divider"></div>
            <div class="dropdown-item" onClick={() => handleLogout()}>
              Log out
            </div>
          </div>
        </li>
      </ul>

      <form class="d-none d-md-inline-block form-inline ms-md me-0 me-md-3 my-2 my-md-0">
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search for..."
            aria-describedby="btnNavbarSearch"
          />
          <button class="btn btn-primary" id="btnNavbarSearch" type="button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>
    </nav>
  );
}

export default Navbar2;

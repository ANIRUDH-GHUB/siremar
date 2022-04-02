/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import React from "react";
import Barchart from "../components/Barchart";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";

function Adminpage() {
  return (
    <div class="sb-nav-fixed">
      <Navbar2 />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            class="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div class="sb-sidenav-menu">
              <div class="nav">
                <br></br>
                <br></br>
                <a class="nav-link" href="index.html">
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-tachometer-alt"></i>
                  </div>
                  Dashboard
                </a>

                <a
                  class="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                >
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-columns"></i>
                  </div>
                  Layouts
                  <div class="sb-sidenav-collapse-arrow">
                    <i class="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  class="collapse"
                  id="collapseLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav class="sb-sidenav-menu-nested nav">
                    <a class="nav-link" href="layout-static.html">
                      Static Navigation
                    </a>
                    <a class="nav-link" href="layout-sidenav-light.html">
                      Light Sidenav
                    </a>
                  </nav>
                </div>
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePages"
                  aria-expanded="false"
                  aria-controls="collapsePages"
                >
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-book-open"></i>
                  </div>
                  Pages
                  <div class="sb-sidenav-collapse-arrow">
                    <i class="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  class="collapse"
                  id="collapsePages"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav
                    class="sb-sidenav-menu-nested nav accordion"
                    id="sidenavAccordionPages"
                  >
                    <a
                      class="nav-link collapsed"
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#pagesCollapseAuth"
                      aria-expanded="false"
                      aria-controls="pagesCollapseAuth"
                    >
                      Authentication
                      <div class="sb-sidenav-collapse-arrow">
                        <i class="fas fa-angle-down"></i>
                      </div>
                    </a>
                    <div
                      class="collapse"
                      id="pagesCollapseAuth"
                      aria-labelledby="headingOne"
                      data-bs-parent="#sidenavAccordionPages"
                    >
                      <nav class="sb-sidenav-menu-nested nav">
                        <a class="nav-link" href="/wdm/login">
                          Login
                        </a>
                        <a class="nav-link" href="/wdm/register">
                          Register
                        </a>
                        <a class="nav-link" href="/wdm/password">
                          Forgot Password
                        </a>
                      </nav>
                    </div>
                    <a
                      class="nav-link collapsed"
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#pagesCollapseError"
                      aria-expanded="false"
                      aria-controls="pagesCollapseError"
                    >
                      Error
                      <div class="sb-sidenav-collapse-arrow">
                        <i class="fas fa-angle-down"></i>
                      </div>
                    </a>
                    <div
                      class="collapse"
                      id="pagesCollapseError"
                      aria-labelledby="headingOne"
                      data-bs-parent="#sidenavAccordionPages"
                    >
                      <nav class="sb-sidenav-menu-nested nav">
                        <a class="nav-link" href="401.html">
                          401 Page
                        </a>
                        <a class="nav-link" href="404.html">
                          404 Page
                        </a>
                        <a class="nav-link" href="500.html">
                          500 Page
                        </a>
                      </nav>
                    </div>
                  </nav>
                </div>

                <a class="nav-link" href="charts.html">
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-chart-area"></i>
                  </div>
                  Charts
                </a>
                <a class="nav-link" href="tables.html">
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-table"></i>
                  </div>
                  Tables
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid px-4">
              <h1 class="mt-4">Dashboard</h1>
              <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Dashboard</li>
              </ol>
              <div class="row">
                <div class="col-xl-3 col-md-6">
                  <div class="card bg-primary text-white mb-4">
                    <div class="card-body">
                      <h5>Manage Residents</h5>
                      <small style={{ fontSize: "12px", paddingLeft: "100px" }}>
                        20000
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6">
                  <div class="card bg-warning text-white mb-4">
                    <div class="card-body">
                      <h5>Manage Inspectors</h5>
                      <small style={{ fontSize: "12px", paddingLeft: "100px" }}>
                        154000
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6">
                  <div class="card bg-success text-white mb-4">
                    <div class="card-body">
                      <h5> Manage Business </h5>
                      <small style={{ fontSize: "12px", paddingLeft: "100px" }}>
                        1560
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6">
                  <div class="card bg-danger text-white mb-4">
                    <div class="card-body">
                      <h5>Manage Schools</h5>
                      <small style={{ fontSize: "12px", paddingLeft: "100px" }}>
                        9
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6 offset-3">
                  <Barchart />
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6 mt-3">
                  <h3>
                    {" "}
                    Residents <span> </span>{" "}
                  </h3>
                  <table class="table  table-bordered table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">MailID</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>pranavi</td>
                        <td>remidi</td>
                        <td>pranavi0205@gmail.com</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td> krishna chaithanya </td>
                        <td> Rayapudi </td>
                        <td>krishnachaithanya369@gmail.com</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>chinna</td>
                        <td>rayapudi</td>
                        <td>chinnarayapudi@gmail.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-xl-6 mt-3">
                  <h3>
                    list of <span> counties </span>{" "}
                  </h3>
                  <table class="table  table-bordered table-striped">
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
                <div class="col-md-6">
                  <div class="col-sm-8">
                    <div class="form-group form-group-textarea mb-md-0">
                      <p> CHAT</p>
                      <textarea
                        class="form-control"
                        cols="4"
                        rows="5"
                        id="message"
                        placeholder="chat here with Resident *"
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
          </main>
          <footer class="py-4 bg-light mt-auto">
            <div class="container-fluid px-4"></div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Adminpage;

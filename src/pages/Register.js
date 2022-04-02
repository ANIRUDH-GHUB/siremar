
/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Register.css'

function Register() {
  return (
    <div class="h-100 gradient-form">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
  
                  <div class="text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style={{width: '185px'}} alt="logo"/>
                    <h4 class="mt-1 mb-5 pb-1">We are The Siremar Team</h4>
                  </div>
  
                  <form>
                    <p>Please Register to your account</p>
  
                    <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example11">Name</label>
                      <input type="text" id="form2Example11" class="form-control" placeholder="Name"/>
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example11">Date of Birth</label>
                      <input type="date" id="form2Example11" class="form-control" placeholder="Date of Birth"/>
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example11">Address</label>
                      <input type="text" id="form2Example11" class="form-control" placeholder="Address"/>
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example11">Email</label>
                      <input type="email" id="form2Example11" class="form-control" placeholder="email address"/>
                    </div>
  
                    <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example22">Password</label>
                      <input type="password" id="form2Example22" class="form-control" />
                    </div>

                    <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example22">Confirm Password</label>
                      <input type="password" id="form2Example22" class="form-control" />
                    </div>
  
                    <div class="text-center pt-1 mb-5 pb-1">
                      <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Register</button>
                      <a class="text-muted" href="#!">Forgot password?</a>
                    </div>
  
                    <div class="d-flex align-items-center justify-content-center pb-4">
                      <p class="mb-0 me-2">Already have an account?</p>
                      <Link to="/login"><button type="button" class="btn btn-outline-danger">Login</button></Link>
                    </div>
  
                  </form>
  
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">We are more than just a company</h4>
                  <p class="small mb-0"> Welcome to Siremar when you register with us you get the best of everything. You get discounts on flights, schools,businesses etc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (  
            <div style={{marginBottom:"10%"}}>
               <nav class="navbar navbar-expand-lg navbar-dark fixed-top " id="mainNav" style={{backgroundColor:"#212529"}}>
            <div class="container">
                <div class="logo">
                    <Link to="/">Siremar</Link>
                    </div>
                {/* <a class="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><Link to="/">Home</Link></li>
                        <li class="nav-item"><Link to="/about">About</Link></li>
                        <li class="nav-item"><Link to="/services">Services</Link></li>
                        <li class="nav-item"><Link to="/contact">Contact</Link></li>
                        <li class="nav-item"><Link to="/login">Login / </Link><Link to="/register">Register</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    
  )
}

export default Navbar
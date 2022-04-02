

/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
  import React from 'react'

function Residentpage() {
  return (
    <div class="sb-nav-fixed">
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
       
    <a class="navbar-brand ps-3" href="index.html">Siremar Resident</a>
 

    <ul style={{paddingLeft: '800px'}} class="navbar-nav  ms-md-0 me-3 me-lg-4">
        <li class="nav-item active">
            <a class="nav-link" href="#">Home </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Admin
</a>
<div class="dropdown-menu" aria-labelledby="navbarDropdown">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">Something else here</a>
</div>
</li>
    </ul>


    <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div class="input-group">
            <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
            <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
        </div>
    </form>
  
</nav>

<div class=" mb-md-0" style={{padding:"100px"}}>
      <div class="text-center">
            <strong><h1 class="section-heading text-uppercase mb-3" style={{padding:"80px"}}>hello  resident</h1></strong>
<div class="row mb-5">
  <div class="col-sm-4">
  <strong><p>FLIGHT <span> DISCONTS </span> </p></strong>
  <table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Flight</th>
      <th scope="col">Date</th>
      <th scope="col">Destination</th>
      <th scope="col">Time</th>
      <th scope="col">Disconts</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>FL 305</td>
      <td>02/04/21</td>
      <td>Dallas</td>
      <td>02:00pm</td>
      <td> 20%  </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>AB 786</td>
      <td>13/11/21</td>
      <td>New York</td>
      <td>06:00pm</td>
      <td> 20%  </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>GH 612</td>
      <td>21/11/21</td>
      <td>Chicago</td> 
      <td>09:30pm</td> 
      <td> 20%  </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>UW 892</td>
      <td>13/11/21</td>
      <td>Seattle</td> 
      <td>03:30pm</td> 
      <td> 20%  </td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>OB 901</td>
      <td>02/04/21</td>
      <td>San Francisco</td>  
      <td>10:30am</td> 
      <td> 20%  </td>
    </tr>
  </tbody>
</table>
      </div>



      
      </div>
      <div class="col-sm-5" style={{paddingRight: '100px'}}>
        <form>
             <label>Choose Date :
             <input type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}"/>
             <span class="validity"></span>
          </label>
       </form>
</div>

      <br></br>
      <br></br>

<div class="row">
<div class="col-sm-6">
  <div class="row align-items-stretch mb-5">
  <strong><p>School <span>Registration</span> </p></strong>
                <div class="col-md-6">
                    <div class="form-group mb-3 ">
                 
                        <input class="form-control" id="name" type="text" placeholder="Enter Input*" data-sb-validations="required" />
                        <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                    </div>
                    <div class="form-group mb-3 ">
                    
                        <input class="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                        <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                        <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                    </div>
                    <div class="form-group mb-3">
            <select class="form-select" id="inputGroupSelect02">
            <option selected>Choose School...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
                </div>
                <div class="col-md-6">
                <div class="col-sm-8">
                    <div class="form-group form-group-textarea mb-md-0">
                        <textarea class="form-control"  cols="4" rows="5" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                        <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                    </div>
                    </div>
                </div>
                <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">REGISTER</button></div>
            </div>
             
             
  </div>
<div class="row">
<div class="col-sm-6">
  <div class="row align-items-stretch mb-5">
  <strong><p>See<span>Business</span> </p></strong>
                <div class="col-md-6">
                    <div class="form-group mb-3 ">
                 
                        <input class="form-control" id="name" type="text" placeholder="Enter Input*" data-sb-validations="required" />
                        <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                    </div>
                    <div class="form-group mb-3 ">
                    
                        <input class="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                        <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                        <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                    </div>
                    <div class="form-group mb-3">
            <select class="form-select" id="inputGroupSelect02">
            <option selected>Search for Business...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
                </div>
                <div class="col-md-6">
                <div class="col-sm-8">
                    <div class="form-group form-group-textarea mb-md-0">
                        <textarea class="form-control"  cols="4" rows="5" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                        <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                    </div>
                    </div>
                </div>
                <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">REGISTER</button></div>
            </div>
             
<div class="row">
<div class="col-sm-6">
  <div class="row align-items-stretch mb-5">
  <strong><p>See <span>Events</span> </p></strong>
                <div class="col-md-6">
                    <div class="form-group mb-3 ">
                 
                        <input class="form-control" id="name" type="text" placeholder="Enter Input*" data-sb-validations="required" />
                        <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                    </div>
                    <div class="form-group mb-3 ">
                    
                        <input class="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                        <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                        <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                    </div>
                    <div class="form-group mb-3">
            <select class="form-select" id="inputGroupSelect02">
            <option selected>Search for Business...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
                </div>
                <div class="col-md-6">
                <div class="col-sm-8">
                    <div class="form-group form-group-textarea mb-md-0">
                        <textarea class="form-control"  cols="4" rows="5" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                        <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                    </div>
                    </div>
                </div>
                <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">REGISTER</button></div>
            </div>
  
</div>
</div>
 <div class="col-md-6">
                <div class="col-sm-8">
                    <div class="form-group form-group-textarea mb-md-0"><p> CHAT</p>
                        <textarea class="form-control"  cols="4" rows="5" id="message" placeholder="chat here with Inspector *" data-sb-validations="required"></textarea>
                        <div class="invalid-feedback" data-sb-feedback="message:required">chat here.</div>
                    </div>
                    </div>
                </div>
    <div class="text"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">SEND </button></div>
 </div>
 
 
  </div>
  </div>
</div>
</div>
</div>

  )
}

export default Residentpage
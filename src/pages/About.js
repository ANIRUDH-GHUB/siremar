
/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (
    <div class="page-section" id="about">
        <Navbar/>
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">About</h2>
            <h3 class="section-subheading text-muted">Margarita  </h3>
        </div>
        <ul class="timeline">
            <li>
                <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4>2009-2011</h4>
                        <h4 class="subheading">Our Humble Beginnings</h4>
                    </div>
                    <div class="timeline-body"><p class="text-muted">Margarita is a lovely South American island that is part of Venezuela. The budget for this island is provided by the central government.</p></div>
                </div>
            </li>
            <li class="timeline-inverted">
                <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4>March 2011</h4>
                        <h4 class="subheading">We Are Move Home</h4>
                    </div>
                    <div class="timeline-body"><p class="text-muted">We offer the best services of registering us Margarita's residences in South america. Once you register with us you will be issued with an ID card which you can be sing to access discounts in various services like flights, schools, businesses,ferries and events</p></div>
                </div>
            </li>
            <li>
                <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4>Servies</h4>
                        <h4 class="subheading">Transition to Full Service</h4>
                    </div>
                    <div class="timeline-body"><p class="text-muted">
We offer the best We offer the best services of registering us Margarita's residences in South america.There are flights ,schools,hositals all these can be used by the residents of Margarita and to access discounts and events</p></div>
                </div>
            </li>
            <li class="timeline-inverted">
                <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4>July 2020</h4>
                        <h4 class="subheading">Phase Two Expansion</h4>
                    </div>
                    <div class="timeline-body"><p class="text-muted"> There are many facilities in the Margarita .We are also exanding this to provide many other facilities !</p></div>
                </div>
            </li>
            <li class="timeline-inverted">
                <div class="timeline-image">
                    <h4>
                        Be Part
                        <br />
                        Of Our
                        <br />
                        Story!
                    </h4>
                </div>
            </li>
        </ul>
    </div>
</div>
  )
}

export default About
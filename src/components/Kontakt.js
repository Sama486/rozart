import React from 'react'
import Map from './Map'
import { Image, People, PersonSquare, ChevronRight, ChevronLeft, Facebook, Linkedin, Twitter, Instagram } from "react-bootstrap-icons";

const Kontakt = () => {
  return (
    <>
    <section id="Instructors" class="p-f bg-black">
                <div class="container">
                    <h2 class="text-center text-white">Unser Team</h2>
                    <p class="lead text-center text-white mb-5">Nur Baba Leute an unseren Tischen!</p>
                    <div class="row g-4">
                        <div class="col-md-6 col-lg-3 mb-2">
                            <div class="card bg-dark text-warning" >
                                <div class="card-body text-center">
                                    <img src="https://randomuser.me/api/portraits/men/2.jpg" class="rounded-circle mb-3" alt=""></img>
                                    <h3 class="card-title mb-3">Rozart</h3>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus doloremque totam incidunt, quis veritatis asperiores.</p>
                                    <Twitter className='m-2' />
                                    <Facebook className='m-2' />
                                    <Linkedin className='m-2' />
                                    <Instagram className='m-2' />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="card bg-dark text-warning">
                                <div class="card-body text-center">
                                    <img src="https://randomuser.me/api/portraits/women/2.jpg" class="rounded-circle mb-3" alt=""></img>
                                    <h3 class="card-title mb-3">Sama486</h3>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus doloremque totam incidunt, quis veritatis asperiores.</p>
                                    <Twitter className='m-2' />
                                    <Facebook className='m-2' />
                                    <Linkedin className='m-2' />
                                    <Instagram className='m-2' />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="card bg-dark text-warning">
                                <div class="card-body text-center">
                                    <img src="https://randomuser.me/api/portraits/men/3.jpg" class="rounded-circle mb-3" alt=""></img>
                                    <h3 class="card-title mb-3">Jessi James</h3>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus doloremque totam incidunt, quis veritatis asperiores.</p>
                                    <Twitter className='m-2' />
                                    <Facebook className='m-2' />
                                    <Linkedin className='m-2' />
                                    <Instagram className='m-2' />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="card bg-dark text-warning">
                                <div class="card-body text-center">
                                    <img src="https://randomuser.me/api/portraits/women/6.jpg" class="rounded-circle mb-3" alt=""></img>
                                    <h3 class="card-title mb-3">Mahmoud</h3>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus doloremque totam incidunt, quis veritatis asperiores.</p>
                                    <Twitter className='m-2' />
                                    <Facebook className='m-2' />
                                    <Linkedin className='m-2' />
                                    <Instagram className='m-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Kontakt */}
            <section class="p-5 bg-dark">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-md">
                            <h2 class="text-center mb-4">Contact Info</h2>
                            <ul class="list-group list-group-flush lead">
                                <li class="list-group-item bg-dark text-warning">
                                    <span class="fw-bold">Main Location</span> Komm einfach Platten
                                </li>
                                <li class="list-group-item bg-dark text-warning">
                                    <span class="fw-bold">Enrollment Phone</span> (069) 184238
                                </li>
                                <li class="list-group-item bg-dark text-warning">
                                    <span class="fw-bold">Student Phone</span> (069) 733298
                                </li>
                                <li class="list-group-item bg-dark text-warning">
                                    <span class="fw-bold">Enrollment Email</span> Artellier@486.de
                                </li>
                                <li class="list-group-item bg-dark text-warning">
                                    <span class="fw-bold">Student Email</span> Artellier-Lehrling@486.de
                                </li>
                            </ul>
                        </div>
                        {/* Map */}
                        <div class="col-md">
                            <div id="map">
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    
  )
}

export default Kontakt
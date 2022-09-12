import React from 'react'
import kunst from './logos/Kunst1.jpg'
import { Container, Accordion, Button } from "react-bootstrap";
import { Image, People, PersonSquare, ChevronRight, ChevronLeft, Facebook, Linkedin, Twitter, Instagram } from "react-bootstrap-icons";
import logo from './logos/Logo-01.svg'
import Map from './Map.js';
import { Outlet, Link } from "react-router-dom";
import Kunstwerke from "./Kunstwerke.js";
const Home = () => {
    const images = [3, 2, 1].map((number) => ({
        src: `images/Art${number}.jpg`
    }));
    return (
        <>
            {/* Showcase */}
            <section className='bg-black text-light p-5 text-center p-lg-5 text-sm-start'>
                <Container>
                    <div class="d-sm-flex align-items-center justify-content-between">
                        <div>
                            <h1>Bewundere die Kunst des einzig Warhaftigen M.Rozart! <span class="text-warning">Stöff</span></h1>
                            <p class="lead my4">Der Brüs macht baba Kunstwerke und die haben es echt in sich, denn die sind besser als andere Kunstwerke<br />
                                Lasst euch in eine Welt fallen die ihr so zuvor noch nie gesehen habt.<br />
                                Wir bringen Kunst auf ein anderes Level! <span class="text-warning">#Levelup</span></p>
                        </div>
                        <img src={kunst} alt="Logo" style={{ borderRadius: '5px' }} className="img-fluid w-50 d-none d-sm-block"></img>
                    </div>
                </Container>
            </section>
            {/* Kunstwerke */}
            <section id="Kunstwerke" className="p-3 bg-dark">
                <div >
                    <div className=''>
                    <h1 className="text-warning p-3 ml-4 text-center">Kunstwerke</h1><br/>
                    <p className="text-warning text-center"><Link to="/kunstwerke" className="text-warning"  >zu den Kunstwerken</Link></p>
                    </div>
                    <div  id="Kunstwerke" className='d-flex justify-content-around'>
                        {images.map(image => {
                            return (
                                <div >
                                    <img src={image.src}   height="200px" width="250px" />
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
            {/* Boxes */}
            <section className="p-5 bg-black">
                <div class="container">
                    <div class="row text-center g-4">
                        <div class="col-md">
                            <div class="card bg-dark text-light">
                                <div class="card-body text-center">
                                    <div class="h1 mb-3,">
                                        <Image />
                                    </div>
                                    <h3 class="card-title mb-3">
                                        Bilder
                                    </h3>
                                    <p class="card-text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio sint error ipsum nesciunt veniam nisi.
                                    </p>
                                    <a href="#" class="btn btn-warning">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="card bg-secondary text-light">
                                <div class="card-body text-center">
                                    <div class="h1 mb-3">
                                        <PersonSquare />
                                    </div>
                                    <h3 class="card-title mb-3">
                                        Über uns
                                    </h3>
                                    <p class="card-text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio sint error ipsum nesciunt veniam nisi.
                                    </p>
                                    <a href="#" class="btn btn-dark">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="card bg-dark text-light">
                                <div class="card-body text-center">
                                    <div class="h1 mb-3">
                                        <People />
                                    </div>
                                    <h3 class="card-title mb-3">
                                        Kontakt
                                    </h3>
                                    <p class="card-text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio sint error ipsum nesciunt veniam nisi.
                                    </p>
                                    <a href="#" class="btn btn-warning">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Sections */}
            <section id="Learn" class="p-5 bg-dark">
                <div class="container">
                    <div class="row align-items-center justify-content-between  text-warning">
                        <div class="col-md">
                            <img src={logo} class="img-fluid" alt="react"></img>
                        </div>
                        <div class="col-md p-5">
                            <h2>Unsere Leidenschaft</h2>
                            <p class="lead">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ducimus expedita architecto, quas nemo nesciunt.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta iste rem aliquam?
                            </p>
                            <a href="#" class="btn btn-light mt-3">
                                <ChevronRight />  Read  More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="Learnr" class="p-5 bg-black text-light">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-md p-5">
                            <h2>Was uns so besonders macht</h2>
                            <p class="lead">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ducimus expedita architecto, quas nemo nesciunt.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta iste rem aliquam?
                            </p>
                            <a href="#" class="btn btn-light mt-3">
                                <ChevronLeft />  Read  More
                            </a>
                        </div>
                        <div class="col-md">
                            <img src={logo} class="img-fluid" alt="react"></img>
                        </div>
                    </div>
                </div>
            </section>
            {/* Accordion */}
            <Accordion defaultActiveKey="0" className='text-warning'>
                <Accordion.Item eventKey="0" >
                    <Accordion.Header className='text-warning'><p className='text-warning'>Warum sind wir so cool?</p></Accordion.Header>
                    <Accordion.Body className='accordionBody'>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><p className='text-warning'>Wieso ertrinken Fische nicht?</p></Accordion.Header>
                    <Accordion.Body className='accordionBody'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><p className='text-warning'>Was machen Sachen?</p></Accordion.Header>
                    <Accordion.Body className='accordionBody'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><p className='text-warning'>Kann man auch mit Doge zahlen?</p></Accordion.Header>
                    <Accordion.Body className='accordionBody'>
                        Nein!
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            {/* Cards */}
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

export default Home
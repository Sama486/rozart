import React from 'react'
import kunst from './logos/Kunst1.jpg'
import { Container, Accordion, Button } from "react-bootstrap";
import { Image, People, PersonSquare, ChevronRight, ChevronLeft, Facebook, Linkedin, Twitter, Instagram } from "react-bootstrap-icons";
import logo from './logos/Logo-01.svg'
import {promises as fs} from 'fs'
const Uberuns = () => {
  return (
    <>
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
    </>
  )
}

export default Uberuns
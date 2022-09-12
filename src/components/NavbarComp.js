import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import React, { Component } from 'react'
import Home from "./Home.js";
import Kunstwerke from "./Kunstwerke.js";
import Uberuns from "./Uberuns.js";
import Kontakt from "./Kontakt.js";
import Niederlassung from "./Niederlassung.js";
import Sonstiges from "./Sonstiges.js";
import NavLogo from './logos/Logo-02.png'


export default class NavbarComp extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="bg-black">
                    <Navbar bg="dark" variant={"dark"} expand="lg" sticky='top' >
                        <Container>
                            <Navbar.Brand href="#home"><img src={NavLogo} alt="Logo" className="logo" />M.Rozart</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Container className="text-end">
                                    <Nav className="justify-content-end">
                                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                                        <Nav.Link as={Link} to="/kunstwerke">Kunstwerke</Nav.Link>
                                        <NavDropdown title="Info" id="basic-nav-dropdown">
                                            <NavDropdown.Item as={Link} to="/uberuns">Über uns</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/kontakt">Kontakt</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/niederlassung">Niederlassung</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item as={Link} to="/sonstiges">Sonstiges</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Container>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/kunstwerke" element={<Kunstwerke />} />
                            <Route path="/uberuns" element={<Uberuns />} />
                            <Route path="/kontakt" element={<Kontakt />} />
                            <Route path="/niederlassung" element={<Niederlassung />} />
                            <Route path="/sonstiges" element={<Sonstiges />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
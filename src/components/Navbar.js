// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import logo from './img/generic-law-logo.webp';

function CustomNavbar() {
    return (
        <Navbar expand="lg" variant="darkk" className="navbar-bg">
            <Container>
                <Navbar.Brand href="#">
                    {/* <img src={logo} alt="Law Firm Logo" width="50" /> */}
                    <span className="navbar-brand-text">Legal Associates</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#expertise">Expertise</Nav.Link>
                        <Nav.Link href="#team">Our Team</Nav.Link>
                        <Nav.Link href="#news">News and Insights</Nav.Link>
                        <Nav.Link href="#careers">Careers</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;

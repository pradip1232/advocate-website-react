import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { NavLink, useLocation } from 'react-router-dom';
import { siteData } from '../data/siteData';

// Using a placeholder logo URL
const logo = 'https://via.placeholder.com/130x124/2c3e50/ffffff?text=Legal+Associates';

function NavbarHeader() {
    const [scrolled, setScrolled] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const closeNav = () => {
        setIsOpen(false);
    };
    // start to tio side any pages 
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // const ScrollToTop = () => {

    //     useEffect(() => {
    //         window.scrollTo(0, 0);
    //     }, []);

    //     return null;
    // };


    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Helmet>
                <link rel="icon" type="image/png" href={logo} />
            </Helmet>

            <Container fluid className="p-0">
                <Navbar
                    expand="lg"
                    variant="dark"
                    className={`main-custom-navbar ${isOpen ? "open" : ""} navbar-header position-fixed ${scrolled ? 'scrolled' : ''}`}
                >
                    <Container fluid className="">
                        <Row className="align-items-center w-100 logo-colmn">
                            <Col md={2} xs={4} className=''>
                                <Navbar.Brand href="/" className={`logo ${isOpen ? "hide" : ""}`}>
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        style={{
                                            width: scrolled ? '40px' : '130px',
                                            height: scrolled ? '40px' : '124px',
                                            transition: 'width 0.3s, height 0.3s',

                                        }}

                                        className="responsive-logo"
                                    />
                                </Navbar.Brand>
                            </Col>
                            <Col md={10} xs={4} className="text-end">
                                <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggle} />
                                <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
                                    <button className="close-btn close-btn-navbar" onClick={closeNav}>&times;</button>
                                    <Navbar.Collapse id="navbar-nav mobile-nav-links">
                                        <Nav className="ms-auto navbar-gaping-custom">
                                            <NavLink to="/" className="nav-link">Home</NavLink>
                                            <NavLink to="/about" className="nav-link">About Us</NavLink>
                                            <NavLink to="/expertise" className="nav-link">Expertise</NavLink>
                                            <NavLink to="/our-team" className="nav-link">Our Team</NavLink>
                                            <NavLink to="/news-and-insights" className="nav-link">News and Insights</NavLink>
                                            <NavLink to="/careers" className="nav-link">Careers</NavLink>
                                            <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                                        </Nav>
                                    </Navbar.Collapse>
                                </div>


                                <hr
                                    className={`navbar-bottom-line ${scrolled ? 'd-none' : ''}`}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            </Container>
        </>
    );
}

export default NavbarHeader;

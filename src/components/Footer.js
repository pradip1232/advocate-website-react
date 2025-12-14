import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { siteData } from '../data/siteData';
import face from './img/Group.webp';
import wa from './img/Group 2.webp';
import ins from './img/Group 4.webp';
import tt from './img/Group-1.webp';

import './css/Footer.css';
function Footer() {
    return (
        <footer style={{ backgroundColor: '#3A1907', color: '#fff', padding: '30px 0' }}>
            <Container>
                <Row className="text-center text-md-start footer-top-row">
                    {/* Logo and Description */}
                    <Col xs={12} md={3} className="mb-4">
                        {/* <img href='/' src={logo} className='footer-logo-images' /> */}
                        <h3 className='footer-brand-name'>Legal Associates</h3>
                        <h4 className='main-heading-footer'>
                            Legal Associates is a full-service law firm, providing you an extensive range of legal services.
                        </h4>
                    </Col>

                    {/* Useful Links */}
                    <Col xs={12} md={3} className="mb-4">
                        <h5>USEFUL LINKS</h5>
                        <ul className="list-unstyled">
                            <li><a href="/about" className="text-decoration-none text-white">About Us</a></li>
                            <li><a href="/expertise" className="text-decoration-none text-white">Expertise</a></li>
                            <li><a href="/our-team" className="text-decoration-none text-white">Our Team</a></li>
                            <li><a href="/news-and-insights" className="text-decoration-none text-white">News And Insights</a></li>
                            <li><a href="/careers" className="text-decoration-none text-white">Careers</a></li>
                            <li><a href="/contact" className="text-decoration-none text-white">Contact Us</a></li>
                            <li><a href="/privacy-security" className="text-decoration-none text-white">Privacy & Security</a></li>
                            <li><a href="/terms-of-use" className="text-decoration-none text-white">Terms Of Use</a></li>
                            <li><a href="/cookie-policy" className="text-decoration-none text-white">Cookie Policy</a></li>
                        </ul>

                    </Col>

                    {/* Contact Information */}
                    <Col xs={12} md={3} className="mb-4">
                        <h5>CONTACT US</h5>
                        <p>
                            <Row>
                                <Col md={1} className='p-0'>

                                    <FaPhone />
                                </Col>
                                <Col md={10}>

                                    +1 (555) 123-4567, +1 (555) 987-6543
                                </Col>
                            </Row>

                        </p>
                        <p>
                            <Row>
                                <Col className='p-0' md={1}>

                                    <FaMapMarkerAlt />
                                </Col>
                                <Col md={10}>

                                    Address: Legal Associates Law Firm, 123 Justice Street, Suite 456, Legal District, City - 12345
                                </Col>

                            </Row>
                        </p>
                        <p>
                            <Row>
                                <Col md={1} className='p-0'>

                                    <FaMapMarkerAlt />

                                </Col>
                                <Col md={10} >

                                    Office: 789 Attorney Avenue, Professional Plaza, City - 12345
                                </Col>
                            </Row>



                        </p>
                        <p>
                            <Row>
                                <Col md={1} className='p-0'>
                                    <FaEnvelope />
                                </Col>
                                <Col md={10}>
                                    contact@legalassociates.com
                                </Col>
                            </Row>


                        </p>


                    </Col>
                    {/* Contact Information */}
                    <Col xs={12} md={3} className="mt-4 social-colmn-footer">

                        {/* Social Media Icons */}
                        <div className="d-flex justify-content-center justify-content-md-start mt-3">
                            <a href="#" className="text-white me-3"><img src={face} /></a>
                            <a href="#" className="text-white me-3"><img src={wa} /></a>
                            <a href="#" className="text-white me-3"><img src={ins} /> </a>
                            <a href="#" className="text-white"><img src={tt} /></a>
                        </div>
                        <p>
                            <Row>
                                <Col md={1} className='p-0'>

                                    <FaMapMarkerAlt />
                                </Col>
                                <Col md={10}>
                                    <p>

                                        Visiting hours:
                                        Office: 9:00 AM To 6:00 PM Monday-Friday.
                                    </p>
                                    <p>

                                        Consultations:
                                        9:00 AM TO 5:00 PM Monday through Friday
                                    </p>
                                </Col>

                            </Row>


                        </p>


                    </Col>
                </Row>

                <Row className="text-center footer-last-headhing">
                    <Col>
                        <p>&copy; 2024 Legal Associates. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;

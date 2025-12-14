import React, { useEffect, useState } from 'react';
import './index.scss';
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField, Button } from '@mui/material';
import { motion } from "framer-motion";
import { contactUsData } from './contactUsData';

import ff from '../../components/img/contact us page img 1.webp';
import loca from '../../components/img/Screenshot 2024-10-17 115634 1.webp';
import location from '../../components/img/location.webp';
import add from '../../components/img/material-symbols-light_meeting-room-outline.webp';
import con from '../../components/img/cil_contact.webp';
import vector from '../../components/img/Vector-3.webp';

const ContactUs = () => {
  const [hovered, setHovered] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    subject: '',
    description: '',
    preferredContact: '',
  });
  const [errors, setErrors] = useState({});

  const circleVariants = (index) => ({
    initial: {
      cx: Math.random() * 400,
      cy: Math.random() * 400,
    },
    animate: {
      cx: Math.random() * 400,
      cy: Math.random() * 400,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
    hover: {
      cx: hovered === index ? Math.random() * 400 + 400 : undefined,
      cy: hovered === index ? Math.random() * 400 + 400 : undefined,
      transition: {
        duration: 0.5,
      },
    },
  });

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required.';
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number must be exactly 10 digits.';
    }
    if (!formData.emailAddress) {
      newErrors.emailAddress = 'Email Address is required.';
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.emailAddress)
    ) {
      newErrors.emailAddress = 'Invalid email format.';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required.';
    if (!formData.description) newErrors.description = 'Description is required.';
    if (!formData.preferredContact) {
      newErrors.preferredContact = 'Preferred contact method is required.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (window.gtag_report_conversion) {
      console.log("Calling gtag_report_conversion");
      window.gtag_report_conversion();
    } else {
      console.error("gtag_report_conversion is not defined");
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.status === 'success') {
          toast.success(data.message, {
            position: 'top-right',
            autoClose: 5000,
          });
          setFormData({
            fullName: '',
            phoneNumber: '',
            emailAddress: '',
            subject: '',
            description: '',
            preferredContact: '',
          });
        } else {
          toast.error(data.message || 'An unexpected error occurred on the server.', {
            position: 'top-right',
            autoClose: 5000,
          });
        }
      } else {
        const errorData = await response.json();
        console.error('Server Error Response:', errorData);
        toast.error(errorData.message || 'Failed to submit the form. Please try again.', {
          position: 'top-right',
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      toast.error(`An error occurred: ${error.message}. Please try again.`, {
        position: 'top-right',
        autoClose: 5000,
      });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contactform') {
      const formSection = document.getElementById('contactformSection');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="contact-us">
      <section className="contact-container position-relative">
        <div className="contact-content position-absolute top-50 start-50 translate-middle text-center text-white px-3">
          <h1 className="display-4 fw-bold">Get in Touch with Our Law Firm</h1>
          <hr />
        </div>
      </section>

      <section className='adrees-contact-cards'>
        <Container className="py-4">
          <Row className="g-4">
            <Col md={4} sm={12} className="d-flex align-items-stretch">
              <Card className="text-center contact-cards shadow-sm border-1 flex-grow-1">
                <Card.Body className="d-flex flex-column align-items-center">
                  <div className="d-flex justify-content-center">
                    <img src={location} className="img-fluid" alt="Location" />
                  </div>
                  <Card.Title className="fw-bold">ADDRESS</Card.Title>
                  <Card.Text className="mt-auto">
                    Address: Legal Associates Law Firm<br />
                    123 Justice Street, Suite 456<br />
                    Legal District, City - 12345
                    <br />
                    <br />
                    Office: 789 Attorney Avenue<br />
                    Professional Plaza, City - 12345
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={12} className="d-flex align-items-stretch">
              <Card className="text-center contact-cards shadow-sm flex-grow-1">
                <Card.Body className="d-flex flex-column align-items-center">
                  <div className="d-flex justify-content-center">
                    <img src={con} className="img-fluid" alt="Contact" />
                  </div>
                  <Card.Title className="fw-bold">CONTACT</Card.Title>
                  <Card.Text className="mt-autoo">
                    +1 (555) 123-4567 <br />
                    +1 (555) 987-6543 <br />
                    contact@legalassociates.com
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={12} className="d-flex align-items-stretch">
              <Card className="text-center contact-cards shadow-sm flex-grow-1">
                <Card.Body className="d-flex flex-column align-items-center">
                  <div className="d-flex justify-content-center">
                    <img src={add} className="img-fluid" alt="Visiting Hours" />
                  </div>
                  <Card.Title className="fw-bold">VISITING HOURS</Card.Title>
                  <Card.Text className="mt-autoo">
                    Office: 9:00 AM to 6:00 PM Monday-Friday<br />
                    <br />
                    Consultations: 9:00 AM to 5:00 PM <br />
                    Monday through Friday
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id='contactformSection'>
        <Container className="py-5 online-container-contact animate__animated">
          <h2 className="text-center mb-4">ONLINE INQUIRY FORM</h2>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={6} sm={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Name *"
                  placeholder="Enter your full name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={!!errors.fullName}
                  helperText={errors.fullName}
                />
              </Col>
              <Col md={6} sm={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Phone Number *"
                  placeholder="Enter your phone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your email address"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  error={!!errors.emailAddress}
                  helperText={errors.emailAddress}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter subject of inquiry"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={!!errors.subject}
                  helperText={errors.subject}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  variant="outlined"
                  placeholder="Provide a brief description of your legal issue"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  error={!!errors.description}
                  helperText={errors.description}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter preferred method of contact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  error={!!errors.preferredContact}
                  helperText={errors.preferredContact}
                />
              </Col>
            </Row>

            <Row className="mt-4">
              <Col className="text-end">
                <Button
                  variant="contained"
                  className="submit-btn-contact"
                  type="submit"
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>

      <ToastContainer />

      <section className="location-section">
        <div className="w-full h-[400px] flex justify-center items-center">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.309!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuMyJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
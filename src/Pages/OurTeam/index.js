import React from 'react';
import './index.scss';
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ourTeamData } from './ourTeamData';

import ff from '../../components/img/Group 7.webp';

const OurTeam = () => {
  return (
    <div className="our-team">
      <section className='team-section-container position-relative'>
        <img src={ff} className='img-fluid w-100' alt="Our Team" />
        <div className="contact-content our-team-content-first position-absolute top-50 start-50 translate-middle text-center text-white px-3">
          <h1 className="display-4 fw-bold">MEET OUR TEAM</h1>
          <hr />
        </div>
      </section>

      <section className='team cards-section'>
        <Container className="py-5">
          <Row className="g-4">
            {ourTeamData.teamMembers.map((member, index) => (
              <Col key={index} md={4} sm={6} xs={12} className="d-flex justify-content-center">
                <Card
                  className="text-center border border-secondary slider-cards-our-team"
                  style={{ width: "18rem", height: "15rem" }}
                >
                  <Card.Body className="d-flex flex-column justify-content-end">
                    <Card.Title className="fw-bold">{member.role}</Card.Title>
                    <Card.Text>{member.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default OurTeam;
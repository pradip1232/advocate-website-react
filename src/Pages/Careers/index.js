import React, { useState } from 'react';
import './index.scss';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { careersData } from './careersData';

import ff from '../../components/img/9 1.webp';
import int from '../../components/img/internship 1.webp';
import mask from '../../components/img/Mask group 2.webp';
import ww from '../../components/img/why choose us img 1.webp';

const Careers = () => {
  const [activeText, setActiveText] = useState(1);

  const overlayTexts = {
    1: "We foster an environment that encourages continuous learning and career development. Whether you're just starting your legal career or you're an experienced professional, you'll have the opportunity to grow with us.",
    2: "At our law firm, we believe in the power of teamwork. You'll work alongside a talented group of attorneys and support staff who share a commitment to achieving the best results for our clients.",
    3: "From personal injury to business disputes, we handle a wide range of legal cases. Joining our firm will give you exposure to diverse legal challenges, allowing you to expand your expertise.",
    4: "Our commitment to personalized legal service ensures that you will make a meaningful difference in the lives of our clients."
  };

  return (
    <div className="careers">
      <section className='career-section position-relative'>
        <div className="career-content position-absolute top-50 start-50 translate-middle text-center text-white px-3">
          <h1 className="display-4 fw-bold">Shape Your Future with Our Law Firm</h1>
          <hr />
        </div>
      </section>

      <section className='container-section-career'>
        <div className='container'>
          <div className=" row justify-content-center career-opp-container">
            <div className="col-md-5 col-sm-12  text-left justify-content-center aligns-center firstcolmn-career-pages">
              <h2>Career Opportunities at Our Law Firm</h2>
              <p>At our law firm, our success is built on the dedication and expertise of our team. We are passionate about creating a collaborative, inclusive, and dynamic workplace where every team member can thrive, grow, and make a meaningful impact. If you are driven, compassionate, and committed to excellence, we invite you to explore the exciting career opportunities with us.</p>
            </div>
            <div className="col-md-6 col-sm-12 text-center seconds-colmn-career-pages">
              <img src={mask} alt="Career opportunities" />
            </div>
          </div>
        </div>
      </section>

      <section className="why-join-career-section">
        <h2 className='career-why-join-heading'>WHY JOIN US ?</h2>
        <Container>
          <Row className='prefessional-growth-career-section'>
            <Col md={7}>
              <Card className="p-2 why-card-career border dots-on-border">
                <div className="image-container-career position-relative">
                  <img src={ww} className="img-fluid w-100" alt="Card image" />
                  <div className="overlay-text">
                    <h5 className="text-whitee">{overlayTexts[activeText]}</h5>
                  </div>
                </div>

                <div className="dot first" onClick={() => setActiveText(1)}>
                  <span>Professional Growth</span>
                </div>
                <div className="dot second" onClick={() => setActiveText(2)}>
                  <span>Collaborative Environment</span>
                </div>
                <div className="dot third" onClick={() => setActiveText(3)}>
                  <span>Diverse Practice Areas</span>
                </div>
                <div className="dot fourth" onClick={() => setActiveText(4)}>
                  <span>Client-Centered Approach</span>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='cuerrnt-section '>
        <Container>
          <h2 className='current-opening-heading'>Current Openings</h2>
          <Row className='current-opening-row'>
            <Col md={10}>
              <h2>Associate Attorney</h2>
              <ul>
                <li>Associate Attorney</li>
                <li>Requirements: Law degree (JD/LLB), Bar admission and 2+ years of legal experience.</li>
              </ul>
            </Col>
            <hr />
          </Row>
          <Row className='current-opening-row'>
            <Col md={10}>
              <h2>Legal Assistant</h2>
              <ul>
                <li>Provide administrative support to attorneys and manage client communications</li>
                <li>Requirements: Strong organizational skills, Drafting skills, attention to detail, and excellent communication abilities.</li>
              </ul>
            </Col>
            <hr />
          </Row>
        </Container>
      </section>

      <section className='intership-container-apply'>
        <Container>
          <Row>
            <Col md={6} className='text-right text-end'>
              <img src={int} className='img-fluid law-firm-with-girl-career' alt="Internship program" />
            </Col>
            <Col md={6} className='seconds-internship-program'>
              <div>
                <h2>Internship Program</h2>
                <p>We are proud to offer internships for aspiring legal professionals. Our internship program provides practical, hands-on experience, allowing interns to work closely with experienced attorneys, gain insight into various legal processes, and develop their skills in a supportive environment​.</p>
              </div>
              <div>
                <h2>How to Apply</h2>
                <p>To apply for any position or internship at our law firm, please submit your resume and a cover letter to <b> careers@legalassociates.com </b>. In your cover letter, tell us about your interests, qualifications, and why you'd be a great fit for our team. We look forward to welcoming new talent into our legal family.​.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className='join-container-section'>
        <Row className='text-center d-flex justify-content-center'>
          <Col md={10}>
            <h2>Join the Team That Cares</h2>
            <p>When you join our law firm, you become part of a team that values integrity, compassion, and excellence. Whether you're a seasoned professional or a new graduate, we provide a supportive environment where your contributions will make a difference.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Careers;
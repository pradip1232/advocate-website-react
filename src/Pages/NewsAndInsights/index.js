import React from 'react';
import './index.scss';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { newsAndInsightsData } from './newsAndInsightsData';

import ff from '../../components/img/AdobeStock_747091805 1.webp';
import mask from '../../components/img/Mask group 5.webp';
import fff from '../../components/img/news insight 1.webp';
import LatestCardsSlider from '../../components/NewsAndInsightSection/LatestCardsSlider';
import InsightCardSlider from '../../components/NewsAndInsightSection/InsightCardSlider';
import OpinionCardSlider from '../../components/NewsAndInsightSection/OpinionCardSlider';
import LatestLegalDevelopments from '../../components/NewsAndInsightSection/LatestLegalDevelopments';

const NewsAndInsights = () => {
  return (
    <div className="news-and-insights">
      <section className="news-and-insight-container position-relative">
        <img src={ff} alt="News and Insights" className="img-fluid w-100" />
        <div className="news-and-insight-content position-absolute top-50 start-50 translate-middle text-center text-white px-3">
          <h1 className="display-4 fw-bold">News and Insights</h1>
          <hr />
        </div>
      </section>

      <section className='news-second-container'>
        <Container>
          <div className="d-flex flex-column flex-md-row g-4 align-items-center ">
            <div className="col text-center text-md-start news-welconetext">
              <h1>NEWS AND INSIGHT</h1>
              <p>
                Welcome to the News & Insights section of our law firm, where we keep you informed
                about the latest developments in the legal landscape. Our team of legal experts shares
                updates, analysis, and thought leadership on key issues that impact our clients and the community.
              </p>
            </div>

            <div className="col text-center">
              <img src={fff} alt="News and Insight" className="img-fluid w-100 roundedd" />
            </div>
          </div>
        </Container>
      </section>

      <LatestLegalDevelopments />

      <section className='insight-hightlight-bg'>
        <h1>Event Highlights</h1>
      </section>

      <section>
        <Container className='upcoming-webinar-container'>
          <div className="d-flex flex-column flex-md-row g-4 align-items-center">
            <div className="col text-center text-md-start">
              <h1 className='upcoming-webinar'>Upcoming Webinar</h1>
              <div className='upcoming-webinar-text-colmn'>
                <h6 className='date-insight'>12/01/2020</h6>
                <h2 className='heading-name'>Understanding Intellectual Property Rights</h2>
                <p>Join us for a deep dive into intellectual property rights, where our specialists will cover the basics and answer your pressing questions.</p>
              </div>
              <div className='upcoming-webinar-text-colmn'>
                <h6 className='date-insight'>08/12/2025</h6>
                <h2 className='heading-name'>Understanding Intellectual Property Rights</h2>
                <p>Join us for a deep dive into intellectual property rights, where our specialists will cover the basics and answer your pressing questions.</p>
              </div>
            </div>
            <div className="col text-center img-md-start">
              <img src={mask} alt="Upcoming Webinar" className="img-fluid w-100 roundeddd" />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className='past-seminar-container'>
          <h2 className='past-seminarheading'>Past Seminar</h2>
          <Row>
            <Col md={10}>
              <date className='date-insight'>10/20/2020</date>
              <h2 className='heading-name'>Employment Law Reforms</h2>
              <p>Join us for a deep dive into intellectual property rights, where our specialists will cover
                the basics and answer your pressing questions.</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={10}>
              <date className='date-insight'>10/20/2020</date>
              <h2 className='heading-name'>Employment Law Reforms</h2>
              <p>Join us for a deep dive into intellectual property rights, where our specialists will cover
                the basics and answer your pressing questions.</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={10}>
              <date className='date-insight'>10/20/2020</date>
              <h2 className='heading-name'>Employment Law Reforms</h2>
              <p>Join us for a deep dive into intellectual property rights, where our specialists will cover
                the basics and answer your pressing questions.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="subscribe-section py-4">
        <Container>
          <Row className="align-items-center">
            <Col md={8} xs={12} className="mb-3 mb-md-0">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Email"
              />
            </Col>

            <Col md={4} xs={12} className="text-center text-md-start">
              <Button className="w-100 w-md-auto subdcribe-button" variant="">
                Subscribe
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default NewsAndInsights;
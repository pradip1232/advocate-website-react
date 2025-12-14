import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { siteData } from '../../data/siteData';

const LawFirmSection = ({ data }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about'); // Redirect to the contact page with a hash for the form section
        window.scrollTo(0, 0);
    };
    return (
        <Container className="my-5 introduction-section-home">
            <h2 className="text-center mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                {data?.introduction?.title || "INTRODUCTION AND VALUE PROPOSITION"}
            </h2>

            <Row className="align-items-center">
                {/* Image Column */}
                <Col md={5} className="text-center mb-4 mb-md-0">
                    {/* <img
                        src={logo}
                        alt="Law Firm Logo"
                        className="img-fluid"
                        style={{ maxWidth: '80%' }}
                    /> */}
                    <div className="logo-placeholder">
                        <h2>{siteData.companyName}</h2>
                        <p>{siteData.tagline}</p>
                    </div>
                </Col>

                {/* Text Content Column */}
                <Col md={6} className='about-intro-text-colmn-home'>
                    <h3>{data?.introduction?.aboutFirm?.title || "ABOUT THE FIRM"}</h3>
                    <p>
                        {data?.introduction?.aboutFirm?.description || "Welcome to Legal Associates, where we believe that every legal challenge is an opportunity for growth and resolution. With a dedicated team of experienced lawyers and advocates, we specialize in providing personalized legal solutions tailored to meet the unique needs of our clients."}
                    </p>

                    <h3>{data?.introduction?.valueProposition?.title || "VALUE PROPOSITION"}</h3>
                    <p>
                        {data?.introduction?.valueProposition?.description || "At Legal Associates, we understand that navigating the legal landscape can be complex and daunting."}
                    </p>

                    <Button variant="outline-dark" onClick={handleClick} className='read-more-btn-home'>
                        {data?.introduction?.buttonText || "Read More"}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default LawFirmSection;

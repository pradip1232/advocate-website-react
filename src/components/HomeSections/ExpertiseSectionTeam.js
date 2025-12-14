import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import '../css/expertiseTeam.css';

import g3 from '../img/Group 3.webp';
import mask from '../img/Mask group.webp';

import front from '../img/Front view blurry  lawyer working.webp';
import { useNavigate } from 'react-router-dom';

const ExpertiseSectionTeam = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/expertise');
        window.scrollTo(0, 0);
    };

    const handleClickTeam = () => {
        navigate('/our-team');
        window.scrollTo(0, 0);
    };



    return (
        <>

            <Container fluid className="expertise-section my-5 py-5">
                <Row className="align-items-center expertise-section-row justify-content-center">
                    {/* Text Content */}
                    <Col md={4} className="text-center text-content">
                        <h2>EXPERTISE</h2>
                        <hr />
                        <Button variant="outline-light" onClick={handleClick} className="mt-3 read-more-btn-home expetise-read-more-btn">Read More</Button>
                    </Col>

                    {/* Overlapping Images */}
                    <Col md={6} className="image-container position-relative">
                        <div className="image-overlay">
                            <img
                                src={g3}
                                alt="Main background"
                                className="img-fluid main-image"
                            />
                            <div className="image-border-home-1">
                            </div>
                        </div>

                    </Col>
                </Row>
                {/* </Container>

              <Container fluid className="team-section my-5 py-5"> */}
                <Row className="align-items-center team-section-row justify-content-center">
                    {/* Overlapping Images */}
                    <Col md={6} className="image-container position-relative">
                        <div className="image-overlay">
                            <img
                                src={mask}
                                alt="Team background"
                                className="img-fluid main-image"
                            />
                            {/* <div className="overlay-images">
                                <img src="path-to-overlay-image1.jpg" alt="Team Member 1" className="overlay-image" />
                                <img src="path-to-overlay-image2.jpg" alt="Team Member 2" className="overlay-image" />
                                <img src="path-to-overlay-image3.jpg" alt="Team Member 3" className="overlay-image" />
                            </div> */}
                        </div>
                    </Col>

                    {/* Text Content */}
                    <Col md={4} className="text-center text-content">
                        <h2>TEAM</h2>
                        <hr />
                        <Button variant="outline-light" className="mt-3 expetise-read-more-btn" onClick={handleClickTeam}>Meet Our Team</Button>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default ExpertiseSectionTeam

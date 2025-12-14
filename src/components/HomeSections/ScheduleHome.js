import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import left from '../img/Mask group 1.webp';
import { useNavigate } from 'react-router-dom';
const ScheduleHome = ({ data }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact#contactform'); // Redirect to the contact page with a hash for the form section
    };
    return (
        <>
            <Container className='schedule-container-home'>
                <Row>
                    <Col lg={6} md={6} xs={10}>
                        <img src={left} className='img-fluid w-100' />
                    </Col>
                    <Col lg={6} md={6} xs={10}>
                        <h2>{data?.consultation?.title || "Get a Free Consultation at Our Law Firm!"}</h2>
                        <p>Navigating legal challenges can be daunting, but you don’t have to do  it alone. {data?.consultation?.description?.includes('Legal Associates') ? data.consultation.description : "At Legal Associates, we offer"} a free consultation to help you  understand your options and develop a plan of action tailored to your  needs.</p>
                        <p>Don’t let legal challenges overwhelm you. Take the first step towards  resolution today!</p>
                        <p>Call us at (555) 123-4567 or click on button below.
                            We look forward to assisting you !</p>
                        <Button className='schedulebtn-home' onClick={handleClick}>
                            {data?.consultation?.buttonText || "Schedule your Free Consultation"}
                        </Button>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default ScheduleHome

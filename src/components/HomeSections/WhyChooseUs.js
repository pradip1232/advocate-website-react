import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Import images
import tt from '../img/why choose us 1.webp';
import t2 from '../img/why choose us 1-1.webp';
import t3 from '../img/why choose us 1-2.webp';
import t4 from '../img/why choose us 1-3.webp';
import t5 from '../img/why choose us 2.webp';
import t6 from '../img/why choose us 2-1.webp';
import t7 from '../img/why choose us 2-2.webp';
import { useNavigate } from 'react-router-dom';

function WhyChooseUs() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about');
        window.scrollTo(0, 0);
    };
  

    // Define card data
    const cardData = [
        {
            image: tt,
            title: 'Experienced Professionals',
            text: 'Our team comprises seasoned attorneys with extensive knowledge in various areas of law.',
        },
        {
            image: t2,
            title: 'Client-Centered Approach',
            text: 'We prioritize your needs and goals. Our commitment to personalized service means that we take the time...',
        },
        {
            image: t3,
            title: 'Transparent Communication',
            text: 'We believe in keeping you informed every step of the way. Our attorneys are dedicated to providing clear...',
        },
        {
            image: t4,
            title: 'Proven Results',
            text: 'Our success stories reflect our ability to achieve favorable outcomes for our clients.',
        },
        {
            image: t5,
            title: 'Compassionate Support',
            text: 'Legal issues can be overwhelming, and we\'re here to support you. Our team approaches each case...',
        },
        {
            image: t6,
            title: 'Comprehensive Legal Services',
            text: 'Whether you need assistance in family law, business disputes, personal injury claims...',
        },
        {
            image: t7,
            title: 'Strong Community Commitment',
            text: 'We believe in giving back to the community we serve. Our involvement in...',
        },
    ];

    return (
        <Container className="text-center my-5 why-us-contaier-home">
            <h2>WHY CHOOSE US</h2>
            <Row xs={1} md={2} lg={4} className="g-4 mt-4 justify-content-center">
                {cardData.map((card, index) => (
                    <Col key={index}>
                        <Card className="h-100 why-choose-cards">
                            <Card.Body className="why-cards-home">
                                <div className="images-container-why-section-card">
                                    <img src={card.image} alt={card.title} />
                                </div>
                                <div className="textsection-wwhy-cards">
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.text}</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Button variant="outline-secondary" className="mt-4 whychoose-read-more-btn" onClick={handleClick}>Read More</Button>
        </Container>
    );
}

export default WhyChooseUs;

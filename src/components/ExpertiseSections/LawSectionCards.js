import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import cc from '../img/criminal law 1.webp';
import cl from '../img/Civil-law 1.webp';
import fl from '../img/Family-Law 1.webp';
import cor from '../img/corporate laws 1.webp';
import ill from '../img/intelletual laws 1.webp';
import cons from '../img/consumer law 1.webp';
import real from '../img/real estate laws 1.webp';
import cy from '../img/cyber laws 1.webp';
import la from '../img/labour_law_660_260920013844 1.webp';
import arb from '../img/Arbitration and Conciliation Act 1.webp';


import mm from '../img/mmm.webp';
import imm from '../img/imm.webp';
import { useNavigate } from 'react-router-dom';

const lawCategories = [
    { id: 12, title: "Criminal Law", description: "We provide defense and prosecution services in criminal cases, ensuring that clients receive fair representation.", image: cc },
    { id: 1, title: "Civil Law", description: "Whether it’s a personal dispute or a commercial issue, we handle civil litigation and settlements with precision.", image: cl },
    { id: 2, title: "Family Law", description: "Our family law services cover divorce, custody, alimony, and more, helping clients navigate emotionally charged situations.", image: fl },
    { id: 3, title: "Corporate Law", description: "Our corporate law services include business formation, compliance, and dispute resolution.", image: cor },
    { id: 4, title: "Intellectual Property Right Laws", description: "We assist clients in protecting their intellectual property, ensuring innovations and creations are safeguarded.", image: ill },
    { id: 5, title: "Consumer Law", description: "We defend consumer rights against unfair trade practices, ensuring clients receive justice.", image: cons },
    { id: 6, title: "Real Estate Laws", description: "From property disputes to real estate transactions, we provide comprehensive legal assistance.", image: real },
    { id: 7, title: "Cyber Laws", description: "In today’s digital age, we offer expert legal services for cybersecurity, data privacy, and online crimes.", image: cy },
    { id: 8, title: "Labour and Industrial Laws", description: "We provide solutions for employment disputes, worker’s rights, and industrial law cases.", image: la },
    { id: 9, title: "Arbitration and Conciliation Laws", description: "We help resolve disputes through arbitration and conciliation, offering faster and cost-effective alternatives to litigation.", image: arb },
    { id: 10, title: "MATRIMONIAL LAW", description: "We help resolve disputes through arbitration and conciliation, offering faster and cost-effective alternatives to litigation.", image: mm },
    { id: 11, title: "IMMIGRATION LAW", description: "We help resolve disputes through arbitration and conciliation, offering faster and cost-effective alternatives to litigation.", image: imm },

];

const LawCard = ({ id, title, description, image }) => {
    const navigate = useNavigate();

    const handleSeeMore = () => {
        console.log(`Navigating to details page with ID: ${id}`);
        navigate(`/criminal-law-details/${id}`);
    };

    return (
        <div className="cardsection-expertise">
            <div className="card text-white law-card">
                <img
                    src={image}
                    className="card-img"
                    alt={title}
                    style={{ height: '19rem', objectFit: 'cover', borderRadius: '0' }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end p-2 overlay-content">
                    <div className="text-bg">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <Button variant="" size="sm" onClick={handleSeeMore}>
                            See More...
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LawSectionCards = () => {
    return (
        <Container className="my-4 expertise-cards-section">
            <Row>
                {lawCategories.map((category) => (
                    <Col xs={12} sm={6} md={4} key={category.id} className="mb-2">
                        <LawCard
                            id={category.id}
                            title={category.title}
                            description={category.description}
                            image={category.image}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default LawSectionCards;

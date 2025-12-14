import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Importing images
import f1 from "../img/newsand/ANI-20231204163859 1.png";
import f2 from "../img/newsand/Delhi-HC-15 1.png";
import f3 from "../img/newsand/Fake-IT-raid 1.png";
import f4 from "../img/newsand/111111111111111111111 1.png";
import f5 from "../img/newsand/80167969 1.png";
import f6 from "../img/newsand/cyberfraud_d18abe 1.png";
import f7 from "../img/newsand/gavel-IE-4 (1) 1.png";

const LatestLegalDevelopments = () => {
    const legalItems = [
        {
            title: "Court Grants Interim Bail For Medical Emergency",
            image: f1,
            link: "#",
        },
        {
            title: "Transport Permit Case: Court Grants Bail To Official",
            image: f2,
            link: "#", // Add the correct URL here
        },
        {
            title: "Law Enforcement Uncovers Fraudulent Tax Investigation Scheme",
            image: f3,
            link: "#", // Add the correct URL here
        },
        {
            title: "Court Grants Bail In Major Cyber Fraud Case",
            image: f4,
            link: "#", // Add the correct URL here
        },
        {
            title: "Court Addresses Serious Criminal Charges",
            image: f5,
            link: "#", // Add the correct URL here
        },
        {
            title: "Court Grants Bail To Man Accused Of 91Lakh Fraud",
            image: f6,
            link: "#", // Add the correct URL here
        },
        {
            title: "Court Addresses Privacy Concerns in Custody Proceedings",
            image: f7,
            link: "#", // Add the correct URL here
        },
    ];

    return (
        <Container className="mt-4 letest-container-devlopment">
            <h2 className="text-center letest-development">LATEST LEGAL DEVELOPMENTS</h2>
            <Row>
                {legalItems.map((item, index) => (
                    <Col xs={12} sm={6} md={4} lg={4} className="mb-4" key={index}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                            <Card className="h-100 border-0">
                                <Card.Img variant="top" src={item.image} alt={item.title} />
                                <Card.Body>
                                    <Card.Text className="text-center">{item.title}</Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default LatestLegalDevelopments;

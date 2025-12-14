import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

import '../css/news.css';

import news from '../img/Legal-news-in-brief 1.webp';
import photo from '../img/Photorealistic lifestyle of a lawyer-1.webp';
import np from '../img/1684226797723 1.webp';
import { useNavigate } from 'react-router-dom';

function NewsInsight() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/news-and-insights');
        window.scrollTo(0, 0);
    };

    const newsItems = [
        {
            date: "October 5, 2023",
            title: "Court Grants Interim Bail For Medical Emergency",
            description: "The Supreme Court has made a significant ruling regarding employment discrimination law, impacting workplace rights.",
            image: news,
            link: "#"
        },
        {
            image: photo, // This item only has an image
        },
        {
            // date: "October 25, 2023",
            title: "NEWS & INSIGHT",
            description: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            date: "October 5, 2023",
            title: "Law Enforcement Uncovers Fraudulent Activities",
            description: "loream to this Our team of family law experts discusses recent changes in legislation affecting divorce and child custody.",
            image: np,
            link: "#", // Add the correct URL here

        },
        {
            image: photo, // This item only has an image
        },
        {
            date: "October 5, 2023",
            title: "Court Addresses Privacy Concerns in Custody Proceedings",
            description: "Our team of family law experts discusses recent changes in legislation affecting divorce and child custody.",
            image: news,
            link: "#", // Add the correct URL here

        },
        // Add more items as needed
    ];

    return (
        <Container className="text-center my-5 news-and-insight-section-home">
            <h2>NEWS & INSIGHT</h2>
            <p>Stay Informed With The Latest Legal Developments</p>
            <div className="card-columns">
                {newsItems.map((item, index) => (
                    <Card className="mb-4 news-insight-cards-home" key={index}>
                        {/* Render image only if it exists */}
                        {item.image && <Card.Img variant="top" src={item.image} alt="News image" className='img-fluid w-100' />}

                        {/* Render content only if title or description exists */}
                        {(item.title || item.description) && (
                            <Card.Body>
                                {item.date && <Card.Text className="text-muted cards-date-news">Date: {item.date}</Card.Text>}
                                {item.title && <Card.Title>{item.title}</Card.Title>}
                                {item.description && <Card.Text>{item.description}</Card.Text>}
                                <Button variant="" className='read-more-btn-home' onClick={() => window.open(item.link, "_blank")} // Opens the link in a new tab
                                >Read More</Button>
                            </Card.Body>
                        )}
                    </Card>
                ))}
            </div>
        </Container>
    );
}

export default NewsInsight;

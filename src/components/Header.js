// src/components/Header.js
import React from 'react';
import { Button, Container } from 'react-bootstrap';
// import './css/header.css';
import './css/header.css';

function Header() {
    return (
        <header className="header-section">
            <Container className="text-center header-content">
                <h1>Empowering You Through Legal Challenges</h1>
                <p>Providing Dedicated Legal Support And Personalized Solutions To Meet Your Unique Needs.</p>
                <Button variant="outline-light">Schedule a Consultation</Button>
            </Container>
        </header>
    );
}

export default Header;

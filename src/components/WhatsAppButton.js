
import React from 'react';
import { Fab } from '@mui/material';
import { WhatsApp, Phone } from '@mui/icons-material';

// WhatsApp Floating Button Component
const WhatsAppButton = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '5551234567'; // Replace with your WhatsApp number
        const message = 'Hello, I need help with...'; // Predefined message
        // const whatsappUrl = `https://api.whatsapp.com/send?phone=971556638055&text=Hi%2C%0AWe%20got%20your%20number%20from%20your%20website.`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp chat window
        window.open(whatsappUrl, '_blank');
    };

    return (<>
        <Fab
            color="success"
            aria-label="whatsapp"
            className='icon-social-home-two'
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                backgroundColor: '#25D366', // WhatsApp green
                color: 'white',
            }}
            onClick={handleWhatsAppClick}
        >
            <WhatsApp />
        </Fab>

        {/* Call Icon */}
        <a href="tel:5559876543" style={{ textDecoration: 'none' }}>
            <Fab
                aria-label="call"
                className='icon-social-home-two'
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '90px',
                    backgroundColor: 'transparent',
                    color: 'black',
                    transition: 'transform 0.1s', // Smooth transition for hover effect
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(-2px) translateY(-2px) rotate(-5deg)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                }}
            >
                <Phone />
            </Fab>
        </a>


    </>
    );
};

export default WhatsAppButton;

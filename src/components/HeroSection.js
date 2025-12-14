// src/components/HeroSection.js
import React, { Component } from 'react';
import NavbarHeader from './NavbarHeader';
import './css/header.css';
import LawFirmSection from './HomeSections/LawFirmSection';
import ExpertiseSectionTeam from './HomeSections/ExpertiseSectionTeam';
import WhyChooseUs from './HomeSections/WhyChooseUs';
import NewsInsight from './HomeSections/NewsInsight';
import CareersSection from './HomeSections/CareersSection';
import ScheduleHome from './HomeSections/ScheduleHome';
import { useNavigate } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';

// class HeroSection extends Component {
const HeroSection = ({ data }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact#contactform'); // Redirect to the contact page with a hash for the form section
    };

    return (
        <>


            <WhatsAppButton />

            <section className="hero-section">
                {/* Overlay Navbar */}
                {/* <NavbarHeader /> */}

                {/* Hero Content */}
                <div className="hero-content hero-content-home hero-section-home text-center">
                    <h1>Empowering You Through Legal Challenges</h1>
                    <hr />
                    <p>Providing Dedicated Legal Support And Personalized Solutions To Meet Your Unique Needs.</p>
                    <button className="hero-button" onClick={handleClick}>
                        Schedule a Consultation
                    </button>
                </div>
            </section>



            <LawFirmSection data={data} />

            <ExpertiseSectionTeam />

            <WhyChooseUs />
            <NewsInsight />
            <CareersSection data={data} />
            <ScheduleHome data={data} />

        </>
    );
}


export default HeroSection;

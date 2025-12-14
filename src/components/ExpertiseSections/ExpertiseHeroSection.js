import React from 'react'
import { Container } from 'react-bootstrap'
import ff from '../img/Group 7.webp';

const ExpertiseHeroSection = () => {
    return (
        <Container fluid className='expertise-section-container p-0'>
            <div className="hero-section-expertise position-absulate" style={{
                backgroundImage: `url(${ff})`, backgroundSize: "cover", backgroundPosition
                    : "center", backgroundRepeat: "no-repeat"
            }}>
                <div className="hero-content">
                    <h1 className="hero-title">Expertise</h1>
                    <hr />
                    {/* <p className="hero-subtitle">OExpert Legal Solutions for Every Challenge
                    </p> */}
                    {/* <h5>Home / Expertise</h5> */}
                </div>

            </div>



        </Container >
    )
}

export default ExpertiseHeroSection

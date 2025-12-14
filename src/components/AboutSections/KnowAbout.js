import React from 'react'
import ff from '../img/about firm.webp';
import { Container } from 'react-bootstrap';

const KnowAbout = ({ data }) => {
    return (
        <>
            <Container fluid className="about-section-with-images">
                <div className="about-sec position-relative text-center">
                    <img src={ff} className="about-img img-fluid w-100" alt="About Us" />
                    <div className="about-sec-text position-absolute top-50 start-50 translate-middle text-white p-4">
                        <h2 className="mb-3">{data?.pageTitle || "KNOW ABOUT LEGAL ASSOCIATES"}</h2>
                        <hr />
                        {/* <h4>Home / About Us</h4>     */}
                    </div>
                </div>
            </Container>

        </>
    )
}

export default KnowAbout

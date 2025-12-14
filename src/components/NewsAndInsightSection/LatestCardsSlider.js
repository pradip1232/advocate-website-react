import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import fv from '../img/25 1.webp';
import fv2 from '../img/26 1.webp';

const LatestCardsSlider = () => {
    const sliderSettings = {
        dots: true, // Show dots for navigation
        infinite: true, // Infinite loop
        speed: 500, // Transition speed
        slidesToShow: 3, // Show 3 slides at a time
        slidesToScroll: 1, // Scroll 1 slide at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay interval
        responsive: [
            {
                breakpoint: 1024, // For tablets and small screens
                settings: {
                    slidesToShow: 2, // Show 2 slides
                },
            },
            {
                breakpoint: 768, // For mobile devices
                settings: {
                    slidesToShow: 1, // Show 1 slide
                },
            },
        ],
    };

    return (
        <div className="card-slider container">
            <h2 className="slider-title">Latest Legal Developments</h2>
            <Slider {...sliderSettings}>
                {/* Card 1 */}
                <div className="card slider-cards-news">
                    <img
                        src={fv}
                        alt="Data Privacy Regulations"
                        className="card-image"
                    />
                    <div className="card-content">
                        <h3 className="card-title">New Data Privacy Regulations Implemented</h3>
                        <p className="card-description">
                            Recent changes in data privacy laws have raised the bar for compliance, impacting businesses of all sizes.
                        </p>
                        <a href="#" className="card-link">See More...</a>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card slider-cards-news">
                    <img
                        src={fv2}
                        alt="Supreme Court Ruling"
                        className="card-image"
                    />
                    <div className="card-content">
                        <h3 className="card-title">Supreme Court Ruling On Workplace Discrimination</h3>
                        <p className="card-description">
                            A landmark judgment by the Supreme Court has reshaped the legal landscape concerning workplace discrimination.
                        </p>
                        <a href="#" className="card-link">See More...</a>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card slider-cards-news">
                    <img
                        src={fv}
                        alt="Data Privacy Regulations"
                        className="card-image"
                    />
                    <div className="card-content">
                        <h3 className="card-title">New Data Privacy Regulations Implemented</h3>
                        <p className="card-description">
                            Recent changes in data privacy laws have raised the bar for compliance, impacting businesses of all sizes. These changes require all businesses to reassess their compliance strategies effectively.
                        </p>
                        <a href="#" className="card-link">See More...</a>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default LatestCardsSlider;

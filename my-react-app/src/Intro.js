import React from 'react';
import './Intro.css';

function Intro() {
    return (
        <div className="intro-container">
            <div className="intro-image">
                <img src="/Icons/Real_Estate.jpg" alt="Real Estate" />
            </div>
            <div className="intro-text">
                <p>
                    Welcome to Delta Real Estate, your ultimate destination for finding your dream property. Our extensive portfolio offers a wide range of options to suit every preference, including luxurious apartments, spacious homes, and commercial properties.
                </p>
                <p>
                    Our dedicated team of professionals is committed to providing top-notch services, including market analysis, property management, and legal support, ensuring a seamless experience for our clients. With Delta Real Estate, you can rest assured that your real estate journey will be handled with expertise and personalized care.
                </p>
                <p>
                    Choose Delta Real Estate for a trusted partnership and let us guide you to your perfect property investment. Your satisfaction is our priority, and we look forward to serving you.
                </p>
            </div>
        </div>
    );
}

export default Intro;

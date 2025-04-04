import React from "react";
import LandingHeaderComponent from "../components/LandingHeaderComponent";
import FooterComponent from "../components/FooterComponent";
import "../styles/AboutPage.css";  // Adjust the path if needed

const AboutPage = () => {
    return (
        <>
            <LandingHeaderComponent /> {/* Render the header */}

            {/* This section is now correctly placed */}
            <div className="about-container">
                <h2>About Us</h2>
                <p>Learn more about our mission and values.</p>
            </div>

            <FooterComponent /> {/* Render the footer */}
        </>
    );
};

export default AboutPage;
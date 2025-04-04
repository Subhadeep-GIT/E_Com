import React from "react";
import LandingHeaderComponent from "../components/LandingHeaderComponent";
import FooterComponent from "../components/FooterComponent";
import "../styles/ContactPage.css"; // Import the styles

const ContactPage = () => {
    return (
        <>
            <LandingHeaderComponent /> {/* Header */}

            <div className="contact-container">
                <h2>Contact Us</h2>
                <p>Get in touch with us!</p>

                <div className="contact-form-container">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input className="form-control" type="text" name="name" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input className="form-control" type="email" name="email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input className="form-control" type="tel" name="phone" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea className="form-control" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                </div>
            </div>

            <FooterComponent className="footer" /> {/* Footer */}
        </>
    );
};

export default ContactPage;
import React from "react";
import LandingHeaderComponent from "../components/LandingHeaderComponent";
import FooterComponent from "../components/FooterComponent";
import "../styles/BlogPage.css"; 

const BlogPage = () => {
    return (
        <>
        <LandingHeaderComponent /> {/* Render the header */}



        <div className="blog-container mt-5 pt-5">
            <h2>Blog Page</h2>
            <p>Welcome to our blog!</p>
        </div>
        <FooterComponent /> {/* Render the footer */}

        </>
        
    );
};

export default BlogPage;
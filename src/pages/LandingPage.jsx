import React from "react";
import LandingHeaderComponent from "../components/LandingHeaderComponent";
import FeaturedProductsComponent from "../components/FeaturedProductsComponent";
import ShopByCategoryComponent from "../components/ShopByCategoryComponent";
import FooterComponent from "../components/FooterComponent";
import "../styles/LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
 // Import your CSS file for custom styles


const LandingPage = () => {
    // Sample product data
    const products = [
        { name: "Cozy Knit & Lace Set", description: "High-quality product", image: "https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150478984.jpg?t=st=1743756830~exp=1743760430~hmac=43d3590e3917beb1c141b0e6d8a822470618ce2d8c2847e3ca4e33b1c32ecc43&w=826" },
        { name: "Tropical Breeze Shirt Collection", description: "Limited stock available!", image: "https://img.freepik.com/free-psd/view-hawaiian-shirt-with-clothing-rack_23-2150819228.jpg?t=st=1743756876~exp=1743760476~hmac=ba86fbd032aee2acb27e1c4b6bbae69e1bd23ac15d746cd681b65c5eec59485d&w=826" },
        { name: "Blush Elegance Blazer", description: "Best-selling product", image: "https://img.freepik.com/free-photo/woman-showing-clothes-customer_23-2148929526.jpg?t=st=1743757026~exp=1743760626~hmac=5bd25ef9ab53f503e9ca0cdbeb8a2d3c882236f4fd71c3fcf27dca6e70d38734&w=826" },
        { name: "Winter Luxe Coat Collection", description: "Customer favorite!", image: "https://img.freepik.com/free-photo/close-up-hands-touching-clothes_23-2149241325.jpg?t=st=1743757059~exp=1743760659~hmac=56de64475e809cbde58c51fd8785c540ada5b47bc466b4531c8c3157bc4e1a69&w=826" },
    ];

    const categories = [
        { name: "Electronics", image: "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309652.jpg?t=st=1743758654~exp=1743762254~hmac=c7c2af5946bdb570bdf2af1b2ce2ca46667b273ba993305a9f2cb591c5b8de0d&w=2000" },
        { name: "Fashion", image: "https://img.freepik.com/free-photo/photo-young-brunette-woman-sunglasses-holding-shopping-bags-high-quality-photo_2831-9798.jpg?t=st=1743758733~exp=1743762333~hmac=812cdbf924006cc478a9df10463ff21afd9c50e8c4ed604d034d731c1d5122e6&w=826" },
        { name: "Home & Kitchen", image: "https://img.freepik.com/free-photo/laptop-ready-having-online-meeting_23-2149116309.jpg?t=st=1743758805~exp=1743762405~hmac=05e3afa046fbdded3739286fe6030e84cd035346edeaf59b88dd01edb8ad26d1&w=2000" },
        { name: "Sports", image: "https://img.freepik.com/free-photo/front-view-young-male-sport-clothes-with-basket-full-sport-things-pink-wall_179666-26999.jpg?t=st=1743758876~exp=1743762476~hmac=5c3206ba2675de386dbc0255e77b196cc9b1bf22e961721fc57982032eb13c29&w=2000" },
    ];

    return (
        <div>
            <LandingHeaderComponent />

<section className="container-fluid d-flex align-items-center justify-content-center text-center position-relative"
    style={{
        height: "100vh", // Increase the height
        paddingTop: "80px", // Adjust for sticky header
    }}
>
    {/* Background Gradient */}
    <div className="position-absolute top-0 start-0 w-100 h-100"
        style={{
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3))",
            zIndex: "-1"
        }}>
    </div>

    {/* Content */}
    <div className="container text-white">
        <h1 className="display-3 fw-bold">Welcome to E_Com</h1>
        <p className="lead opacity-75">Discover the best products at unbeatable prices.</p>
        <a href="#" className="btn btn-outline-light btn-lg mt-4 px-4 rounded-pill shadow-sm">
            Shop Now
        </a>
    </div>
</section>

            {/* Featured Products Section using Component */}
            <FeaturedProductsComponent products={products} />

             {/* Shop by Category Component */}
             <ShopByCategoryComponent categories={categories} />

            {/* About Us Section */}
            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-4">About Us</h2>
                    <p className="text-center">
                        E_Com is your trusted e-commerce platform for finding the best deals on top-quality products. 
                        Our mission is to deliver unbeatable value and customer satisfaction.
                    </p>
                </div>
            </section>

            <div>
            {/* Other Components */}
            <FooterComponent />
        </div>
        </div>
    );
};

export default LandingPage;
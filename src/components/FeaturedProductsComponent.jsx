import React, { useEffect, useRef } from "react";
import "../styles/FeaturedProductsComponent.css";

const FeaturedProductsComponent = ({ products }) => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        let scrollInterval;

        const startAutoScroll = () => {
            if (scrollContainerRef.current) {
                scrollInterval = setInterval(() => {
                    scrollContainerRef.current.scrollBy({ 
                        left: 300, // Adjust scroll distance
                        behavior: "smooth" 
                    });

                    // Reset to start when reaching the end
                    if (
                        scrollContainerRef.current.scrollLeft + 
                        scrollContainerRef.current.clientWidth >= 
                        scrollContainerRef.current.scrollWidth
                    ) {
                        scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
                    }
                }, 3000); // Adjust time interval
            }
        };

        startAutoScroll();

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <section className="container my-5">
            <h2 className="text-center mb-4">Featured Products</h2>
            <div className="scroll-container" ref={scrollContainerRef}>
                <div className="scroll-content">
                    {products.map((product, index) => (
                        <div key={index} className="scroll-item">
                            <div className="card h-100 shadow-sm">
                                <img 
                                    src={product.image} 
                                    className="card-img-top" 
                                    alt={product.name} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <a href="#" className="btn btn-primary">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProductsComponent;
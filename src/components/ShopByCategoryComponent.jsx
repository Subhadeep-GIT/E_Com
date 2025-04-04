import React from "react";
import "../styles/ShopByCategoryComponent.css";

const ShopByCategoryComponent = ({ categories }) => {
    return (
        <section className="container my-5">
            <h2 className="text-center mb-4">Shop by Category</h2>
            <div className="category-container">
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        <img src={category.image} alt={category.name} className="category-image" />
                        <div className="category-overlay">
                            <h5 className="category-title">{category.name}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShopByCategoryComponent;
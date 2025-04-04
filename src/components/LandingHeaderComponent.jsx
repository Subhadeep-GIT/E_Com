import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link
import { FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

const LandingHeaderComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-dark text-white p-3 fixed-top" style={{ width: "100%", zIndex: 1000 }}>
            <div className="container d-flex justify-content-between align-items-center">
                {/* Brand Name */}
                <h1 className="fs-4">
                    <Link to="/" className="text-white text-decoration-none">E_Com</Link>
                </h1>

                {/* Navigation Menu */}
                <nav className="d-none d-md-block">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link text-white">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-white">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-white">Contact</Link>
                        </li>
                    </ul>
                </nav>

                {/* Icons */}
                <div className="d-flex align-items-center">
                    <button className="btn btn-link text-white mx-2">
                        <FaSearch size={20} />
                    </button>
                    <button className="btn btn-link text-white mx-2">
                        <FaShoppingBag size={20} />
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button className="btn btn-link text-white mx-2 d-md-none" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="bg-dark d-md-none">
                    <ul className="nav flex-column text-center">
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link text-white" onClick={() => setMenuOpen(false)}>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-white" onClick={() => setMenuOpen(false)}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-white" onClick={() => setMenuOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default LandingHeaderComponent;
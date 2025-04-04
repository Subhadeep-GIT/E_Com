import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LandingHeaderComponent from "../components/LandingHeaderComponent"; 
import FooterComponent from "../components/FooterComponent";

import "../styles/AdminLoginComponent.css"; 

const AdminLoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === "admin@ecom.com" && password === "admin123") {
            alert("Login Successful!");
            navigate("/admin/dashboard");
        } else {
            alert("Invalid Credentials!");
        }
    };

    return (
        <>
            {/* Header */}
            <LandingHeaderComponent />

            {/* Admin Login Section */}
            <div className="admin-login d-flex align-items-center justify-content-center">
                <div className="admin-login-box text-white">
                    <h2 className="text-center mb-4">Admin Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label>Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-light w-100">
                            Login
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer (Now correctly placed outside) */}
            <FooterComponent />
        </>
    );
};

export default AdminLoginComponent;
import { Link } from "react-router-dom";
import "../styles/FooterComponent.css"; // Custom styles

const FooterComponent = () => {
    return (
        <footer className="footer bg-dark text-white text-center p-4">
            <div className="container">
                <div className="row">
                    {/* Left Section - Branding */}
                    <div className="col-12 col-md-4">
                        <p>&copy; {new Date().getFullYear()} <b>E_Com</b>. All rights reserved.</p>
                    </div>

                    {/* Center Section - Social Media Links */}
                    <div className="col-12 col-md-4">
                        <p>Follow us on:</p>
                        <a href="#" className="text-white mx-2">Facebook</a> |  
                        <a href="#" className="text-white mx-2">Instagram</a> |  
                        <a href="#" className="text-white mx-2">Twitter</a>
                    </div>

                    {/* Right Section - Admin Login */}
                    <div className="col-12 col-md-4 mt-3 mt-md-0">
                        <Link to="/admin/login" className="btn btn-outline-light btn-sm">
                            Admin Login
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
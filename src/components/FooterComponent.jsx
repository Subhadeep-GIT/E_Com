import { Link } from "react-router-dom";

const FooterComponent = () => {
    return (
        <footer className="bg-dark text-white text-center p-4"> 
            <p>&copy; {new Date().getFullYear()} E_Com. All rights reserved.</p>
            <p>
                Follow us on:  
                <a href="#" className="text-white mx-2">Facebook</a> |  
                <a href="#" className="text-white mx-2">Instagram</a> |  
                <a href="#" className="text-white mx-2">Twitter</a>
            </p>
            {/* Admin Login Button */}
            <p className="mt-3">
                <Link to="/admin/login" className="btn btn-outline-light btn-sm">Admin Login</Link>
            </p>
        </footer>
    );
};

export default FooterComponent;
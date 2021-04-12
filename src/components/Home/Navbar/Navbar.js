import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mt-3">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link me-5 font-500">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link me-5 font-500">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link me-5 font-500">Dental Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link me-5 font-500 text-white">Reviews</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link me-5 font-500 text-white">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link me-5 font-500 text-white">Contact Us</Link>
                        </li>
                    </ul>
                </div>    
            </div>
        </nav>
    );
};

export default Navbar;
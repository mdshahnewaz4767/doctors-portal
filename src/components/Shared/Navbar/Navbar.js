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
                            <Link to="/about" className="nav-link me-5 font-500">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dental" className="nav-link me-5 font-500">Dental Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/review" className="nav-link me-5 font-500">Reviews</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link me-5 font-500 ">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link me-5 font-500">Contact Us</Link>
                        </li>
                    </ul>
                </div>    
            </div>
        </nav>
    );
};

export default Navbar;
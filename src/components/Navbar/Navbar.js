import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link to="#" class="nav-link me-5">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="#" class="nav-link me-5">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="#" class="nav-link me-5">Dental Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="#" class="nav-link me-5">Reviews</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="#" class="nav-link me-5">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="#" class="nav-link me-5">Contact Us</Link>
                        </li>
                    </ul>
                </div>    
            </div>
        </nav>
    );
};

export default Navbar;
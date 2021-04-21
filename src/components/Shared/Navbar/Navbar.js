import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                            <Link to="appointment" className="nav-link me-5 font-500">Appointment</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link me-5 font-500">Doctor</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link me-5 font-500">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            {
                                loggedInUser.email ? <p className="nav-link user-name">{loggedInUser.name == null ? loggedInUser.email : loggedInUser.name}</p> : 
                                <Link to="/login" className=" me-5 font-500 text-white">
                                    <button className="btn btn-primary">Login</button>
                                </Link>
                            }
                        </li>
                    </ul>
                </div>    
            </div>
        </nav>
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar, faGripHorizontal, faUsers, faUserPlus, faCog } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-5" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/appointment" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/allPatients" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addDoctor" className="text-white" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="text-white" >
                        <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white line"><FontAwesomeIcon icon={faHome} /> <span>Home</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;
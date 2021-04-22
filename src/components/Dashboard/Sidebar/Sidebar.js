import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar, faGripHorizontal, faUsers, faUserPlus, faCog } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import './Sidebar.css';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data => setIsDoctor(data))
    }, [loggedInUser.email])

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
                {isDoctor && <li>
                    <Link to="/dashboard/allPatients" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>}
                {!isDoctor && <li>
                    <Link to="#" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>}
                <li>
                    <Link to="#" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                    </Link>
                </li>
                {isDoctor && <li>
                    <Link to="/addDoctor" className="text-white" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                    </Link>
                </li>}
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
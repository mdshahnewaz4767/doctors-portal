import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import './Appointment.css';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [selectedData, setSelectedDate] = useState(new Date())
    const handleDateChange = (data) => {
        setSelectedDate(data)
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
           <Footer></Footer>
        </div>
    );
};

export default Appointment;
import React from 'react';
import Calendar from 'react-calendar';
import chair from '../../../images/chair.png';
import 'react-calendar/dist/Calendar.css';
import Navbar from '../../Shared/Navbar/Navbar';

const AppointmentHeader = ({handleDateChange}) => {

    return (
        <div>
            <Navbar></Navbar>
            <main style={{height: '600px'}} className="d-flex align-items-center">
                <div className="col-12 col-md-4 offset-md-1">
                    <h1 style={{color: '#203047'}}className="mb-5">Appointment</h1>
                    <Calendar onChange={handleDateChange} value={new Date()} className="calender-style" />
                </div>
                <div className="col-12 col-md-6 headerImg">
                    <img src={chair} alt="chair" className="img-fluid"/>
                </div>
            </main>
        </div>
    );
};

export default AppointmentHeader;
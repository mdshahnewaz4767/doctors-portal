import React, { useState } from 'react';
import Calendar from 'react-calendar';
import chair from '../../images/chair.png';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {

    return (
        <main style={{height: '600px'}} className="d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#203047'}}className="mb-5">Appointment</h1>
                <Calendar onChange={handleDateChange} value={new Date()} />
            </div>
            <div className="col-md-6 headerImg">
                <img src={chair} alt="chair" className="img-fluid"/>
            </div>
        </main>
    );
};

export default AppointmentHeader;
import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';
import { utils } from 'react-modern-calendar-datepicker';

const AppointmentsByDate = ({ appointments }) => {
    const today = utils().getToday();
    return (
        <div className="bg-white red">
            <div className="d-flex justify-content-between mx-4 pt-3">
                <h5 className="text-brand text-center mb-5">Appointments</h5>
                <p>{today.day + ' April, ' + today.year}</p>
            </div>
            <div className="mx-4 appoint-pad">
                {
                    appointments.length ?
                    <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                    :
                    <div className="p-5">
                        <h4 className="lead text-center">No Appointments for this Date</h4>
                    </div>
                }
            </div>
        </div>
    );
};

export default AppointmentsByDate;
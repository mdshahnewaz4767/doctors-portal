import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div className="container-fluid row " >
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-4 pe-5 ps-5 pt-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", zIndex: '-50' }}>
                <h5 className="text-brand mb-5">All Patients</h5>
                <AppointmentDataTable appointments={appointments} />
            </div>
        </div>
    );
};

export default AllPatients;
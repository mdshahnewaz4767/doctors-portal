import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import './Dashboard.css';
import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100vh"
}


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);;
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect( () => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data => setAppointments(data))
    }, [selectedDate, loggedInUser])
    console.log(appointments);

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10  mt-5 pt-2" style={{height: '350px'}}>
                    <h5 className="mb-5 fw-bold">Appointments</h5>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
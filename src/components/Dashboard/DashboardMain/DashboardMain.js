import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './DashboardMain.css';
import RecentAppointList from './RecentAppointList';

const DashboardMain = ({date}) => {
    const [recentAppointments, setRecentAppointments] = useState([]);

    useEffect(() => {
        fetch('https://secret-oasis-20004.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setRecentAppointments(data))
    }, [])
    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 pe-5 ps-5 pt-5" style={{ position: "absolute", right: '4px', zIndex: '-50' }}>
                    <h5 className="fw-bold">Dashboard</h5>
                    <div className="mt-5 row mb-5">
                        <div className="col-12 col-md-3">
                           <div className=" cardItem bg-danger d-flex align-content-center justify-content-center">
                                <h1>09</h1>
                                <p className="ms-1">Pending Appointments</p>
                           </div>
                        </div>
                        <div className="col-12 col-md-3">
                           <div className=" cardItem bg-primary d-flex align-content-center justify-content-center">
                                <h1>19</h1>
                                <p className="ms-1">Today's Appointments</p>
                           </div>
                        </div>
                        <div className="col-12 col-md-3">
                           <div className=" cardItem bg-success d-flex align-content-center justify-content-center">
                                <h1>34</h1>
                                <p className="ms-1">Total Appointments</p>
                           </div>
                        </div>
                        <div className="col-12 col-md-3">
                           <div className=" cardItem bg-warning d-flex align-content-center justify-content-center">
                                <h1>78</h1>
                                <p className="ms-1">Total Patients</p>
                           </div>
                        </div>
                    </div>
                
                    <div className="appointment-table">
                        <div>
                            <h4 className="text-brand mb-4">Recent Appointments</h4>
                        </div>
                        {
                            <RecentAppointList recentAppointments={recentAppointments} />
                        }
                    </div>
                   
                </div>
            </div>
        </section>
    );
};

export default DashboardMain;
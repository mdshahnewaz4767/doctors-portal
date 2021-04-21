import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctorsData, setDoctorsData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/doctors")
        .then(res => res.json())
        .then(data => {
            setDoctorsData(data);
        })
        .catch(error => alert("Something went wrong!! Please try again later!"))
    }, [])

    console.log(doctorsData);
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5 pt-5">Our Doctors</h5>
                <div className="row">
                    { 
                        doctorsData.map(doctor => <Doctor doctor={doctor} key={doctor._id}></Doctor>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;
import React from 'react';

const RecentAppointList = ({recentAppointments}) => {

    const handleChange = (event) => {
        const status = event.target.value;
        console.log(status);
    }

    return (
        <table className="table table-borderless">
           <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Date</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Contact</th>
                    <th className="text-secondary" scope="col">Prescription</th>
                    <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    recentAppointments.map((recentAppointment, index) =>
                    <tr key ={recentAppointment._id}>
                        <td>{index + 1}</td>
                        <td>{recentAppointment.date}</td>
                        <td>{recentAppointment.name}</td>
                        <td>{recentAppointment.phone}</td>
                        <td><button className="btn btn-info px-4 text-white">View</button></td>
                        <td>
                            <select  onChange={(event) => handleChange(event)}>
                                <option selected hidden>Pending</option>
                                <option value="Pending">Pending</option>
                                <option value="On going">On going</option>
                                <option value="Done">Done</option>
                            </select>
                        </td>
                    </tr>
                    )
                }
                
            </tbody>
        </table>
    );
};

export default RecentAppointList;
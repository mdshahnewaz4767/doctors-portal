import React from 'react';

const BookingCard = ({booking}) => {
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    <button  className="btn btn-brand text-uppercase">Book Appointment</button>
                  
                </div>
            </div>
        </div>
    );
};

export default BookingCard;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctor}) => {
    const {name, email, phone, img} = doctor;
    return (
        <div className="col-md-4 text-center">
             {
                doctor.image  ? <img src={`data:image/jpeg;base64,${doctor.image.img}`}  className="img-fluid mb-3" alt=""/>
                :
                <img className="img-fluid mb-3" src={img} alt=""/>
            }
            <h4>Dr. {name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/>{phone}</p>
        </div>
    );
};

export default Doctor;
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const infosData = [
    {
        id: 1,
        title: 'Opening Hours',
        description: 'we are open 7 days',
        icon: faClock,
        background: 'primary'
    }, {
        id: 2,
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarkerAlt,
        background: 'dark'
    }, {
        id: 3,
        title: 'Call Us Now',
        description: '+00585582838',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info} key={info.id}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;
import React from 'react';
import fluride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        id: 1,
        name: 'Fluoride Treatment',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: fluride
    }, {
        id: 2,
        name: 'Cavity Filling',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: cavity
    }, {
        id: 3,
        name: 'Teath Whitening ',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: whitening
    }
]

const Services = () => {
    return (
        <section>
           <div className="text-center mt-5">
                <h5 style={{color: '#5FC7C7'}}>Our Services</h5>
                <h2 style={{color: '#203047'}}>Services We Provide</h2>
           </div>
           <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.id}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
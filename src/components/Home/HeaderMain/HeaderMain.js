import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="d-md-flex align-items-center">
            <div className="col-12 col-md-4 offset-md-1 header-body">
                <h1 style={{color: '#203047'}}className="mb-4">Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat reiciendis iste vel omnis quod voluptatem sequi repellendus quos unde sunt.</p>
                <Link to="/appointment">
                    <button type="button" className="btn btn-primary text-uppercase mt-4">get appointment</button>
                </Link>
            </div>
            <div className="col-12 col-md-6 headerImg">
                <img src={chair} alt="chair" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;
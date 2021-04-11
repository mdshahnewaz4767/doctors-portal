import React from 'react';
import chair from '../../images/chair.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#203047'}}className="mb-4">Your New Smile <br/> Starts Here</h1>
                <p style={{color: '#203047'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat reiciendis iste vel omnis quod voluptatem sequi repellendus quos unde sunt.</p>
                <button type="button" className="btn btn-primary text-uppercase mt-4">get appointment</button>
            </div>
            <div className="col-md-6 headerImg">
                <img src={chair} alt="chair" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;
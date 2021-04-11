import React from 'react';
import chair from '../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br/> Starts Here</h1>
                <p style={{color: '#3A4256'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat reiciendis iste vel omnis quod voluptatem sequi repellendus quos unde sunt.</p>
                <button type="button" class="btn btn-primary text-uppercase">get appointment</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="chair" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;
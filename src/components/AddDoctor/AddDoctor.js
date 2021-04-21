import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './AddDoctor.css';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const [addSuccess, setAddSuccess] = useState(false);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);

        e.preventDefault();
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('phone', info.phone);

        fetch('http://localhost:5000/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    setAddSuccess(true);
                }
            })
            .catch(error => {
                console.error(error)
            })

        e.preventDefault();
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pe-5 ps-5 pt-5" style={{ position: "absolute", right: '4px', backgroundColor: "#F4FDFB", zIndex: '-50' }}>
                <h5 className="text-brand">Add a Doctor</h5>
                {addSuccess &&
                     <div className="mt-5">
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            Successfully Added.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                }
                {!addSuccess && <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Phone Number</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="phone" placeholder="number" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" required/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </form>}
            </div>
        </section>
    );
};

export default AddDoctor;
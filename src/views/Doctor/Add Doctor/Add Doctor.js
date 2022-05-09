import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import Select from 'react-select'
//import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch } from 'react-redux';
import ImageUpload from 'image-upload-react'
import 'image-upload-react/dist/index.css'


/*import "../../../asset/plugins/bootstrap/css/bootstrap.min.css";
import "../../../asset/css/main.css";*/

const Add_Doctor = () => {
    const initialValues = {
        firstname: " ", lastname: " ", dob: "", gender: "", specialise: "", phone: "", email: "",
        website: "", description: ""
    };
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({});
    const [IsSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value });
    };
    const handleSubmit = (e) => {
        console.log(handleSubmit);
        console.log(setIsSubmit);
        e.preventDefault();
        (setformErrors(validate(formValues)))

        setIsSubmit(true);
    }
    useEffect(() => {
        console.log(IsSubmit);
        if (Object.keys(formErrors).length === 0 && IsSubmit) {
            console.log(formErrors);
        }
    }, [formErrors])
    //upload Image
    const [imageSrc, setImageSrc] = useState()
    const handleImageSelect = (e) => {
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }
    //validate
    const validate = (values) => {
        const regex = /^[^\s@[^\s@+\.[^\s@]{2,}$/i;
        const errors = {}
        if (values.firstname == 0) {
            errors.firstname = "firstname is required";
        }
        if (values.lastname == 0) {
            errors.lastname = "lastname is required";
        }

        if (values.specialise == 0) {
            errors.specialise = "specialise is required";
        }
        if (values.phone == 0) {
            errors.phone = "phone is required";
        }
        if (values.website == 0) {
            errors.website = "phone is required";
        }
        if (values.description == 0) {
            errors.description = "description is required";
        }
        if (values.gender === '' || values.gender === "") {
            errors["gender"] = "Select gender.";
        }
        if (values.email == 0) {
            errors.email = "email is required";
        } else if (!regex.text(values.email == 0)) {
            errors.email = " this is not valid email";

        }

        return errors;

    }

    //const [SelectedDate, setSelectedDate] = useState(null);
    const [dob, SetDOB] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo();
    });
    const option = [
        { value: 'Oncology Department', label: 'Oncology Department' },
        { value: 'Cardiology Department', label: 'Cardiology Department' },
        { value: 'Neurology Department', label: 'Neurology Department' },
        { value: 'Radiology Department', label: 'Radiology Department' },
        { value: 'Dietary Department', label: 'Dietary Department' },
    ]
    return (
        <>
            <div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="block-header">
                            <h2>Add Doctor</h2>
                            {/*<small className="text-muted">Welcome Add Doctor</small>*/}
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="row clearfix">

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="card">
                                        <div className="header">
                                            <h2>Basic Information  </h2>
                                            {/*<button type="button" class="btn btn-secondary">Edit</button>*/}

                                        </div>
                                        <div className="body">
                                            <div className="row clearfix">
                                                <div className="col-sm-6">
                                                    <div className="form-group1">
                                                        <div className="form-line">
                                                            <lable>First Name</lable>
                                                            <input
                                                                type='text'
                                                                name='firstname'
                                                                value={formValues.firstname}
                                                                onChange={handleChange}
                                                                className='form-control '

                                                                autoComplete='firstname'
                                                            />
                                                        </div>
                                                        <p style={{ color: "red" }}> {formErrors.firstname}</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group1">
                                                        <div className="form-line">
                                                            <lable>Last Name</lable>
                                                            <input
                                                                type='text'
                                                                name='lastname'
                                                                value={formValues.lastname}
                                                                onChange={handleChange}
                                                                className='form-control'

                                                                autoComplete='Enter last name'
                                                            />
                                                        </div>
                                                        <p style={{ color: "red" }}> {formErrors.lastname}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-sm-3">
                                                    <div className="form-group1">
                                                        <div className="form-line">
                                                            <lable>dob</lable>
                                                            <input
                                                                className='form-control'
                                                                type='date'
                                                                name='DOB'
                                                                required
                                                                id='dob'
                                                                value={dob}
                                                                onChange={(e) => SetDOB(e.target.value)}

                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group1 drop-custum">
                                                        <select required="true"
                                                            name="gender" className="form-control show-tick">
                                                            <option value>-- Gender --</option>
                                                            <option required value={10}>Male</option>
                                                            <option required value={20}>Female</option>

                                                        </select>

                                                    </div>
                                                    <p style={{ color: "red" }}> {formErrors.select}</p>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group1">
                                                        <div className="form-line">
                                                            <lable>Speciality</lable>
                                                            <input
                                                                type='text'
                                                                name='specialise'
                                                                value={formValues.specialise}
                                                                onChange={handleChange}
                                                                className='form-control '

                                                                autoComplete='specialise'

                                                            />
                                                        </div>
                                                        <p style={{ color: "red" }}> {formErrors.specialise}</p>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6">
                                                    <div className="form-group1">
                                                        <div className="form-line">
                                                            <lable>Enter  Your Email</lable>
                                                            <input
                                                                type='text'
                                                                name='email'
                                                                value={formValues.email}
                                                                onChange={handleChange}
                                                                className='form-control'

                                                                autoComplete='specialalise'

                                                            />
                                                        </div>
                                                        <p style={{ color: "red" }}> {formErrors.email}</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group1">
                                                        <div className="form-line">
                                                            <lable>Department Name</lable>
                                                            <div className="form-group1">

                                                                <div className="form-line">
                                                                    <Select options={option} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p style={{ color: "red" }}>{formErrors.website}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                <div className=" Adddoctor col-lg-6 col-md-6 col-sm-6" style={{paddingTop: '15px'}}>
                                                    <div className=''>upload Image</div>
                                                    <div className='Adddoctor1 text align-center'><ImageUpload 
                                                        handleImageSelect={handleImageSelect}
                                                        imageSrc={imageSrc}
                                                        setImageSrc={setImageSrc}
                                                        style={{
                                                            marginLeft: '0px',
                                                            width: 70,
                                                            height: 80,
                                                            background: '#056078',
                                                            borderRadius: '5px'
                                                        }}
                                                    />
                                                    </div>
                                                    <button className='Save1  text align-center' style={{background:'#056078',color:'white'}}>Save</button>
                                                </div>
                                                <div className="col-sm-6" style={{paddingTop: '15px'}}>
                                                    <div className="form-group1">
                                                        <lable>description</lable>
                                                        <div className="form-line">
                                                            <textarea
                                                                name="description"
                                                                rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
                                                        </div>
                                                        <p style={{ color: "red" }}> {formErrors.description}</p>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="Adddoctorbutton col-sm-12 text align-center">
                                                    <div className=" col-sm-12 d-flex  text align-center">
                                                        <div className="Adddoctorbutton1 col-sm-6">
                                                            <button type="submit" className=" g-bg-cyan" style={{ borderRadius: '10px' }}>Add doctor</button>
                                                        </div>
                                                        <div className=' Adddoctorbutton2 col-sm-6'>
                                                            <button type="" className=" g-bg-cyan" style={{ borderRadius: '10px' }}>Cancel</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>

                        

                    </div>
                </section>

            </div>


        </>
    )

}
export default Add_Doctor;
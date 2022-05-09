import React from "react";
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";

import { useState,useEffect } from "react";
import { useForm } from 'react-hook-form';
//import {useForm} from 'react-hook-form';
//import { RHFInput } from 'react-hook-form-input';
//import useForm from "react-hook-form";
//import {RHFInput} from 'react-hook-form-input';
import Select from 'react-select';
//import {TimePickerComponent} from "@syncfusion/ej2-react-calendars";

//import DateTimePicker from 'react-datetime-picker';


const Add_schedule = () => {
    
  const initialValues = { options: "" , availableday: "", starttime: "", endTime: "" };
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


  const validate = (values) => {
      const errors = {}
      if (values.options === 0) {
          errors.options = "doctor is required"
      }
      if (values.availableday !== Select) {
        errors.availableday = "availableday is required"
    }
    

      return errors;

  }


    const option = [
        { value: 'monday', label: 'monday' },
        { value: 'Tuesday', label: 'Tuesday' },
        { value: 'Wednesday', label: 'wednesday' },
        { value: 'Thursday', label: 'Thursday' },
        { value: 'Friday', label: 'Friday' },
        { value: 'suturday', label: 'suturday' },
        { value: 'sunday', label: 'sunday' }
    ]
    const Time = [
        { value: '8AM', label: '8AM' },
        { value: '9AM', label: '9AM' },
        { value: '10AM', label: '10AM' },
        { value: '11AM', label: '11AM' },
        { value: '12PM', label: '12PM' },
        { value: '1PM', label: '1PM' },
        { value: '2PM', label: '2PM' },
        { value: '3PM', label: '3PM' },
        { value: '4PM', label: '4PM' },
        { value: '5PM', label: '5PM' },
        { value: '6PM', label: '6PM' },
        { value: '7PM', label: '7PM' },
        { value: '8PM', label: '8PM' },
        { value: '9PM', label: '9PM' },
        { value: '10PM', label: '10PM' },
        { value: '11PM', label: '11PM' },
        { value: '12PM', label: '10PM' },
    ]
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <>
            <div>
                <section className="content">
                
                    <div className="container-fluid">
                   {/* <form onSubmit= {handleSubmit(onSubmit)}>*/}
                    <form onSubmit={handleSubmit}>
                        {/*<div className="block-header">
                            <h2>Add scheduel</h2>
                        </div>*/}
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="header">
                                        <div class="col row-12 d-flex">
                                            <h2 class="col-10">Docotr Schedule</h2>
                                            <button class="col-2" type="button" className="btn btn-primary" style={{borderRadius: '10px'}}>Add schedule</button>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <lable>Doctor Name</lable>
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                    
                                                        <Select required options={options} />
                                                        
                                                       {/*<RHFInput
                                                         as={<Select options={options} />}
                                                          rules={{ required: 'Please select an option'}}
                                                          name="reactSelect"
                                                          register={register}
                                                          setValue={setValue}
                                                       />*/}
                                                      {/* <p>{errors.reactSelect && errors.reactSelect.type === 'required' && "Please select"}</p>*/}
                                                        
                                                       {/* {<Select options={options} />
                                                        { required: 'Please select an option'}}*/}
                                                           
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <lable>Available Days</lable>
                                               <div className="form-group1">
                                                <div className="form-line">
                                                    <Select  required="true" options={option} />
                                                   {/* <p style={{ color: "red" }}> {formErrors.availableday}</p>*/}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <lable>Start Time</lable>
                                            <div className="form-group1">
                                                <div className="form-line">
                                                    {/*<TimePickerComponent placeholder="start time"></TimePickerComponent>*/}
                                                    <Select required options={Time} />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <lable>
                                                End Time
                                            </lable>
                                            <div className="form-group1">
                                                <div className="form-line">
                                                    <Select  required options={Time} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-sm-12">
                                            <div className="form-group1">
                                                <div className="form-line1">
                                                    <textarea required rows={4} className="form-control no-resize" placeholder="" defaultValue={""} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-sm-12  d-flex">
                                            <div class=" col-8 form-group1">
                                                <div >
                                                    <div>
                                                        <label class="display-block">Department Status</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="status" id="product_active" value="option1"   />
                                                        <label class="form-check-label" for="product_active">Active</label>
                                                    </div>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="status" id="product_inactive" value="option2" checked="" />
                                                    <label class="form-check-label" for="product_inactive">Inactive</label>
                                                </div>
                                            </div>



                                        </div>
                                        <div className="col-sm-12 text align-center">
                                            <button  type="submit" className="btn btn-raised g-bg-cyan" style={{borderRadius: '10px'}}>Create schedule</button>
                                        </div>

                                        {/*<div className="col-sm-12  d-flex">
                                                <div class="form-group1">
                                                    <div>
                                                        <div>
                                                            <label class="display-block">Department Status</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="status" id="product_active" value="option1" checked="" />
                                                            <label class="form-check-label" for="product_active">Active</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="status" id="product_inactive" value="option2" />
                                                        <label class="form-check-label" for="product_inactive">Inactive</label>
                                                    </div>
                                                </div>


                                                <button type="submit" className="btn btn-raised <div className="col-sm-12  d-flex">
                                                <div class="form-group1">
                                                    <div>
                                                        <div>
                                                            <label class="display-block">Department Status</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="status" id="product_active" value="option1" checked="" />
                                                            <label class="form-check-label" for="product_active">Active</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="status" id="product_inactive" value="option2" />
                                                        <label class="form-check-label" for="product_inactive">Inactive</label>
                                                    </div>
                                                </div>


                                                <button type="submit" className="btn btn-raised g-bg-cyan">Create Department</button>

                                             </div>">Create Department</button>

                                             </div>*/}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
            </div>
            
        </section>
        </div >

        </>

    )
}
export default Add_schedule;
import React, {useState , useEffect} from "react";
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import Select from 'react-select'
/*import "../../../asset/plugins/bootstrap/css/bootstrap.min.css";
import "../../../asset/css/main.css";*/


const Add_payment = () => {
    const initialValues = {paymentno: " ", patientname:" ", fullname:"", cardno: "", year:"", cvv: ""};
    

  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [IsSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setformValues({...formValues, [name]: value});
  };
  const handleSubmit = (e)=>{
    console.log(handleSubmit);
    console.log(setIsSubmit);
    e.preventDefault();
    (setformErrors(validate(formValues)))
    
    setIsSubmit(true);
  }
  useEffect(()=>{
    console.log(IsSubmit);
    if(Object.keys(formErrors).length === 0 && IsSubmit){
      console.log(formErrors);
    }   
  }, [formErrors])


  const validate=(values)=>{
   
    const regex = /^[^\s@[^\s@+\.[^\s@]{2,}$/i;
    const errors={}
    if(values.paymentno ==0){
      errors.paymentno = "Envoice no is required";
    }
    if(values.patientname == 0){
      errors.patientname = "patientname is required";
    }
    
    if(values.fullname == 0){
        errors.fullname = "fullname is required";
    }
    if(values.cardno == 0){
        errors.cardno = "cardno is required";
    }
    if(values.year == 0){
        errors.year = "year error";
    }
    if(values.cvv == 0){
        errors.cvv = "cvv error";
    }
    
    
    return errors;
    
  }



    const option = [
        { value: 'Dr. Aman Dubey', label: 'Dr. Aman Dubey' },
        { value: 'Dr. Rajiv', label: 'Dr. Rajiv' },
        { value: 'Dr. Rajiv sharma', label: 'Dr. Rajiv Sharma' },
        { value: 'Dr. Rajiv', label: 'Dr. Rajiv' },
    ]
    const options = [
        { value: 'January', label: 'Janaury' },
        { value: 'Feb', label: 'Feb' },
        { value: 'March', label: 'March' },
        { value: 'April', label: 'April' },
        { value: 'May', label: 'May' },
        { value: 'June', label: 'June' },
        { value: 'July', label: 'July' },
        { value: 'August', label: 'August' },
        { value: 'September', label: 'September' },
        { value: 'Oct', label: 'Oct' },
        { value: 'November', label: 'November' },
        { value: 'December', label: 'December' },
    ]
    return (
        <>
            <div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="block-header">
                            <h2>Add Payment</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2>Payment Information  </h2>
                                        {/*<button type="button" class="btn btn-primary">Edit</button>*/}

                                    </div>
                                    <div className="body">
                                    <form onSubmit={handleSubmit}>  
                                        <div className="row clearfix ">
                                            <div className="col-sm-6 ">
                                                <lable>
                                                    Envoice Number
                                                </lable>
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <input 
                                                           type='text'
                                                            name='paymentno'
                                                            value={formValues.paymentno}
                                                            onChange={handleChange}
                                                            className='form-control'
                                                            
                                                            autoComplete='paymentno'
                                                         />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.paymentno}</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <lable>Patient Name</lable>
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <input
                                                          type='text'
                                                          name='patientname'
                                                           value={formValues.patientname}
                                                           onChange={handleChange}
                                                           className='form-control '
                                                           
                                                           autoComplete='patientname'
                                                         />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.patientname}</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <lable>Doctor</lable>
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <Select options={option} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 ">

                                                <lable>
                                                    Full name (on card)
                                                </lable>
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <input
                                                          type='text'
                                                          name='fullname'
                                                           value={formValues.fullname}
                                                           onChange={handleChange}
                                                           className='form-control '
                                                           
                                                           autoComplete='fullname'
                                                         />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.fullname}</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <lable>Card Number</lable>
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <input 
                                                         type='text'
                                                         name='cardno'
                                                          value={formValues.cardno}
                                                          onChange={handleChange}
                                                          className='form-control '
                                                          
                                                          autoComplete='cardno'
                                                        />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.cardno}</p>
                                                </div>

                                            </div>
                                            <div className="col-sm-2">
                                                <lable>Month</lable>
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <Select options={options} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <lable>year</lable>
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <input 
                                                           type='text'
                                                           name='year'
                                                           value={formValues.year}
                                                           onChange={handleChange}
                                                           className='form-control '
                                                           autoComplete='year'
                                                         />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.year}</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <lable>CVV?</lable>
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <input 
                                                          type='text'
                                                          name='cvv'
                                                          value={formValues.cvv}
                                                          onChange={handleChange}
                                                          className='form-control'
                                                          autoComplete='cvv'
                                                        />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.cvv }</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 d-flex text align-center">
                                                <div className="col-sm-3">
                                                <button type="submit" className="btn btn-raised g-bg-cyan" style={{borderRadius: '10px'}}>Conform</button></div>
                                                <div className="col-sm-2">
                                                <button type="Reset" className="btn btn-raised g-bg-cyan" style={{borderRadius: '10px'}}>Cancel</button></div>
                                            </div>


                                        </div>
                                     </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="row-sm-12  d-flex">
                    <div class=" col-8 form-group1">
                        <div >
                            <div>
                                <label class="display-block">payment mode</label>
                            </div>
                            
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="status" id="product_inactive" value="option2" />
                            <label class="form-check-label" for="product_inactive">Inactive</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="status" id="product_inactive" value="option1" />
                            <label class="form-check-label" for="product_active">Inactive</label>
                        </div>
                        
                    </div>



                </div>



            </div>
        </>
    )
}
export default Add_payment;
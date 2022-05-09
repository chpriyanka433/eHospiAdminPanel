import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link } from 'react-router-dom';
import image from 'src/assets/images/avatars/Bg-Login.png';




const Register = () => {
  {/*const [passwordType1, SetPasswordType1] = useState('password');
  const [passwordType2, SetPasswordType2] = useState('password');
const [passwordType3, SetPasswordType3] = useState('password');*/}


  const history = useHistory();
  const initialValues = { Username: " ", password: " ", Email: " ",  conformpassword: " "};
  const [phone, setphone] =useState('')
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

    }
  }, [formErrors])

  const validate = (values) => {
    //const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,12}$/;
    //const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    const errors = {}
    if (values.Username == 0) {
      errors.Username = "username is required";
    }
    if (values.Email == 0) {
      errors.Email = "email is required";
    }
    
   
    if (values.password == 0) {
      errors.password = "password is required";
    }
    if (values.conformpassword == 0) {
      errors.conformpassword = "password is required"
    }
    if(values.password !== values.conformpassword){
      errors.conformpassword = "conform password don't match.";

    }
    return errors
    

  }
  const handleDirect = (event) => {
    history.push('/dashboard');
  };

  return (
    <>
      <div style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        <section className='vh-100 d-flex flex-column align-items-center justify-content-center '>
          {Object.keys(formErrors).length === 0 && IsSubmit ? (handleDirect()
          ) : (
            <Link to="/register"></Link>
          )}
          

          <div className='container-fluid' >
            <div className='row d-flex justify-content-center align-items-center h-100'>
              <div className='col-md-9 col-lg-6 col-xl-5'>
                <img
                  src=''
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1 py-5'>
                <form onSubmit={handleSubmit}>
                  <div className=''>
                    <h2 className='mb-0 me-3 text-center' style={{fontWeight:'bolder'}}>e-Hospi</h2>
                    <div className='text align-center' style={{fontSize:'13px',color:'#cdc8c8'}}> Please fill this form to create your account</div>
                    <hr />
                    <div className='form-outline mb-0'>
                      <lable>Username</lable>
                      <input
                        type='text'
                        name='Username'
                        id='Username'
                        value={formValues.Username}
                        onChange={handleChange}
                        className='form-control '
                        placeholder='Enter username'
                      />
                    </div>
                    <p style={{ color: "red" }}> {formErrors.Username}</p>
                    <div className='form-outline mb-0'>
                      <lable>Email</lable>
                      <input
                        type='text'
                        name='Email'
                        required='required'
                        value={formValues.Email}
                        onChange={handleChange}
                        className='form-control '
                        placeholder='Enter email'
                      />
                    </div>
                    <p style={{ color: "red" }}>{formErrors.Email}</p>
                    
                    <div className='form-outline mb-0'>
                     <lable>password</lable>
                      <input
                        type='text'
                        name='password'
                        value={formValues.password}
                        onChange={handleChange}
                       className='form-control '
                        

                      />
                    </div>
                    <p style={{ color: "red" }}>{formErrors.password}</p>
                    <div className='form-outline mb-0'>
                      <lable>conform password</lable>
                      <input
                        type='text'
                        name='conformpassword'
                        value={formValues.conformpassword}
                        onChange={handleChange}
                        className='form-control '
                        
                       />
                      
                    </div>
                    <p style={{ color: "red" }}>{formErrors.conformpassword}</p>
                    <div className='text-center text-lg-start mt-4 pt-2 text align-center mb-0'>
                      <div className='row-12 text align-center form-outline mb-2'>
                        <button
                      
                          type="submit"
                          className='col-12  btn btn-primary btn-bg '
                          style={{ paddingLeft: '4rem', paddingRight: '4rem' }}
                        >
                          Sign up
                        </button>
                      </div>
                      <div className="row-col-sm-12 text-center d-flex text align-center">
                      <div  className="d-flex col-sm-8 text align-left"style={{color:"black"}}>Already have an account?</div>
                      <div className=' col-sm-4 d-flex text align right'><button style={{borderColor:'#056078'}}><Link to="/Login" style={{color: "black"}}>Login</Link></button></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default Register;
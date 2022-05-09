import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import image from 'src/assets/images/avatars/Bg-Login.png';





const Resendotp = () => {
  const [otp, setotp] = useState('')

  //const history = useHistory();
  const handleSubmit = (e) => {
    console.log(handleSubmit);
    e.preventDefault();
  }


  return (
    <>
      <div style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        <section className='vh-100 d-flex flex-column align-items-center justify-content-center '>


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
                  <h2 className='mb-0 me-3 text-center'>OTP NUMBER</h2>
                  <hr />
                  
                    <div className='form-outline mb-2'>
                      <label className='form-label' htmlFor='OTP NUMBER'>
                        <h5>Enter OTP:</h5>
                      </label>
                      <input
                        type='text'
                        value={otp}
                          onChange={(e) => {
                            setotp(e.target.value);
                          }}
                        required='required'
                        className='form-control form-control-sm'
                        placeholder='Enter a otp 6 digit otp number'
                        
                      />
                    </div>
                
                  <div className='text-center text-lg-start mt-4 pt-2 text align-center'>
                    <div className='row-12 text align-center form-outline mb-2'>
                      <button
                        type="submit"
                        className='col-12  btn btn-primary btn-bg '
                        style={{ paddingLeft: '4rem', paddingRight: '4rem', color: "blue" }}
                      >
                           continue
                      </button>
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

export default Resendotp;

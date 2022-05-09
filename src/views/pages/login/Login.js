import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
//import { signIn } from 'src/Redux/Action/Login';
//import { useDispatch } from 'react-redux';
import image from 'src/assets/images/avatars/Bg-Login.png';
import axios from 'axios';
import { baseUrl } from 'src/views/config.js/baseUrl';

const Login = () => {
  //const dispatch = useDispatch();
  const history = useHistory();
  //const router = useRouter();
  const [uid, setuid] = useState('');
  const [password, setpassword] = useState('');

  /*const SignInSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/adminLogin', { Signinusername, SigninPassword })
    } catch (e) {
      setSigninusername('')
      setSigninusername('')
      console.log(e)
    }

  }*/
  

  /*useEffect(() => {
    if (localStorage.getItem('use info')) {
      history.push("/dashboard")
    }
  }, [])*/
  async function login(e) {
    e.preventDefault();
    let item = { uid, password };
    let result = await axios.post(baseUrl+'/admin/login', item);
      if (!result.data.token) {
        alert('login failed');
      } else {
        console.log(result.data.token)
        history.push("./dashboard");
      } 
  }

  return (
    <>
      <div
        className="Logincontainer"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <section className="vh-100 d-flex flex-column align-items-center justify-content-center ">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-2">
                <img src="" className="img-fluid" alt="" />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 py-5">
                <form onSubmit={login}>
                  <div className="">
                    <div className="mb-5">
                      <h2 className="mt-10 me-3 text-center">e-Hospi</h2>
                      <div
                        className="welcomeback  col-sm-12"
                        style={{
                          fontSize: '15px',
                          color: 'white',
                          marginLeft: '4rem',
                        }}
                      >
                        Welcome back! Please Login to Your Account{' '}
                      </div>
                    </div>

                    <div className=" mb-4 form-outline mb-2">
                      <label className=" mb-0 form-label" For="username">
                        <h5>Username </h5>
                      </label>
                      <input
                        type="text"
                        name="uid"
                        value={uid}
                        onChange={(e) => {
                          setuid(e.target.value);
                        }}
                        className="form-control form-control-sm"
                      />
                    </div>
                    <div className="form-outline mb-2">
                      <label className=" mb-0 form-label" For="password">
                        <h5>Password</h5>
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                        className="form-control form-control-sm"
                      />
                    </div>
                    <div className="row d-flex">
                      <div className="row">
                        <Link
                          to="/forgetpassword"
                          style={{ color: 'white', marginLeft: '300px' }}
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <div
                      className="loginform row text-center  mt-4 pt-2 text align-center d-flex "
                      style={{ justifyContent: 'center' }}
                    >
                      <div className="Login1 col-sm-6">
                        <button
                          type="submit"
                          className="col-sm-6  btn btn-primary btn-bg "
                          style={{ width: '200px', textAlign: 'center' }}
                        >
                          Login
                        </button>
                      </div>
                      <div
                        className="register1 col-sm-6 "
                        style={{
                          justifyContent: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Link to="/register">
                          <button
                            type="submit"
                            className="col-sm-6    "
                            style={{
                              borderColor: '#056078',
                              width: '100px',
                              height: '35px',
                            }}
                          >
                            Sign up
                          </button>
                        </Link>
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
  );
};

export default Login;

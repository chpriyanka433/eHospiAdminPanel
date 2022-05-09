import React, { useEffect, useState } from 'react';
//import {RadioButton} from "react"
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
//import { RadioGroup, RadioButton } from 'react-radio-buttons';
//import { Checkbox } from "@material-ui/core";
//import { faL } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { baseUrl } from 'src/views/config.js/baseUrl';
//import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
require('dotenv').config();

const Add_user = () => {
  //const savenotification = () => toast("Successfully Save");
  const [uid, setuid] = useState('');
  const [password, setpassword] = React.useState('');
  const [duty, setDuty] = useState('');
  const handleManChange = () => {
    setDuty('management');
  };
  const handleFinChange = () => {
    setDuty('finance');
  };
  async function handleFormSubmit(e) {
    e.preventDefault();
    let item = { uid, password, duty };
    console.log(item);
    let result = await axios.post(baseUrl + '/admin/addSubAdmin', item, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTHENTICATION_TOKEN}`,
      },
    });
    console.log(result);
  }
  return (
    <>
      <div>
        <section className="content">
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <div className="card">
                  <div className="header">
                    <h2>Add new sub-admins</h2>
                  </div>
                  <form onSubmit={handleFormSubmit}>
                    <div className="body">
                      <div className="row clearfix">
                        <div className="col-sm-6 ">
                          <div className="form-group1">
                            <label>User-id</label>
                            <div className="form-line1">
                              <input
                                name="Userid"
                                value={uid}
                                required="required"
                                onChange={(e) => {
                                  setuid(e.target.value);
                                }}
                                className="form-control no-resize"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 ">
                          <div className="form-group1">
                            <label>Password</label>
                            <div className="form-line1">
                              <input
                                name="password"
                                required="required"
                                value={password}
                                onChange={(e) => {
                                  setpassword(e.target.value);
                                }}
                                className="form-control no-resize"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6>Account Privileges:</h6>
                      <div>
                        <input
                          style={{
                            position: 'inherit',
                            opacity: 1,
                            marginLeft: '1em',
                            marginRight: '0.3rem',
                          }}
                          type="radio"
                          value="Management"
                          name="duty"
                          onChange={handleManChange}
                        />
                        Management
                        <input
                          style={{
                            position: 'inherit',
                            opacity: 1,
                            marginLeft: '1em',
                            marginRight: '0.3rem',
                          }}
                          type="radio"
                          value="Finance"
                          name="duty"
                          onChange={handleFinChange}
                        />
                        Finance
                      </div>
                      <div className="text align-right">
                        <button
                          className=""
                          style={{
                            border: '1px solid',
                            background: '#056078',
                            color: 'white',
                            width: 'rem',
                            height: '2.5rem',
                            borderRadius: '5px',
                          }}
                          type="submit"
                        >
                          Save
                        </button>
                        {/* <ToastContainer /> */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Add_user;

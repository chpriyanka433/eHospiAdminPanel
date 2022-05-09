import React, { useState } from 'react';
import axios from 'axios';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { baseUrl } from 'src/views/config.js/baseUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
require('dotenv').config();

const ManageHospitalAdmin = () => {
  const savenotification = () => toast('Successfully save');
  const [uid, setuid] = useState('');
  const [password, setpassword] = useState('');
  const [hospitalCode, setHospitalcode] = useState('');
  const [duty, setduty] = useState('');

  async function handleFormSubmit(e) {
    e.preventDefault();
    let item = { uid, password, hospitalCode, duty };
    let result = await axios.post(
      baseUrl + '/admin/addHospitalSubAdmin',
      item,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AUTHENTICATION_TOKEN}`,
        },
      },
    );
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
                    <h2>Manage Hospital SubAdmin </h2>
                  </div>
                  <form onSubmit={handleFormSubmit}>
                    <div className="body">
                      <div className=" mb-4 row clearfix">
                        <div className="col-sm-4 ">
                          <div className="form-group1">
                            <lable>ID</lable>
                            <div className="form-line1">
                              <input
                                name="Usersid"
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
                        <div className="col-sm-4 ">
                          <div className="form-group1">
                            <lable>Password</lable>
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
                        <div className="col-sm-4 ">
                          <div className="form-group1">
                            <lable>Hospitalcode</lable>
                            <div className="form-line1">
                              <input
                                name="hospitalCode"
                                required="required"
                                value={hospitalCode}
                                onChange={(e) => {
                                  setHospitalcode(e.target.value);
                                }}
                                className="form-control no-resize"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6>Account Privileges: Management/Finance</h6>
                      <div className="row d-flex">
                        <div className="col-sm-6 ">
                          <div className="form-group1">
                            <div className="form-line1">
                              <input
                                name="duty"
                                required="required"
                                value={duty}
                                onChange={(e) => {
                                  setduty(e.target.value);
                                }}
                                className="form-control no-resize"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text align-right">
                        <button
                          className=""
                          style={{
                            border: '1px solid',
                            background: '#056078',
                            color: 'white',
                            width: '6rem',
                            height: '2.5rem',
                            borderRadius: '5px',
                          }}
                          type="submit"
                          onClick={savenotification}
                        >
                          Save
                        </button>
                        <ToastContainer />
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

export default ManageHospitalAdmin;

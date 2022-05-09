import React, { useState, Fragment, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

//import ReadOnlyRow from 'src/views/Hospital/PendingHospital/ReadOnlyRow';
import EditableRow from 'src/views/Hospital/Pending Hospital/EditableRow';
import { baseUrl } from 'src/views/config.js/baseUrl';
import { nanoid } from 'nanoid';
import axios from 'axios';
require('dotenv').config();

const Pending_List = () => {
  const [childitem, setchilditem] = useState(null);
  const [valueData, setvalueData] = useState([]);
  const [result1, setresult1] = useState([]);
  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/admin/signupPendingHospital', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhZG1pbiIsInBhc3N3b3JkIjoiJDJiJDEwJGdnZlVEQjBham5UQjFJblRqdDBFZS5PVkRGY3R0M2xwdmF2d0VTRFh2OE03TzVtOEhPSjRpIiwiaWF0IjoxNjUxNzI3NTAxLCJleHAiOjE2NTE4MTM5MDF9.rE5hddSpIqVaLBVcIMHmWft7C1zxFuEReg4kDpr02To`,
      },
    });
    console.log('result1', result1);
    setresult1(result.data);
    console.log('after result1', result1);
    setvalueData(result.data);
  };
  resultDAta();

  console.log('ghdjddhsdjf+++', childitem);
  const childaction = async (id) => {
    console.log('dhjdddsjfsjdfsfkjgfdkfdsjdjashdhs', id.hospitalCode);
    const Accept = async () => {
      const result = await axios.put(
        baseUrl + '/admin/accept/signupHospital',
        { hospitalCode: id.hospitalCode },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhZG1pbiIsInBhc3N3b3JkIjoiJDJiJDEwJGdnZlVEQjBham5UQjFJblRqdDBFZS5PVkRGY3R0M2xwdmF2d0VTRFh2OE03TzVtOEhPSjRpIiwiaWF0IjoxNjUxNzI3NTAxLCJleHAiOjE2NTE4MTM5MDF9.rE5hddSpIqVaLBVcIMHmWft7C1zxFuEReg4kDpr02To`,
          },
        },
      );
      console.log('jhjfjfdsfsj', result);
    };

    var answer = window.confirm('Are you sure Accept');
    console.log(answer);
    if (answer) {
      Accept();
    }
  };
  const childaction2 = async (id) => {
    const Reject = async () => {
      const result = await axios.put(
        baseUrl + '/admin/reject/signupHospital',
        { hospitalCode: id.hospitalCode },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AUTHENTICATION_TOKEN}`,
          },
        },
      );
    };
    var answer = window.confirm('Are you sure Reject');
    console.log(answer);
    if (answer) {
      Reject();
    }
    // const result = await axios.put(
    //   baseUrl + '/admin/reject/signupHospital',
    //   { hospitalCode: id.hospitalCode },
    //   {
    //     headers: {
    //       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhZG1pbiIsInBhc3N3b3JkIjoiJDJiJDEwJGdnZlVEQjBham5UQjFJblRqdDBFZS5PVkRGY3R0M2xwdmF2d0VTRFh2OE03TzVtOEhPSjRpIiwiaWF0IjoxNjUxNjU5MzA5LCJleHAiOjE2NTE3NDU3MDl9.qiYTF4CLWq28mQvI7Q109v2J1P5r0h5ZD0tCA5lzAX0`,
    //     },
    //   },
    // );
    // console.log('jhjfjfdsfsj', result);
    // resultDAta();
  };

  // const childaction3 = async (e) => {
  //   e.preventDefault();
  //   let item = { latitude, longitude };
  //   let result = await axios.post(
  //     baseUrl + '/signup/addHospital',
  //     item,
  //     {

  //     },
  //   )
  //   console.log(result);
  // }
  //console.log('+++++++++++++++++++++++++++++++++++++++++');
  //console.log(valueData);
  const [contacts, setContacts] = useState(valueData);
  const [addFormData, setAddFormData] = useState({
    hospitalName: ' ',
    hospitalCode: ' ',
    hospitalType: ' ',
    hospitalAddress: ' ',
    city: ' ',
    state: ' ',
    phone: ' ',
  });
  const [editFormData, setEditFormData] = useState({
    hospitalName: ' ',
    hospitalCode: ' ',
    hospitalType: ' ',
    hospitalAddress: ' ',
    city: ' ',
    state: ' ',
    phone: ' ',
  });
  const [editContactId, setEditContactId] = useState(null);
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };
  const handleAddFormChange = (event) => {
    event.preventDefault();
    id: nanoid();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      hospitalName: editFormData.hospitalName,
      hospitalLocation: editFormData.hospitalLocation,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      hospitalName: contact.hospitalName,
      duty: contact.duty,
    };

    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  };
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <>
      <div>
        <section className="content">
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <div className="card">
                  <div className="header">
                    <h2>Pending Hospitals List</h2>
                  </div>

                  {/* <div className='col-sm-12 text-align center'>
                    <div className='col-sm-6 text-align left'>
                    <form class="form-inline">
                      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </div>

                  </div> */}
                  <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                    <thead class="">
                      <tr
                        style={{
                          paddingTop: '30px',
                          marginLeft: '30px',
                          width: '10px',
                        }}
                      >
                        <th>Hospital Name</th>
                        <th>Hospital Code</th>
                        <th>Hospital Type</th>
                        <th>Hospital Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                  </table>
                  <div class="body table-responsive">
                    <form onSubmit={handleEditFormSubmit}>
                      <table class="table table-bordered table-striped table-hover js-basic-example dataTable1">
                        <thead>
                          {/* <tr>
                        <th>Hospital Name </th>
                        <th>Hospital Code</th>
                        <th>Hospital Type</th>
                        <th>Hospital Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Phone</th>
                        <th>Action</th>
                      </tr> */}
                        </thead>
                        <tfoot></tfoot>
                        <tbody
                          style={{
                            paddingTop: '30px',
                            marginLeft: '30px',
                            width: '10px',
                          }}
                        >
                          {result1.length != 0 &&
                            valueData.map((value) => (
                              <Fragment>
                                {editContactId === value.hospitalName ? (
                                  <EditableRow editFormData={editFormData} />
                                ) : (
                                  <table
                                    class="table table-bordered table-striped table-hover js-basic-example dataTable"
                                    style={{ width: '100%' }}
                                  >
                                    <thead class="" style={{ width: '' }}>
                                      <tr
                                        style={{
                                          paddingTop: '30px',
                                          marginLeft: '30px',
                                          width: '10px',
                                        }}
                                      >
                                        <td>{value.hospitalName}</td>
                                        <td>{value.hospitalCode}</td>
                                        <td>{value.hospitalType}</td>
                                        <td>{value.hospitalAddress}</td>
                                        <td>{value.city}</td>
                                        <td>{value.state}</td>
                                        <td>{value.phone}</td>
                                        <td style={{ textAlign: 'right' }}>
                                          <button
                                            onClick={() => childaction(value)}
                                            className="btn btn-xm px-1 py-1 btn btn-xm"
                                          >
                                            <FontAwesomeIcon
                                              style={{ color: 'green' }}
                                              icon={faCheck}
                                            />
                                          </button>
                                          <button
                                            onClick={() => childaction2(value)}
                                            className="btn btn-xm px-0 py-1 btn btn-xm text-align left"
                                          >
                                            <FontAwesomeIcon
                                              style={{ color: 'red' }}
                                              icon={faCircleXmark}
                                            />
                                          </button>
                                        </td>
                                      </tr>
                                    </thead>
                                  </table>
                                )}
                              </Fragment>
                            ))}
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Pending_List;

import React, { useState, Fragment, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
//import data from 'src/views/Manage User/SubAdmin List/mock-data.json';
import ReadOnlyRow from 'src/views/Hospital/Rejected Hospital/ReadOnlyRow';
import EditableRow from 'src/views/Hospital/Rejected Hospital/EditableRow';
import { baseUrl } from 'src/views/config.js/baseUrl';
import { nanoid } from 'nanoid';
import axios from 'axios';
require('dotenv').config();

const RejectedHospital_List = () => {
  const [valueData, setvalueData] = useState([]);
  const [result1, setresult1] = useState([]);

  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/admin/signupRejectHospital', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTHENTICATION_TOKEN}`,
        //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhZG1pbiIsImlhdCI6MTY1MDk1Nzc0NywiZXhwIjoxNjUxMDQ0MTQ3fQ.wMn3nw7ZiQ2EX0zZSU8APncAmXnbe3silNJe7kdkusg
      },
    });
    console.log('result1', result1);
    setresult1(result.data);
    setvalueData(result.data);
  };
  resultDAta();

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
                    <h2>Rejected Hospitals list</h2>
                  </div>
                  <div class="body table-responsive">
                    <form onSubmit={handleEditFormSubmit}>
                      <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                        <thead>
                          <tr
                            className="tablepatient"
                            style={{
                              paddingTop: '30px',
                              marginLeft: '30px',
                              width: '5px',
                            }}
                          >
                            <th>Hospital Name</th>
                            <th>Hospital Code</th>
                            <th>Hospital Type</th>
                            <th>Hospital Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Phone</th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody style={{ width: '5px' }}>
                          {result1.length != 0 &&
                            valueData.map((value) => (
                              <Fragment>
                                {editContactId === value.hospitalName ? (
                                  <EditableRow editFormData={editFormData} />
                                ) : (
                                  <ReadOnlyRow contact={value} />
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
export default RejectedHospital_List;

import React, { useState, Fragment, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
//import data from 'src/views/Manage User/SubAdmin List/mock-data.json';
import ReadOnlyRow from 'src/views/Manage SubAdmin/SubAdmin List/ReadOnlyRow';
import EditableRow from 'src/views/Manage SubAdmin/SubAdmin List/EditableRow';
import { baseUrl } from 'src/views/config.js/baseUrl';
import { nanoid } from 'nanoid';
import axios from 'axios';
require('dotenv').config();

const HospitalSubAdmin_list = () => {
  const [valueData, setvalueData] = useState([]);
  const getData = valueData;
  console.log(getData);
  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/admin/getHospitalSubAdmin', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTHENTICATION_TOKEN}`,
      },
    });
     setvalueData(result.data);
  };
  resultDAta();

  console.log('+++++++++++++++++++++++++++++++++++++++++');
  console.log(valueData);

  const [contacts, setContacts] = useState(valueData);
  const [addFormData, setAddFormData] = useState({
    uid: ' ',
    hospitalCode: '',
    duty: ' ',
  });
  const [editFormData, setEditFormData] = useState({
    uid: ' ',
    hospitalCode: '',
    duty: ' ',
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
      uid: editFormData.uid,
      hospitalCode: editFormData.hospitalCode,
      duty: editFormData.duty,
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
      uid: contact.uid,
      hospitalCode: contact.hospitalCode,
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
  // const result = await axios.get(baseUrl + '/admin/getHospitalAdmin', {
  //     headers: {
  //       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhZG1pbiIsImlhdCI6MTY1MDM0NTcxOSwiZXhwIjoxNjUwNDMyMTE5fQ.giNmNEfQWTBoLv9mdJhUgbRvHkRsV3vlMeCakffmn8o`,
  //     },
  //   });
  //   console.log('result data');
  //   console.log(result);
  //   const ghfjhhlk = result.data;
  //   console.log('ghfjhhlk===========');
  //   console.log(ghfjhhlk);
  // async function handleFormSubmit(e) {

  //     // let item = { uid, password, duty };
  //     const result = await axios.get(baseUrl + '/getAllSubAdmins', { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhZG1pbiIsImlhdCI6MTY1MDI1ODU4NCwiZXhwIjoxNjUwMzQ0OTg0fQ.uhT6nSzqPWwNMCT_jsF2ThRSDmb-NVhkDOK5tZq5_w4` } });
  //     return result
  //}

  return (
    <>
      <div>
        <section className="content">
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <div className="card">
                  <div className="header">
                    <h2> Hospital SubAdmin</h2>
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
                            <th>Userid</th>
                            <th>Hospital Code</th>
                            <th>Privilege</th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody style={{ width: '5px' }}>
                          {valueData.length !=0 &&
                            valueData.map((value) => (
                              <Fragment>
                                {editContactId === value.uid ? (
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
export default HospitalSubAdmin_list;
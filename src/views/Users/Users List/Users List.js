import React, { useState, Fragment, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
//import data from 'src/views/Manage User/SubAdmin List/mock-data.json';
import ReadOnlyRow from 'src/views/Users/Users List/ReadOnlyRow';
import EditableRow from 'src/views/Users/Users List/EditableRow';
import { baseUrl } from 'src/views/config.js/baseUrl';
import { nanoid } from 'nanoid';
import axios from 'axios';
require('dotenv').config();

const User_list = () => {
  const [valueData, setvalueData] = useState([]);
  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/admin/getAllUsers', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTHENTICATION_TOKEN}`,
      },
    });
    setvalueData(result.data);
  };
  resultDAta();
  console.log(valueData);
  const [contacts, setContacts] = useState(valueData);
  const [addFormData, setAddFormData] = useState({
    fullName: ' ',
    dateOfBirth: ' ',
    phone: ' ',
    gender: ' ',
    email: ' ',
  });
  const [editFormData, setEditFormData] = useState({
    fullName: ' ',
    dateOfBirth: ' ',
    phone: '',
    gender: '',
    email: '',
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
      fullName: editFormData.fullName,
      dateOfBirth: editFormData.dateOfBirth,
      phone: editFormData.phone,
      gender: editFormData.gender,
      email: editFormData.email,
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
      fullName: contact.fullName,
      dateOfBirth: contact.dateOfBirth,
      phone: contact.phone,
      gender: contact.gender,
      email: contact.email,
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
                    <h2>Users List</h2>
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
                            <th>Full Name</th>
                            <th>Date Of Birth</th>
                            <th>User-Id</th>
                            <th>Gender</th>
                            <th>E-mail</th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody style={{ width: '5px' }}>
                          {valueData.length !==0 &&
                            valueData.map((value) => (
                              <Fragment>
                                {editContactId === value.uid? (
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
export default User_list;

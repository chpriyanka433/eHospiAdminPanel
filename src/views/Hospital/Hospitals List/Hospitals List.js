import React, { useState, Fragment, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
//import data from 'src/views/Manage User/SubAdmin List/mock-data.json';
import ReadOnlyRow from 'src/views/Hospital/Hospitals List/ReadOnlyRow';
import EditableRow from 'src/views/Hospital/Hospitals List/EditableRow';
import { baseUrl } from 'src/views/config.js/baseUrl';
import { nanoid } from 'nanoid';
import axios from 'axios';
require('dotenv').config();

const Hospital_List = () => {
  const [valueData, setvalueData] = useState({});

  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/findHospital', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTHENTICATION_TOKEN}`,
      },
    });
    setvalueData(result.data);
  };
  resultDAta();

  const [contacts, setContacts] = useState(valueData);
  const [addFormData, setAddFormData] = useState({
    hospitalName: ' ',
    hospitalLocation: ' ',
    latitude: ' ',
    longitude: ' ',
    alldoctors: ' ',
    allbeds: ' ',
    ambulances: ' ',
  });
  const [editFormData, setEditFormData] = useState({
    hospitalName: ' ',
    hospitalLocation: ' ',
    latitude: ' ',
    longitude: ' ',
    alldoctors: ' ',
    allbeds: ' ',
    ambulances: ' ',
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
      uid: contact.uid,
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
                    <h2>Hospitals List </h2>
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
                            <th>Location</th>
                            <th>Doctors</th>
                            <th>Total Beds</th>
                            <th>Ambulances</th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody style={{ width: '5px' }}>
                          {valueData.length > 1 &&
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
export default Hospital_List;

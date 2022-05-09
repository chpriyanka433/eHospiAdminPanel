import React, { useState, Fragment, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import EditableRow from 'src/views/Insurance/Insurance List/EditableRow';
import { baseUrl } from 'src/views/config.js/baseUrl';
//import { nanoid } from 'nanoid';
import axios from 'axios';
require('dotenv').config();

const Insurance_list = () => {
  //Hooks
  const [childitem, setchilditem] = useState('');
  const [valueData, setvalueData] = useState([]);
  const [insurance, setinsurance] = useState('');
  const [editContactId, setEditContactId] = useState(null);
  const [contacts, setContacts] = useState(valueData);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let item = { insurance };
    let result = await axios.post(baseUrl + '/addInsurance', item, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTHENTICATION_TOKEN}`,
      },
    });
    await resultDAta();
  };
  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/getInsurance', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTHENTICATION_TOKEN}`,
      },
    });
    console.log('fsdfef', result.data.data);
    setvalueData(result.data);
  };
  resultDAta();

  console.log('ffffdgfdgfhhr', childitem);
  const InsuranceAction = async (id) => {
    // console.log('dhjdddsjfsjdfsfkjgfdkfdsjdjashdhs', id.insurance);
    const p = id.insurance;
    // console.log('dhjdddsjfsjdfsfkjgfdkfdsjdjashdhs', p);
    const item = { p };
    const del = async () => {
      const result = await axios.delete(baseUrl + '/deleteInsurance', {
        data: { insurance: p },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AUTHENTICATION_TOKEN}`,
        },
      });
      console.log('jhjfjfdsfsj', result);
    };

    var answer = window.confirm('Are you sure Delete');
    console.log(answer);
    if (answer) {
      del();
    }
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      insurance: editFormData.insurance,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex(
      (contact) => contact._id === editContactId,
    );
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  /* const [addFormData, setAddFormData] = useState({
          servicesName: ' ',
          servicesCharges: '',
      });*/

  const [editFormData, setEditFormData] = useState({
    insurance: ' ',
  });
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      insurance: contact.insurance,
    };
    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  };
  const handleDeleteClick = (editContactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };
  return (
    <>
      <div>
        <section class="content">
          <div class="container-fluid">
            <div class="block-header">
              <h2
                className="Addbed"
                style={{ color: '#056078', fontSize: '13px' }}
              >
                Add New Insurance
              </h2>
            </div>
            <div class=" Addnow1 col row-12 d-flex">
              <div className=" facility1 col-sm-10 ">
                <form onSubmit={handleFormSubmit}>
                  <input
                    style={{ marginLeft: '30px', paddingTop: '5px' }}
                    type="text"
                    name="insurance"
                    value={insurance}
                    required="required"
                    placeholder="Add New Insurance"
                    onChange={(e) => {
                      setinsurance(e.target.value);
                    }}
                  />

                  <button
                    type="submit"
                    className="submit2"
                    style={{
                      background: '#056078',
                      color: 'white',
                      marginLeft: '100px',
                      borderRadius: '5px',
                    }}
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
            <div class="row clearfix" style={{ marginTop: '20px' }}>
              <div class="facility col-lg-12 col-md-12 col-sm-12">
                <div class="card">
                  <div class="body table-responsive">
                    <div className="response">
                      <form onSubmit={handleEditFormSubmit}>
                        <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                          <thead>
                            <tr>
                              <th>Insurances List</th>
                              {/* <th>Action</th> */}
                            </tr>
                          </thead>
                          <tbody style={{ width: '5px' }}>
                            {valueData.length !== 0 &&
                              valueData.map((value) => (
                                <Fragment>
                                  {editContactId === value.services ? (
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
                                          <td>{value.insurance}</td>

                                          <td style={{ textAlign: 'right' }}>
                                            <button
                                              onClick={() =>
                                                InsuranceAction(value)
                                              }
                                              className="btn btn-xm px-1 py-1 btn btn-xm"
                                            >
                                              <i class="fas fa-trash"></i>
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
          </div>
        </section>
      </div>
    </>
  );
};
export default Insurance_list;

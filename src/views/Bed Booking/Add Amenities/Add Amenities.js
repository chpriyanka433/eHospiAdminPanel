import React, { useState, Fragment } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
//import { Link } from "react-router-dom";
import axios from 'axios';
import { baseUrl } from 'src/views/config.js/baseUrl';
//import data from "src/views/Bed Booking/Add Amenities/mock-data1.json";
import ReadOnlyRow1 from 'src/views/Bed Booking/Add Amenities/ReadOnlyRow1';
import EditableRow1 from 'src/views/Bed Booking/Add Amenities/EditableRow1';
require('dotenv').config();
//import { nanoid } from "nanoid";

const Add_Amenities = () => {
  const [valueData, setvalueData] = useState([]);
  const getData = valueData;
  console.log(getData);
  const [amenities, setamenities] = useState('');
  const [editContactId, setEditContactId] = useState(null);

  async function handleFormSubmit(e) {
    e.preventDefault();
    let item = { amenities };

    let result = await axios.post(baseUrl + '/addAmenities', item, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTHENTICATION_TOKEN}`,
      },
    });
    console.log(result);
  }
  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/getAmenities', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTHENTICATION_TOKEN}`,
      },
    });
    await setvalueData(result.data);
  };
  resultDAta();
  console.log(valueData);

  const AmenitiesAction = async (id) => {
    const p = id.amenities;
    console.log('dhjdddsjfsjdfsfkjgfdkfdsjdjashdhs', p);
    const item = { p };
    const delaminities = async () => {
      const result = await axios.delete(baseUrl + '/deleteAmenities', {
        data: { amenities: p },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AUTHENTICATION_TOKEN}`,
        },
      });
      console.log('jhjfjfdsfsj', result);
    };
    var answer = window.confirm('Are you sure Delete');
    console.log(answer);
    if (answer) {
      delaminities();
    }
  };

  const [contacts, setContacts] = useState(valueData);
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      amenities: editFormData.amenities,
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

  const [addFormData, setAddFormData] = useState({
    amenities: ' ',
  });
  const [editFormData, setEditFormData] = useState({
    amenities: ' ',
  });
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      amenities: contact.aminities,
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
                Add New Amenity
              </h2>
            </div>
            <div class=" Addnow1 col row-12 d-flex">
              <div className=" facility1 col-sm-10 ">
                <form onSubmit={handleFormSubmit}>
                  <input
                    style={{ marginLeft: '30px', paddingTop: '5px' }}
                    type="text"
                    name="amenities"
                    value={amenities}
                    required="required"
                    placeholder="Add New Amenity"
                    onChange={(e) => {
                      setamenities(e.target.value);
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
                              <th>Amenities List</th>
                            </tr>
                          </thead>
                          <tbody style={{ width: '5px' }}>
                            {valueData.length > 1 &&
                              valueData.map((value) => (
                                <Fragment>
                                  {editContactId === value.amenities ? (
                                    <EditableRow1 editFormData={editFormData} />
                                  ) : (
                                    <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                                      <thead style={{ textAlign: 'left' }}>
                                        <tr
                                          style={{
                                            paddingTop: '30px',
                                            marginLeft: '30px',
                                            width: '10px',
                                          }}
                                        >
                                          <td>{value.amenities}</td>
                                          <td style={{ textAlign: 'right' }}>
                                            <button
                                              onClick={() =>
                                                AmenitiesAction(value)
                                              }
                                              className="btn btn-xm px-1 py-1 btn btn-xm"
                                            >
                                              <i class="fas fa-trash"></i>
                                            </button>
                                          </td>
                                        </tr>
                                      </thead>
                                    </table>
                                    // <ReadOnlyRow1 contact={value} />
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
export default Add_Amenities;

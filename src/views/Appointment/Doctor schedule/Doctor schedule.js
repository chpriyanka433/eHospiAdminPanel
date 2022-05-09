import React,{useState, Fragment} from "react";
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import "src/asset/plugins/dropzone/dropzone.css";
import { Link } from 'react-router-dom'
import data from "src/views/Appointment/mock-data.json";
import ReadOnlyRow from "src/views/Appointment/ReadOnlyRow";
import EditableRow from "src/views/Appointment/EditableRow";
import { nanoid } from "nanoid";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faEdit , faDeleteLeft} from '@fortawesome/free-solid-svg-icons'
/*import "../../../asset/plugins/bootstrap/css/bootstrap.min.css";

import "../../../asset/css/main.css";*/



const Doctor_schedule = () => {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        Doctor_Name: "",
        Department: "",
        AvailableDys: "",
        AvailableTime: ""
    });

    const [editFormData, setEditFormData] = useState({
        Doctor_Name: "",
        Department: "",
        AvailableDys: "",
        AvailableTime: ""
       

    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault()
        const newContact = {
            id: nanoid(),
            Doctor_Name: addFormData.Doctor_Name,
            Department: addFormData.Department,
            AvailableDys: addFormData.AvailableDys,
            AvailableTime: addFormData.AvailableTime,

        };
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            Doctor_Name: editFormData.Doctor_Name,
            Department: editFormData.Department,
            AvailableDys: editFormData.AvailableDys,
            AvailableTime: editFormData.AvailableTime,

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
            Doctor_Name: contact.Doctor_Name,
            Department: contact.Department,
            AvailableDys: contact.AvailableDys,
            AvailableTime: contact.AvailableTime,

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
        <section class="content">
                    <div class="container-fluid">
                        {/*<div class="block-header">
                            <h2>Doctor_schedule</h2>
                            <small class="text-muted">Welcome to Doctor</small>
                        </div>*/}
                        <div class="row clearfix">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="card">
                                    <div class="header">
                                        <h2>Doctor_Schedule</h2>
                                        <form class="form-inline d-flex my-2 my-lg-0">
                                        <Link to="Add schedule">
                                       <button class="col-2" type="button" className="btn btn-primary" style={{borderRadius: '10px'}}>Add Schedule</button>
                                       </Link>
                                            {/*<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                                        </form>


                                    </div>
                                    <div class="body table-responsive">
                                    <form onSubmit={handleEditFormSubmit}>
                                        <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                                            <thead>
                                                <tr>
                                                    <th>Doctor Name</th>
                                                    <th>Department</th>
                                                    <th>Available Days</th>
                                                    <th>Available Time</th>
                                                    <th>Status</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tfoot>
                                            </tfoot>
                                            <tbody>
                                            {contacts.map((contact) => (
                                                        <Fragment>
                                                            {editContactId === contact.id ? (
                                                                <EditableRow
                                                                    editFormData={editFormData}
                                                                    handleEditFormChange={handleEditFormChange}
                                                                    handleCancelClick={handleCancelClick}
                                                                />
                                                            ) : (
                                                                <ReadOnlyRow
                                                                    contact={contact}
                                                                    handleEditClick={handleEditClick}
                                                                    handleDeleteClick={handleDeleteClick}
                                                                />
                                                            )}
                                                        </Fragment>
                                                    ))}
                                               
                                               
                                            </tbody>
                                        </table>
                                        </form>
                                        {/*<form onSubmit={handleAddFormSubmit}>
                                            <input
                                                type="text"
                                                name="Doctor_Name"
                                                required="required"
                                                placeholder="Enter Doctor_Name"
                                                onChange={handleAddFormChange}
                                            />
                                            <input
                                                type="text"
                                                name="Department"
                                                required="required"
                                                placeholder="Department"
                                                onChange={handleAddFormChange}
                                            />
                                             <input
                                                type="text"
                                                name="AvailableDys"
                                                required="required"
                                                placeholder="AvailableDys"
                                                onChange={handleAddFormChange}
                                            />
                                             <input
                                                type="text"
                                                name="AvailableTime"
                                                required="required"
                                                placeholder="AvailableTime"
                                                onChange={handleAddFormChange}
                                            />
                                            <button className="btn btn-primary" type="submit">Add</button>
                                            </form>*/}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </section>
        </div>
            

        </>
    )
}
export default Doctor_schedule;
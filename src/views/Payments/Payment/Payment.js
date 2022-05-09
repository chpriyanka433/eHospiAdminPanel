import React, {useState, Fragment} from "react";
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import { Link } from "react-router-dom";
import data from "src/views/Payments/mock-data.json";
import ReadOnlyRow from "src/views/Payments/ReadOnlyRow";
import EditableRow from "src/views/Payments/EditableRow";
import { nanoid } from "nanoid";
/*import "../../../asset/plugins/bootstrap/css/bootstrap.min.css";
import "../../../asset/css/main.css";*/

const Payment = () => {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        Bill_No: "",
        Bill_Date: "",
        Patient: "",
        Doctor: "",
        Amount: "",
    });

    const [editFormData, setEditFormData] = useState({
        Bill_No: "",
        Bill_Date: "",
        Patient: "",
        Doctor: "",
        Amount: "", 
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
            Bill_No: addFormData.Bill_No,
            Bill_Date: addFormData.Bill_Date,
            Patient: addFormData.Doctor,
            Doctor: addFormData.Doctor,
            Amount: addFormData.Amount,
           
        };
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            Bill_No: editFormData.Bill_No,
            Bill_Date: editFormData.Bill_Date,
            Patient: editFormData.Doctor,
            Doctor: editFormData.Doctor,
            Amount: editFormData.Amount,
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
            Bill_No: contact.Bill_No,
            Bill_Date: contact.Bill_Date,
            Patient: contact.Patient,
            Doctor: contact.Doctor,
            Amount: contact.Amount 
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
                        <div class="block-header">
                            <h2>Payments</h2>
                        </div>
                        <div class="row clearfix">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="card">
                                    <div class="header">
                                        <h2>Hospital Payments</h2>
                                        {/*<form class="form-inline d-flex my-2 my-lg-0">
                                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                         </form>*/}
                                    </div>
                                    <div class="body table-responsive">
                                    <form onSubmit={handleEditFormSubmit}>
                                        <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                                            <thead>
                                                <tr>
                                                    <th>Bill No</th>
                                                    <th>Bill Date</th>
                                                    <th>Patient</th>
                                                    <th>Doctor</th>
                                                    <th>Amount</th>
                                                    <th>status</th>
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
                                                name="Bill_No"
                                                required="required"
                                                placeholder="Enter Bill_No"
                                                onChange={handleAddFormChange}
                                            />
                                            <input
                                                type="text"
                                                name="Bill_Date"
                                                required="required"
                                                placeholder="Bill_Date"
                                                onChange={handleAddFormChange}
                                            />
                                             <input
                                                type="text"
                                                name="Patient"
                                                required="required"
                                                placeholder="Patient"
                                                onChange={handleAddFormChange}
                                            />
                                             <input
                                                type="text"
                                                name="Doctor"
                                                required="required"
                                                placeholder="Doctor"
                                                onChange={handleAddFormChange}
                                            />
                                             <input
                                                type="text"
                                                name="Amount"
                                                required="required"
                                                placeholder="Enter Amount"
                                                onChange={handleAddFormChange}
                                            />
                                            
                                            <button className="btn btn-primary" type="submit">Add</button>
                                            </form>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-sm-12 text-center">
                            <Link to="Add payment">
                            <a  className="btn btn-raised g-bg-cyan" style={{borderRadius: '10px'}}>Add payment</a>
                            </Link>
                               
                               
                            
                        </div>
                    </div>
                </section>
               
            </div>
        </>
    )
}
export default Payment;
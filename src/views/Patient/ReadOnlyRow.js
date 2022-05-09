import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.Patient_id}</td>
            <td>{contact.Name}</td>
            <td>{contact.Age}</td>
            <td>{contact.Adress}</td>
            <td>{contact.PhoneNumber}</td>
            <td>{contact.LastVisit}</td>
            
            <td>
                <div className="col-sm-12 d-flex text align-center">
                    <div className="col-sm-">
                <button className="badge badge-success">Approved</button></div>
               {/*<span class="badge badge-success">Approved</span>*/}
               <div className="col-sm-3">
                <button className="btn btn-xm px-0 py-0 btn "
                    onClick={(event) => handleEditClick(event, contact)}
                >
                    <i class="fas fa-edit"  ></i>

                </button></div>
                
                <div className="col-sm-3">
                <button className="btn btn-xm px-0 py-0 btn btn-xm"
                  onClick={() => handleDeleteClick(contact.id)}
                >
                    <i class="fas fa-trash"></i>

                </button>
                </div>
                </div>

                
            </td>
        </tr>
    );
};

export default ReadOnlyRow;
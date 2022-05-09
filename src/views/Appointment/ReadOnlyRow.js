import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.Doctor_Name}</td>
            <td>{contact.Department}</td>
            <td>{contact.AvailableDys}</td>
            <td>{contact.AvailableTime}</td>
            
            <td>
              <div className="col-sm-8 d-flex text align-center">
                  <div className="col-sm-4">
                <button className="btn btn-sm px-0 py-0 btn "
                    onClick={(event) => handleEditClick(event, contact)}
                >
                    <i class="fas fa-edit"  ></i>

                </button>
                </div>

                
                
                <div className="col-sm-4">
                <button className="btn btn-xm px-0 py-0 btn btn-xm"
                  onClick={() => handleDeleteClick(contact.id)}
                >
                    <i class="fas fa-trash" ></i>

                </button>
                </div>
                </div>

                
            </td>
        </tr>
    );
};

export default ReadOnlyRow;
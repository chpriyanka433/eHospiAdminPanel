import React from "react";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr style={{height:'5px'}}>
            <td>{contact.hospitalName}</td>
            <td>{contact.hospitalLocation}</td>
            <td>{contact.alldoctors}</td>
            <td>{contact.allbeds}</td>
            <td>{contact.ambulances}</td>
            {/*<td >
                <div className="col-sm-12 d-flex text align-center">
                    
               
               <div className="col-sm-3">
                <button className="btn btn-xm px-0 py-0 btn "
                    onClick={(event) => handleEditClick(event, contact)}
                >
                    <i class="fas fa-edit"  ></i>

                </button></div>
                
                <div className="col-sm-3">
                <button className="btn btn-xm px-0 py-0 btn btn-xm"
                  onClick={() => handleDeleteClick(contact.uid)}
                >
                    <i class="fas fa-trash"></i>

                </button>
                </div>
                </div>

                
            </td>*/}
        </tr>
    );
};

export default ReadOnlyRow;
import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'


const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr style={{height:'5px'}}>
            <td>{contact.hospitalName}</td>
            <td>{contact.hospitalCode}</td>
            <td>{contact.hospitalType}</td>
            <td>{contact.hospitalAddress}</td>
            <td>{contact.city}</td>
            <td>{contact.state}</td>
            <td>{contact.phone}</td>
          
            
            
            {/*<td >
                <div className="col-sm-12 d-flex text align-center">   
               <div className="col-sm-3">
                <button className="btn btn-xm px-0 py-0 btn "
                    onClick={(event) => handleEditClick(event, contact)}
                >
                </button></div>
                <div className="col-sm-3">
                <button className="btn btn-xm px-0 py-0 btn btn-xm"
                  onClick={() => handleDeleteClick(contact.hospitalName)}
                >
                </button>
                </div>
                </div>
                <
       
             </td>*/}
        </tr>
        
    );
};

export default ReadOnlyRow;
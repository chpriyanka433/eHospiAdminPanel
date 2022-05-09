import React from "react";


const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr style={{height:'5px'}}>
            <td>{contact.patientName}</td>
            <td>{contact.familyMember}</td>
            <td>{contact.dob}</td>
            <td>{contact.gender}</td>
            <td>{contact.fatherHusbandName}</td>
            <td>{contact.address}</td>
            <td>{contact.altPhone}</td>
            <td>{contact.email}</td>
            
            
           
            
        </tr>
    );
};

export default ReadOnlyRow;
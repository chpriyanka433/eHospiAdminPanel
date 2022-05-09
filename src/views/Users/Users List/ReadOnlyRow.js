import React from "react";


const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr style={{height:'5px'}}>
            <td>{contact.fullName}</td>
            <td>{contact.dateOfBirth}</td>
            <td>{contact.uid}</td> 
            {/* <td>{contact.phone}</td> */}
            <td>{contact.gender}</td>
            <td>{contact.email}</td>
            
            
        </tr>
    );
};

export default ReadOnlyRow;

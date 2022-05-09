import React from "react";


const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr style={{height:'5px'}}>
            <td>{contact.uid}</td>
            <td>{contact.hospitalCode}</td>
            <th>{contact.duty}</th>
        </tr>
    );
};

export default ReadOnlyRow;

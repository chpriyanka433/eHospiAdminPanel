import React from "react";


const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr style={{height:'5px'}}>
            <td>{contact.uid}</td>
            <td>{contact.duty}</td>
            

           
        </tr>
    );
};

export default ReadOnlyRow;
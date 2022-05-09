import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td> 
        <input
          placeholder="fullname"
          name="fullname "
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="dob"
          name="dob"
          value={editFormData.dateOfBirth}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="phone"
          name="phone"
          value={editFormData.phone}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="gender"
          name="gender"
          value={editFormData.gender}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="email"
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      <td>
        <div className="col-sm-12 d-flex text align-center">
          <div className="col-sm-6">
        <button type="submit" class="btn btn-sm">Save</button></div>
        <div className="col-sm-6">
        <button  className="btn btn-sm"type="button" onClick={handleCancelClick}>
          Cancel
        </button>
        </div>
        </div>
      </td>
    </tr>
  );
};

export default EditableRow;
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
          placeholder="Id"
          name="Id "
          value={editFormData.id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="password"
          name="password"
          value={editFormData.password}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="hospitalcode"
          name="Password"
          value={editFormData.hospitalcode}
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
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
          type="text"
          required="required"
          placeholder="Enter doctor_name"
          name="Doctor_Name"
          value={editFormData.Doctor_Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Department"
          name="Department"
          value={editFormData.Department}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="AvailableDays"
          name="AvailableDys"
          value={editFormData.AvailableDys}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="AvailableTime"
          name="AvailableTime"
          value={editFormData.AvailableTime}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      
      <td>
        <div className="row d-flex text align-center">
          <div className="col-sm-6">
        <button type="submit" class="btn btn-sm">Save</button>
        </div>
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

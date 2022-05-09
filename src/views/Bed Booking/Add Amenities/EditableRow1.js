import React from "react";

const EditableRow1 = ({
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
          placeholder="Add Aminities"
          name="AddAminities"
          value={editFormData.AddAminities}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="AdditionalCharges"
          name="AdditionalCharges"
          value={editFormData.AdditionalCharges}
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
        </button></div>
        </div>
      </td>
    </tr>
  );
};

export default EditableRow1;
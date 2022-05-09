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
          placeholder="Enter Bill_no"
          name="Bill_No"
          value={editFormData.Bill_No}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Bill_Date"
          name="Bill_Date"
          value={editFormData.Bill_Date}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Patient"
          value={editFormData.Patient}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Doctor"
          name="Doctor"
          value={editFormData.Doctor}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Amount"
          name="Amount"
          value={editFormData.Amount}
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

export default EditableRow;
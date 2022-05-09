import React, { useState, Fragment } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import ReadOnlyRow from 'src/views/Manage SubAdmin/SubAdmin List/ReadOnlyRow';
import EditableRow from 'src/views/Manage SubAdmin/SubAdmin List/EditableRow';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';
require('dotenv').config();

const SubAdmin_list = () => {
  const [valueData, setvalueData] = useState({});
  const resultDAta = async () => {
    const result = await axios.get(baseUrl + '/admin/getAllSubAdmins', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTHENTICATION_TOKEN}`,
      },
    });
    setvalueData(result.data);
  };
  resultDAta();
  const [editFormData, setEditFormData] = useState({
    uid: ' ',
    duty: ' ',
  });
  const [editContactId, setEditContactId] = useState(null);

  return (
    <div>
      <h2 style={{ marginLeft: '30%' }}>Sub-admin List</h2>
      <table className="table table-bordered table-striped table-hover js-basic-example dataTable">
        <thead>
          <tr
            className="tablepatient"
            style={{
              paddingTop: '30px',
              marginLeft: '30px',
              width: '5px',
              backgroundColor: '#246073',
            }}
          >
            <th style={{ color: 'white' }}>User-id</th>
            <th style={{ color: 'white' }}>Privilege</th>
          </tr>
        </thead>
        <tbody style={{ width: '5px' }}>
          {valueData.length > 0 &&
            valueData.map((value) => (
              <Fragment key={value.uid}>
                {editContactId === value.uid ? (
                  <EditableRow editFormData={editFormData} />
                ) : (
                  <ReadOnlyRow contact={value} />
                )}
              </Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default SubAdmin_list;

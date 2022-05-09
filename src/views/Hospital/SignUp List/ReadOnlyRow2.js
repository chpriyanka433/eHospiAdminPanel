import React,{useState} from "react";
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';

const ReadOnlyRow2 = ({ contact, handleEditClick, handleDeleteClick }) => {
    const [valueData, setvalueData] = useState([]);
    // const resultDAta = async () => {
    //     let item = {};
    //     const result = await axios.put(baseUrl + '/hospital/update/reject/signup', {   
    //     });
    //     console.log(result.data)
    //     setvalueData(result.data);
    // };
    // resultDAta();
    return (
        <tr style={{ height: '5px' }}>
            <td>{contact.hospitalName}</td>
            <td>{contact.hospitalCode}</td>
            <td>{contact.hospitalType}</td>
            <td>{contact.hospitalAddress}</td>
            <td>{contact.city}</td>
            <td>{contact.state}</td>
            <td>{contact.phone}</td>
            <td>{contact.status}</td>
        </tr>
    );
};

export default ReadOnlyRow2;
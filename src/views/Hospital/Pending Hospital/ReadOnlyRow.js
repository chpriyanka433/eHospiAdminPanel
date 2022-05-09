import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
//import { baseUrl } from 'src/views/config.js/baseUrl';
//import { nanoid } from 'nanoid';
import axios from 'axios';
const ReadOnlyRow = ({statechild, updatestatechild, contact, onProceed }) => {
    console.log('jhdjdhdkjkf',statechild)
    console.log('shdfgsdhdjjdsfjs', updatestatechild)

    const handleEditClick=(event, contact)=>{
        console.log('ddhdehduegfehedjdh',contact.hospitalCode)
        updatestatechild(contact.hospitalCode);
        onProceed();

    }
    return (
        <tr style={{ height: '5px' }}>
            <td>{contact.hospitalName}</td>
            <td>{contact.hospitalCode}</td>
            <td>{contact.hospitalType}</td>
            <td>{contact.hospitalAddress}</td>
            <td>{contact.city}</td>
            <td>{contact.state}</td>
            <td>{contact.phone}</td>
            {/* <th>{contact.generalWard.amenities}</th>
            <th>{contact.generalWard.facilities}</th>
            <th>{contact.services[0]}</th> */}
            <td >
                <div className="col-sm-12 d-flex text align-center">
                    <div className="col-sm-3">
                        <button className="btn btn-xm px-0 py-0 btn "
                            onClick={(event) => handleEditClick(event, contact)}
                        >
                            <FontAwesomeIcon style={{ color: 'green' }} icon={faCheck} />
                        </button></div>
                    <div className="col-sm-3">
                        <button className="btn btn-xm px-0 py-0 btn btn-xm"
                            // onClick={() => handleDeleteClick(contact.hospitalName)}
                        >
                            <FontAwesomeIcon  style={{ color: 'red' }} icon={faCircleXmark} />
                        </button>
                    </div>
                </div>
            </td>

        </tr>
    );
};
export default ReadOnlyRow;
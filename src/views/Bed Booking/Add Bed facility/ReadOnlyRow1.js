import React, { useState } from "react";
import Modal from 'react-modal'
import Popupoens from './Popupopens'
const ReadOnlyRow1 = ({ contact, handleEditClick, handleDeleteClick }) => {
    const [popupopen, setpopopen] = useState(false)
    const openBtn = (bool) => {
        setpopopen(bool)
    }
    return (
        <>
            <tr>
                <td>{contact.facilities}</td>
                <td>
                    <div className="col-sm-6 d-flex text align-center">
                        {/* <div className="col-sm-3">
                        <button className="btn btn-xm px-0 py-0 btn "
                            onClick={(event) => handleEditClick(event, contact)}
                        >
                            <i class="fas fa-edit"></i>
                        </button>
                    </div> */}
                        <div className="col-sm-3">
                            <button className="btn btn-xm px-0 py-0 btn btn-xm"
                                onClick={() => setpopopen(true)}
                            // onClick={() => handleDeleteClick(contact.id)}
                            >
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
            <Modal
                id="popupopen-modal"
                isOpen={popupopen}
                closeTimeoutMS={100}
                shouldCloseOnEsc={true}
                onRequestClose={() => setpopopen(false)}
                style={{
                    overlay: {
                        zIndex: '1000',
                    },
                    content: {
                        maxWidth: '400px',
                        height: '25%',
                        margin: 'auto',
                        alignItems: 'left',
                        borderRadius: '15px',
                    },
                }}
            >
                < Popupoens openBtn={openBtn} />
            </Modal>

        </>
    );
};

export default ReadOnlyRow1;
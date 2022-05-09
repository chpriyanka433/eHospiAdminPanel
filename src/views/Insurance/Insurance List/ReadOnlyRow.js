import React, { useState } from "react";
import Modal from 'react-modal'
import Popupoens from './Popupopens'


const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    const [popupopen, setpopopen] = useState(false)
    const openBtn = (bool) => {
        setpopopen(bool)
    }
    return (
        <>
            <tr style={{ height: '5px' }}>
                <td>{contact.insurance}</td>
                <td>
                    <div className="col-sm-6 d-flex text align-center">
                        
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

export default ReadOnlyRow;

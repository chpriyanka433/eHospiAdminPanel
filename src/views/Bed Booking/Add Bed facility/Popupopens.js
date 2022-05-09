import { green } from "@material-ui/core/colors";
import React from "react";

const Popupopens = (props) => {
    const showModalHandler1 = () => {
        props.openBtn(false);
    }
    return (
        <>
            <div className="text alignLeft">
                <button onClick={showModalHandler1} style={{ position: 'absolute', right: '5px', top: '0px', border: 'none', color: 'red' }}>&#10006; </button>
                <div className="col-sm-12  mb-6"><h6>Are you sure you want to delete?</h6></div>
                <div className="col-sm-12 text align-center mb-4 d-flex">
                    <div className="col-sm-6"> <button style={{ border: 'none', background: 'green', color: 'black', borderRadius: '5px' }}>confirm</button></div>
                    <div className="col-sm-6"><button onClick={showModalHandler1} style={{ border: 'none', background: 'red', color: 'black', borderRadius: '5px' }}>Cancel</button></div>
                </div>
            </div>
        </>
    )
}
export default Popupopens;
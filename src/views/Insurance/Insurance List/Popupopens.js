import { green } from '@material-ui/core/colors';
import React, { useState } from 'react';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';
require('dotenv').config();

const Popupopens = (props) => {
  const showModalHandler2 = () => {
    props.openBtn(false);
  };

  return (
    <>
      <div className="text alignLeft">
        <button
          onClick={showModalHandler2}
          style={{
            position: 'absolute',
            right: '5px',
            top: '0px',
            border: 'none',
            color: 'red',
          }}
        >
          &#10006;{' '}
        </button>
        <div className="col-sm-12  mb-10">
          <h6>Are you sure you want to delete?</h6>
        </div>
        <div className="col-sm-12 text align-center mb-8 d-flex">
          <div className="col-sm-6">
            {' '}
            <button
              //onClick={() => InsuranceAction()}
              style={{
                border: 'none',
                background: 'red',
                color: 'white',
                borderRadius: '5px',
                marginTop: '20px',
                marginLeft: '70px',
              }}
            >
              confirm
            </button>
          </div>
          <div className="col-sm-6">
            <button
              onClick={showModalHandler2}
              style={{
                border: 'none',
                color: 'black',
                borderRadius: '5px',
                marginTop: '20px',
                marginRight: '70px',
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Popupopens;

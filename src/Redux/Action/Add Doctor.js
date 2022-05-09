import axios from 'axios';
import {
    ADD_DOCTOR_GET_REQUEST,
    ADD_DOCTOR_GET_SUCCESS,
    ADD_DOCTOR_GET_FAIL,
  } from '../constants/Add Doctor';
  
  export const listAdd_Doctor = () => async (dispatch) => {
    try {
      dispatch({ type: ADD_DOCTOR_GET_REQUEST });
      const { data } = await axios.get(
         ' '
      );
  
      dispatch({
        type: ADD_DOCTOR_GET_SUCCESS,
        payload: [data],
      });
    } catch (error) {
      dispatch({
        type: ADD_DOCTOR_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };
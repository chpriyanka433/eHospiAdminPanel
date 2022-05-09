import axios from 'axios';
import {
    ADD_PAYMENT_GET_REQUEST,
    ADD_PAYMENT_GET_SUCCESS,
    ADD_PAYMENT_GET_FAIL,
  } from '../constants/Add Bed';
  
  export const Addpayment = () => async (dispatch) => {
    try {
      dispatch({ type: ADD_PAYMENT_GET_REQUEST });
      const { data } = await axios.get(
         ''
      );
  
      dispatch({
        type: ADD_PAYMENT_GET_SUCCESS,
        payload: [data],
      });
    } catch (error) {
      dispatch({
        type: ADD_PAYMENT_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };
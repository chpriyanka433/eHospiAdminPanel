import axios from 'axios';
import {
    ADD_BED_GET_REQUEST,
    ADD_BED_GET_SUCCESS,
    ADD_BED_GET_FAIL,
  } from '../constants/Add Bed';
  
  export const listAdd_Bed = () => async (dispatch) => {
    try {
      dispatch({ type: ADD_BED_GET_REQUEST });
      const { data } = await axios.get(
         `${process.env.REACT_APP_WEBSITE_URL_KICKR}`
      );
  
      dispatch({
        type: ADD_BED_GET_SUCCESS,
        payload: [data],
      });
    } catch (error) {
      dispatch({
        type: ADD_BED_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };
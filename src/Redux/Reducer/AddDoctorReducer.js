import {
    ADD_DOCTOR_GET_REQUEST,
    ADD_DOCTOR_GET_SUCCESS,
    ADD_DOCTOR_GET_FAIL,
  } from '../constants/Add Doctor';
  
  export const Adddoctor = (
    state = { adddoctor: [], loading: true },
    action
  ) => {
    switch (action.type) {
      case ADD_DOCTOR_GET_REQUEST:
        return { loading: true, adddoctor: [] };
      case ADD_DOCTOR_GET_SUCCESS:
        return { loading: false, adddoctor: action.payload };
      case ADD_DOCTOR_GET_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
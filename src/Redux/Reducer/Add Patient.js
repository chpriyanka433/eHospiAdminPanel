import {
    ADD_PATIENT_GET_REQUEST,
    ADD_PATIENT_GET_SUCCESS,
    ADD_PATIENT_GET_FAIL,
  } from '../constants/Add Patient';
  
  export const Addpatient = (
    state = { addpatient: [], loading: true },
    action
  ) => {
    switch (action.type) {
      case ADD_PATIENT_GET_REQUEST:
        return { loading: true, addpatient: [] };
      case ADD_PATIENT_GET_SUCCESS:
        return { loading: false, addpatient: action.payload };
      case ADD_PATIENT_GET_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
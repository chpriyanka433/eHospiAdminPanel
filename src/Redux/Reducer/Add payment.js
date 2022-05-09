import {
    ADD_PAYMENT_GET_REQUEST,
    ADD_PAYMENT_GET_SUCCESS,
    ADD_PAYMENT_GET_FAIL,
  } from '../constants/Add Patient';
  
  export const Addpayment = (
    state = { addpayment: [], loading: true },
    action
  ) => {
    switch (action.type) {
      case ADD_PAYMENT_GET_REQUEST:
        return { loading: true, addpayment: [] };
      case ADD_PAYMENT_GET_SUCCESS:
        return { loading: false, addpayment: action.payload };
      case ADD_PAYMENT_GET_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
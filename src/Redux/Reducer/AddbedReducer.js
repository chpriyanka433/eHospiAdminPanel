import {
    ADD_BED_GET_REQUEST,
    ADD_BED_GET_SUCCESS,
    ADD_BED_GET_FAIL,
  } from '../constants/Add Bed';
  
  export const addbed = (
    state = { addbed: [], loading: true },
    action
  ) => {
    switch (action.type) {
      case ADD_BED_GET_REQUEST:
        return { loading: true, addbed: [] };
      case ADD_BED_GET_SUCCESS:
        return { loading: false, addbed: action.payload };
      case ADD_BED_GET_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
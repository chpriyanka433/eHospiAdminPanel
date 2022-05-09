import {
    ADD_SCHEDULE_GET_REQUEST,
    ADD_SCHEDULE_GET_SUCCESS,
    ADD_SCHEDULE_GET_FAIL,
  } from '../constants/Addschedule';
  
  export const addschedule = (
    state = { addschedule: [], loading: true },
    action
  ) => {
    switch (action.type) {
      case ADD_SCHEDULE_GET_REQUEST:
        return { loading: true, addschedule: [] };
      case ADD_SCHEDULE_GET_SUCCESS:
        return { loading: false, addschedule: action.payload };
      case ADD_SCHEDULE_GET_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
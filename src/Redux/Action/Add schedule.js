import {
    ADD_SCHEDULE_GET_REQUEST,
    ADD_SCHEDULE_GET_SUCCESS,
    ADD_SCHEDULE_GET_FAIL,
  } from '../constants/Addschedule';
  
  export const listAdd_schedule = () => async (dispatch) => {
    try {
      dispatch({ type: ADD_SCHEDULE_GET_REQUEST });
      const { data } = await axios.get(
         ''
      );
  
      dispatch({
        type: ADD_SCHEDULE_GET_SUCCESS,
        payload: [data],
      });
    } catch (error) {
      dispatch({
        type: ADD_SCHEDULE_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };
import axios from 'axios';
import {
    ADD_DEPARTMENT_GET_REQUEST,
    ADD_DEPARTMENT_GET_SUCCESS,
    ADD_DEPARTMENT_GET_FAIL,
  } from '../constants/Add Department';

  export const listAdd_Department = ()=> async(dispatch) =>{
      try{
          dispatch({type: ADD_DEPARTMENT_GET_REQUEST});
          const {data}  = await axios.get('');
          dispatch({type: ADD_DEPARTMENT_GET_SUCCESS,
            payload: [data],
        });
      }catch(error){
          dispatch({type: ADD_DEPARTMENT_GET_FAIL,
            payload:
            error.response && error.response.data.message
            ?error.response.data.message:error.response
        });
      }
  };
  
  
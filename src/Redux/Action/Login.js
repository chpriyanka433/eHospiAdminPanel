import axios from 'axios';
//import jwt from 'jsonwebtoken';

import {
  LOGIN_GET_REQUEST,
  LOGIN_GET_SUCCESS,
  LOGIN_GET_FAIL,
  
} from '../constants/Login';
export const signIn =
  ({ Signinusername, SigninPassword }) =>
  async (dispatch) => {
    try {
      const config = {
        header: {
          'Content-type': 'multipart/form-data',
        },
      };

      dispatch({ type: LOGIN_GET_REQUEST });
      const { data } = await axios.post(
        'http://localhost:8000/adminLogin',
        {  Signinusername, SigninPassword },
        config
        
      );
      console.log(data);
      dispatch({
        type: LOGIN_GET_SUCCESS,
        payload: data,
      });
      
    } catch (error) {
      dispatch({
        type: LOGIN_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };
  


  




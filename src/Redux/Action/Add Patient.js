import axios from 'axios';
import{
    ADD_PATIENT_GET_REQUEST,
    ADD_PATIENT_GET_SUCCESS,
    
    ADD_PATIENT_GET_FAIL,
} from '../constants/Add Patient';

export const Addpatient =()=>async (dispatch) =>{
    try{
        dispatch({type: ADD_PATIENT_GET_REQUEST});
        const {data} = await axios.get('');
        dispatch({
        type: ADD_PATIENT_GET_SUCCESS,
        payload: [data],
        });
    }catch(error){
        dispatch({
        type:ADD_PATIENT_GET_FAIL,
        payload:
        error.response && error.response.data.message
        ?error.response.data.message:error.response

    })

    }

}
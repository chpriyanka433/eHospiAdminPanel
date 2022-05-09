
import {
    ADD_DEPARTMENT_GET_REQUEST,
    ADD_DEPARTMENT_GET_SUCCESS,
    ADD_DEPARTMENT_GET_FAIL,
} from '../constants/Add Department';

export const adddepartment = (state = { adddepartment: [], loading: true }, action) => {
    switch (action.type) {
        case ADD_DEPARTMENT_GET_REQUEST:
            return { loading: [], adddepartment: [] };
        case ADD_DEPARTMENT_GET_SUCCESS:
            return { loading: false, adddepartment: action.payload };
        case ADD_DEPARTMENT_GET_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state


    }
};

import axios from 'axios';
import { GET_CODE, CODE_LOADING, CLEAR_CURRENT_CODE } from './types';

// Get current code
export const getCurrentCode = () => dispatch => {
    dispatch(setCodeLoading());
    axios.get('/api/code')
        .then(res =>
            dispatch({
                type: GET_CODE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_CODE,
                payload: {}   
            })
        );
}

// Create Profile

// export const createCode = (profileData, history)

// code Loading

export const setCodeLoading = () => {
    return {
        type: CODE_LOADING
    }
}

// clar code

export const clearCurrentCode = () => {
    return {
        type: CLEAR_CURRENT_CODE
    }
}
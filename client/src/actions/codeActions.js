import axios from 'axios';
import { GET_CODE, CODE_LOADING, GET_ERRORS } from './types';

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

// code Loading

export const setCodeLoading = () => {
    return {
        type: CODE_LOADING
    }
}
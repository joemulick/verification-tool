import axios from 'axios';
import { GET_CODE, CODE_LOADING, CLEAR_CURRENT_CODE, GET_ERRORS } from './types';

// Post current code
export const codeCheck = codeObject => dispatch => {

    axios
        .post('/api/code/checkVerify', codeObject)
        .then(res => {
            dispatch({
                type: GET_CODE,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch({
            type: GET_ERRORS,
            payload: err.response.data
            }) 
        );
}

// Add Code
// export const addCode = (codeData, history) => dispatch => {
//     axios   
//         .post('/api/code', codeData)
//         .then(res => history.push('/dashboard'))
//         .catch(err =>
//         dispatch({
//             type: GET_ERRORS,
//             payload: err.response.data
//         }))
// }

// code Loading
export const setCodeLoading = () => {
    return {
        type: CODE_LOADING
    }
}

// clear code
export const clearCurrentCode = () => {
    return {
        type: CLEAR_CURRENT_CODE
    }
}
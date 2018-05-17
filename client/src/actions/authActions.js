import axios from 'axios';
import { GET_ERRORS } from './types';

// Login User
export const loginUser = userData => dispatch => {
    axios.get('/api/adminLogin/login', userData)
        .then(res => console.log(res.userData))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
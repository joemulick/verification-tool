import { TEST_DISPATCH } from './types';

// Login User
export const loginUser = (userData) => {
    return {
        type: TEST_DISPATCH,
        payload: userData
    }
}
import { GET_CODE, CODE_LOADING } from  '../actions/types'

const initialState = {
    code: null,
    codes: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CODE_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_CODE:
            return {
                ...state,
                code: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
import { GET_CODE, CODE_LOADING, CLEAR_CURRENT_CODE } from  '../actions/types'

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
        case CLEAR_CURRENT_CODE:
            return {
                ...state,
                profile: null
            }
        default:
            return state;
    }
}
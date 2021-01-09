import { FETCH_USER, LOGIN } from '../actions/types';

const initialState = {
    user: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGIN:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;  
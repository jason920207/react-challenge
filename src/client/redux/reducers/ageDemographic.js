import {
    FETCHING,
    GET_AGE_DEMOGRAPHIC_OF_USER,
    GET_AGE_DEMOGRAPHIC_OF_USER_ERROR,
} from '../actions/users';

const initialState = {
    isLoading: false,
    ageDemographicOfUser: [],
    ageDemographicError: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCHING:
            return { ...state, isLoading: true };
        case GET_AGE_DEMOGRAPHIC_OF_USER:
            return { ...state, ageDemographicOfUser: action.payload, isLoading: false };
        case GET_AGE_DEMOGRAPHIC_OF_USER_ERROR:
            return { ...state, ageDemographicError: 'fetching age demographic error, try again', isLoading: false };
        default:
            return state;
    }
}
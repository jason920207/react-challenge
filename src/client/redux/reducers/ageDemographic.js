import {
  GET_AGE_DEMOGRAPHIC_OF_USER_FETCHING,
  GET_AGE_DEMOGRAPHIC_OF_USER,
  GET_AGE_DEMOGRAPHIC_OF_USER_ERROR,
} from '../actions/ageDemographic';

const initialState = {
  isLoading: false,
  ageDemographicOfUser: [],
  ageDemographicError: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_AGE_DEMOGRAPHIC_OF_USER_FETCHING:
      return { ...state, isLoading: true };
    case GET_AGE_DEMOGRAPHIC_OF_USER:
      return { ...state, ageDemographicOfUser: action.payload, isLoading: false };
    case GET_AGE_DEMOGRAPHIC_OF_USER_ERROR:
      return { ...state, ageDemographicError: 'fetching age demographic error, try again', isLoading: false };
    default:
      return state;
  }
}

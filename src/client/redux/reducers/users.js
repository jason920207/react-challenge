import {
  FETCHING,
  GET_USERS,
  GET_AGE_DEMOGRAPHIC_OF_USER
} from '../actions/users';

const initialState = {
  users: [],
  isLoading: false,
  
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return { ...state, isLoading: true };
    case GET_USERS:
      return { ...state, users: action.payload, isLoading: false };
    case GET_AGE_DEMOGRAPHIC_OF_USER:
      return { ...state, users: action.payload, isLoading: false };
    default:
      return state;
  }
}

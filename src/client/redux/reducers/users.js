import {
  FETCHING,
  GET_USERS,
  GET_USERS_ERROR
} from '../actions/users';

const initialState = {
  users: [],
  isLoading: false,
  usersError: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return { ...state, isLoading: true };
    case GET_USERS:
      return { ...state, users: action.payload, isLoading: false };
    case GET_USERS_ERROR:
      return { ...state, usersError: 'fetching users error, try again', isLoading: false };
    default:
      return state;
  }
}

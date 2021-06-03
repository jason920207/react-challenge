import axios from "axios";

export const GET_USERS_FETCHING = "FETCHING";
export const GET_USERS = 'GET_USERS'
export const GET_AGE_DEMOGRAPHIC_OF_USER = 'GET_AGE_DEMOGRAPHIC_OF_USER'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'
export const GET_AGE_DEMOGRAPHIC_OF_USER_ERROR = 'GET_AGE_DEMOGRAPHIC_OF_USER_ERROR'

const api = "http://localhost:3000";

export const getUsers = () => async (dispatch) => {
    try {
        dispatch({ type: GET_USERS_FETCHING });
        const resp = await axios.get(`${api}/users`);
        dispatch({ type: GET_USERS, payload: resp.data });
    } catch (error) {
        dispatch({ type: GET_USERS_ERROR });
    }
};



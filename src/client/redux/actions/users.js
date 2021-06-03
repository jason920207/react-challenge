import axios from "axios";

export const FETCHING = "FETCHING";
export const GET_USERS = 'GET_USERS'
export const GET_AGE_DEMOGRAPHIC_OF_USER = 'GET_AGE_DEMOGRAPHIC_OF_USER'

const api = "http://localhost:3000";

export const getUsers = () => async (dispatch) => {
    try {
        dispatch({ type: FETCHING });
        const resp = await axios.get(`${api}/users`);
        dispatch({ type: GET_USERS, payload: resp.data });
    } catch (error) {
        console.log(error);
    }
};


export const getAgeDemographicOfUser = (item) => async (dispatch) => {
    try {
        dispatch({ type: FETCHING });
        const resp = await axios.get(`${api}/users/age?item=${item}`);
        dispatch({ type: GET_AGE_DEMOGRAPHIC_OF_USER, payload: resp.data });
    } catch (error) {
        console.log(error);
    }
}
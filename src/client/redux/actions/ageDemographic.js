import axios from "axios";

export const GET_AGE_DEMOGRAPHIC_OF_USER_FETCHING = "GET_AGE_DEMOGRAPHIC_OF_USER_FETCHING";
export const GET_AGE_DEMOGRAPHIC_OF_USER = 'GET_AGE_DEMOGRAPHIC_OF_USER'
export const GET_AGE_DEMOGRAPHIC_OF_USER_ERROR = 'GET_AGE_DEMOGRAPHIC_OF_USER_ERROR'

const api = "http://localhost:3000";

export const getAgeDemographicOfUser = (item) => async (dispatch) => {
    try {
        dispatch({ type: GET_AGE_DEMOGRAPHIC_OF_USER_FETCHING });
        const resp = await axios.get(`${api}/users/age?item=${item}`);
        dispatch({ type: GET_AGE_DEMOGRAPHIC_OF_USER, payload: resp.data });
    } catch (error) {
        dispatch({ type: GET_AGE_DEMOGRAPHIC_OF_USER_ERROR });
    }
}
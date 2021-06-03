import axios from "axios";

export const GET_AGE_DEMOGRAPHIC_OF_USER_FETCHING = "GET_AGE_DEMOGRAPHIC_OF_USER_FETCHING";
export const GET_AGE_DEMOGRAPHIC_OF_USER = 'GET_AGE_DEMOGRAPHIC_OF_USER'
export const GET_AGE_DEMOGRAPHIC_OF_USER_ERROR = 'GET_AGE_DEMOGRAPHIC_OF_USER_ERROR'

const api = "http://localhost:3000";

const fetchingAgeDemographicOfUse = (dispatch) => {
    dispatch({ type: GET_AGE_DEMOGRAPHIC_OF_USER_FETCHING });
}

const getAgeDemographicOfUseSuccess = (dispatch, payload) => {
    dispatch({ type: GET_AGE_DEMOGRAPHIC_OF_USER, payload });
}

const getAgeDemographicOfUseFail = (dispatch, payload) => {
    dispatch({ type: GET_AGE_DEMOGRAPHIC_OF_USER_ERROR, payload });
}

export const getAgeDemographicOfUser = (item) => async (dispatch) => {
    try {
        fetchingAgeDemographicOfUse(dispatch)
        const resp = await axios.get(`${api}/users/age?item=${item}`);
        getAgeDemographicOfUseSuccess(dispatch, resp.data)
    } catch (error) {
        getAgeDemographicOfUseFail(dispatch, error)
    }
}
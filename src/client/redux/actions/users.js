import { getUsersApi } from '../../api'


export const GET_USERS_FETCHING = "FETCHING";
export const GET_USERS = 'GET_USERS'
export const GET_AGE_DEMOGRAPHIC_OF_USER = 'GET_AGE_DEMOGRAPHIC_OF_USER'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'
export const GET_AGE_DEMOGRAPHIC_OF_USER_ERROR = 'GET_AGE_DEMOGRAPHIC_OF_USER_ERROR'



const fetchingUser = (dispatch) => {
    dispatch({ type: GET_USERS_FETCHING });
}

const getUsersSuccess = (dispatch, payload) => {
    dispatch({ type: GET_USERS, payload });
}

const getUsersFail = (dispatch, payload) => {
    dispatch({ type: GET_USERS_ERROR, payload });
}

export const getUsers = () => async (dispatch) => {
    try {
        fetchingUser(dispatch)
        const resp = await getUsersApi()
        getUsersSuccess(dispatch, resp.data)
    } catch (error) {
        getUsersFail(dispatch, error)
    }
};



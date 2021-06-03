import axios from "axios";

const api = "http://localhost:3000";


export const getUsersApi = () => {
    return axios.get(`${api}/users`);
}

export const getAgeDemographicOfUseApi = (item) => {
    return axios.get(`${api}/users/age?item=${item}`);
}

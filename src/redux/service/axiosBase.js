import axios from 'axios';

export const axiosInst = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

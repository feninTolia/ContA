import { axiosInst } from 'redux/service/axiosBase';

export const setAuthHeader = token => {
  axiosInst.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axiosInst.defaults.headers.common.Authorization = '';
};

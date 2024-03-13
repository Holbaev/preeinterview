import axios from "axios";
import axiosApi from "../api/api";

export const login = async (data) => {
  return axios.post("https://print.kstu.kg/peerinterview/signin/", data);
};
export const signup = async (data) => {
  return axios.post("https://print.kstu.kg/peerinterview/signup/", data);
};
export const changePassword = async (token , data) => {
  return axios.post(`https://print.kstu.kg/peerinterview/password-reset/confirm/${token}/` , data);
};
export const confirmUser = async (token) => {
  return axios.get(`https://print.kstu.kg/peerinterview/activate/${token}`);
};
export const resetPassword = async (data) => {
  return axios.post("https://print.kstu.kg/peerinterview/reset/", data);
};

export const logout = async (data) => {
  return axiosApi.post("/logout/", data);
};


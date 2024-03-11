import axios from "axios";

const axiosApi = axios.create({
    baseURL:'https://print.kstu.kg/peerinterview/',
});

axiosApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  });

export default axiosApi;


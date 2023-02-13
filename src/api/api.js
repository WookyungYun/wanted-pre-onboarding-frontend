import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER_URL,
});

api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (config) {
    const token = localStorage.getItem("token");
    config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

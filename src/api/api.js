import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER_URL,
});

// const setAuthHeader = (token) => {
//   if (token) {
//     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   }
// };

// api.interceptors.request.use(async (config) => {
//   const token = localStorage.getItem("token");
//   const isAccess = !!token;
//   if (isAccess) {
//     setAuthHeader(token);
//     return {
//       ...config,
//       headers: { ...config, Authorization: `Bearer ${token}` },
//     };
//   }
//   return config;
// });
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

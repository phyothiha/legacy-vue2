import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

// need to add bearer token in every header for auth request

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    // this is send everytime even user request a guest resource
    // what about with cookie?
    // Cookie send every request to the server
    if (localStorage.getItem("token")) {
      config.headers["Authorization"] =
        "Bearer " + localStorage.getItem("token");
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default api;

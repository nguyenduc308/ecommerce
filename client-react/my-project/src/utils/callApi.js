import axios from "axios";

const callApi = (token) => {
  return axios.create({
    baseURL: "http://localhost:8000/api/auth",
    // headers: {
    //   token: token,
    //   "Content-Type": "application/json",
    // },
  });
};

export default callApi;

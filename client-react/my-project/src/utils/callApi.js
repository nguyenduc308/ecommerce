import axios from "axios";

const callApi = () => {
  return axios.create({
    baseURL: "http://localhost:8000/api",
  });
};

export default callApi;

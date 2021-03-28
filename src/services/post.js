import axios from "axios";

const API_URL = "http://localhost:3001/";

export const postData = (data, token) => {
  return axios.post(`${API_URL}post`, data, {
    headers: { authorization: "Bearer " + token },
  });
};


